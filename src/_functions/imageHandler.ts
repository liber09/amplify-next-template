import {Cloudinary} from "@cloudinary/url-gen";

export default function ImageHandler(imageId: string){
    const cloud = new Cloudinary({cloud: {cloudName: 'dubvtauu4'}});
    const image = cloud.image(imageId);
    return image;
}
