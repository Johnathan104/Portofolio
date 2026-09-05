import type { NextConfig } from "next";



const isProduction = process.env.NODE_ENV == "production"
const basePath =isProduction?"/Portofolio":""
const nextConfig: NextConfig = {
  basePath,  
  output: "export",
  distDir: "dist",
  env: {
    basePath
  }
  /* config options here */
};

export default nextConfig;
