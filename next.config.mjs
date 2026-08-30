import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  // Lets a preview build land in .next.new instead of overwriting the .next
  // the live systemd service is currently serving from mid-build.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

export default withMDX(config);
