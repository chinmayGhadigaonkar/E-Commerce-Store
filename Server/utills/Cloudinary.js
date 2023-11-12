import {v2 as cloudinary} from 'cloudinary';

const uploadImg= ()=>{
  cloudinary.uploader.upload("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg").then(result=>{
    console.log(result);
  }).catch(e=>console.log(e))

}

export default uploadImg
