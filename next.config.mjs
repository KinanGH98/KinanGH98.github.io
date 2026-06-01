/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.AssetPrefix ? process.env.AssetPrefix : "",
  basePath: process.env.AssetPrefix ? process.env.AssetPrefix : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
