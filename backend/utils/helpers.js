import { v2 as cloudinary } from "cloudinary";

export const uploadToCloudinary = async (path, folder) => {
  try {
    const data = await cloudinary.uploader.upload(path, { folder: folder });
    return { url: data.secure_url, publicId: data.public_id };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
