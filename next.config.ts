import type { NextConfig } from "next";



const isProduction = process.env.NODE_ENV == "production"
const nextConfig: NextConfig = {
  basePath: isProduction?"/Portofolio":"",  
  output: "export",
  distDir: "dist"
  /* config options here */
};

export default nextConfig;
