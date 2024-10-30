import React, { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import axios from 'axios';
import "../../styles/uploadImageb.css";

export const UploadImage = () => {
  const [imageUrls, setImageUrls] = useState([]); 
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const upLoadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    const newImageUrls = [];

    for (let file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', upLoadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      newImageUrls.push(data.secure_url);
    }

    newImageUrls.forEach(async(url) => {
      try {
        const response = await axios.post(process.env.BACKEND_URL + "/api/upload", { image_url: url });
      } catch (error) {
        console.error('Error saving images to backend:', error);
      }
    });
    setImageUrls(newImageUrls)
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    },
  });

  return (
    <div>
      <input type="file" accept='image/*' multiple onChange={handleImageUpload} className='upload-button'/>
      <div className="image-gallery">
        {imageUrls.map((url, index) => {
          const myImage = cld.image(url);
          myImage.resize(fill().width(250).height(250));
          return <img key={index} src={url} className="uploaded-image" />;
        })}
      </div>
    </div>
  );
};
