require('dotenv').config();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'medime-profile-images.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
  env: {
    HEALTHCARE_PROVIDERS_API_KEY: process.env.NEXT_PUBLIC_JSONBIN_API_KEY,
    HEALTHCARE_PROVIDERS_BIN_ID: process.env.NEXT_PUBLIC_HC_PROVIDERS_BIN_ID,
    NEWS_BIN_ID: process.env.NEXT_PUBLIC_NEWS_BIN,
    AWS_ACCESSKEY_I: process.env.NEXT_PUBLIC_AWS_ACCESSKEY_ID,
    AWS_ACCESSKEY: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
    AWS_REGION: process.env.NEXT_PUBLIC_AWS_REGION,

  },
};

module.exports = nextConfig;
