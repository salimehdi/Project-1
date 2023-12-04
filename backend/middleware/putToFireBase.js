import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const firebaseConfig = {
  apiKey: "AIzaSyACDrpqhtEu8Nt5Y7-hlKVBL5_YYn3tfyw",
  authDomain: "accelbi-timesheet.firebaseapp.com",
  projectId: "accelbi-timesheet",
  storageBucket: "accelbi-timesheet.appspot.com",
  messagingSenderId: "728847797421",
  appId: "1:728847797421:web:dca462877535c5241bca24",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);


async function putToFireBase(req ,res, next) {
  const imageUpload = req.body.image; // Assuming your request contains the image file


  const imagesListRef = ref(storage, "images/");
  
    let downloadURL = "";
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        downloadURL = url;
      });
    });
  


  


  console.log("Uploaded a blob or file!");
  console.log("Download URL:", downloadURL);

  req.downloadURL = downloadURL;

  next();
}

export default putToFireBase;