import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
