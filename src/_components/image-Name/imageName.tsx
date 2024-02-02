import React, { useState } from 'react';
import Image from 'next/image';
import styles from './imageName.module.scss';
//import AWS from 'aws-sdk';
import ImageHandler from '@/src/_functions/imageHandler';
import Link from 'next/link';

interface ImageNameProps {
    identificationNumber: string | null;
  }

  const ImageName: React.FC<ImageNameProps> = ({ identificationNumber }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
  
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };
  //ToDo: Temporary remove but want to store to AWS 
  /* const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && identificationNumber) {
        try {
            console.log('Before AWS SDK initialization');
            // Initialize AWS SDK with your credentials
            AWS.config.update({
              accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESSKEY_ID,
              secretAccessKey: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
              region: process.env.NEXT_PUBLIC_AWS_REGION,
            });
            console.log(process.env.NEXT_PUBLIC_AWS_ACCESSKEY_ID);
            console.log(process.env.NEXT_PUBLIC_AWS_ACCESSKEY);
            console.log(process.env.NEXT_PUBLIC_AWS_REGION);
            // Create S3 instance
            const s3 = new AWS.S3();
            console.log('After AWS SDK initialization');
            // Generate a unique filename or use the existing file name
            const fileName = `${identificationNumber}-${Date.now()}-${file.name}`;

            console.log('Before S3 upload');
            // Upload the file to S3 bucket
            const data = await s3.upload({
                Bucket: 'medime-profile-images',
                Key: fileName,
                Body: file,
              }).promise();
            console.log('Data from S3 upload:', data);
            // Get the public URL of the uploaded file
            const imageUrl = data.Location;
            console.log(imageUrl);
            // Update state with the uploaded image URL
            setSelectedImage(imageUrl);
          } catch (error) {
                console.error('Error uploading image to S3:', error);
                // Handle error as needed
          }
        }
      }; */

      return (
        <section className={styles.imageNameContainer}>
          <article className={styles.imageWrapper}>
            {/* Label wrapped around the default image */}
            <label htmlFor="fileInput" className={styles.imageLabel}>
              {selectedImage ? (
                <Image
                  className={styles.profileImage}
                  src={selectedImage}
                  alt={"profil bild på inloggad användare"}
                  width={390}
                  height={390}
                />
              ) : (
                <Image
                  className={styles.profileImage}
                  src={ImageHandler("vecteezy_illustration-of-human-icon-vector-user-symbol-icon-modern_8442086_aho0fs").toURL()}
                  alt={"Standard användarbild"}
                  width={390}
                  height={390}
                />
              )}
            </label>
        <p className={styles.userName}>Kalle von Anksson</p>
      </article>
      
      {/* Hidden file input for triggering file upload */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </section>
  );
};

export default ImageName;
