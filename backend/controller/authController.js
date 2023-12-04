import userModel from "../model/userSchema.js";
import bcrypt from "bcrypt";
import emailValidator from "email-validator";



export const signUp = async (req, res) => {
  const { name, email, password , role , location , confirmPassword } = req.body;

  const validEmail = emailValidator.validate(email);
  
  
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address 📩"
    });
  }

  try {
    
    // no need of this
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm Password does not match ❌"
      });
    }

    const userInfo = new userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(200).json({
        success: false,
        message: `Account already exist with the provided email ${email} 😒`
      });
    }

    return res.status(200).json({
      message: error.message
    });
  }
};


export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "email and password are required"
    });
  }

  try {
    const user = await userModel
      .findOne({
        email
      })
      .select("+password");

    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log(user)
      console.log(await bcrypt.compare(password, user.password))
      return res.status(400).json({
        success: true,
        message: "invalid credentials"
      });
    }

    const token = user.jwtToken();
    user.password = undefined;
    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000, //24hr
      httpOnly: true ,
      sameSite : "none",
      secure: true
    };

    res.cookie("token",token,cookieOption)
    
    res.status(200).json({
      success: true,
      data: user,
      token: token
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message
    });
  }
};


export const getUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


