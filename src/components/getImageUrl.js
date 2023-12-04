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


async function getImageUrl(imageUpload) {
    try {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      
      // Upload the image
      await uploadBytes(imageRef, imageUpload);
      console.log("Uploaded a blob or file!");
  
      // Get the download URL
      const downloadURL = await getDownloadURL(imageRef);
      console.log("Download URL:", downloadURL);
  
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Propagate the error
    }
  }
  

export default getImageUrl;