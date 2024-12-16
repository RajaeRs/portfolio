import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'; // Check if running in GitHub Actions
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Use a fallback for GITHUB_REPOSITORY if undefined
  const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'default-repo-name';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

