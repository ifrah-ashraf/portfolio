/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '', // No port needed if it's the default (443 for https)
          pathname: '/**', // Allow all paths under images.unsplash.com
        },
      ],
    },
  };
  
  export default nextConfig;
  