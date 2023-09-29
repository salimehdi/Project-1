import express from 'express';
import cors from 'cors';
import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';
import {db , connectToDB} from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password  } = req.body;
    if (!emailValidator.validate(email)) {
      res.status(400).json({ error: 'Invalid email' });
    } else {
        (async () => {
        const searchUserFromMonogDB = await db.collection('users').findOne({ email: email});
        {
            if (!searchUserFromMonogDB) {
              res.status(400).json({ error: 'User does not exist' });
            } else {
                bcrypt.compare(password, searchUserFromMonogDB.password, (err, result) => {
                    if (result) {
                      res.status(200).json({ ... searchUserFromMonogDB });
                    } else {
                        console.log(searchUserFromMonogDB);
                      res.status(500).json({message: 'Password is incorrect' });
                    }
                  });
            }
        }
        
        })()
    }   
}
);

app.post('/api/signup', (req, res) => { 
    const { email, password, confirmPassword , name } = req.body;
        if (!emailValidator.validate(email)) {
        res.status(400).json({ error: 'Invalid email' });
        } else if (password.length < 6) {
        res.status(400).json({ error: 'Password must be 6 characters or longer' });
        } else if (password !== confirmPassword) {
        res.status(400).json({ error: 'Passwords must match' });
        } else {
            bcrypt.hash(password, 10, async(err, hash) => {
              if (err) {
                console.error(err);
                return;
              }
              (async () => {
              await db.collection('users').insertOne({ email: email, password: hash, name: name });
              })()
              password = "";
            });
        res.status(200).json({ message: 'Signup successful' });
        }   
    }
);

// Start the server
const PORT = process.env.PORT || 8000;

connectToDB(() => {
  console.log("Successfully connected to DB");
  app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`);
  });
});