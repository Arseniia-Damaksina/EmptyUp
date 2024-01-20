import * as cloudinary from "cloudinary";
import dotenv from "dotenv"
dotenv.config()

export const cloudinaryConfig = () => {
    cloudinary.config({    // ==> basic cloudinary config (you will retrieve the infos in your cloudinary account)
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

}
