import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: [
      'myprojectvideos123.s3.ap-south-1.amazonaws.com',
      'i.ytimg.com', // YouTube thumbnails
      'youtube.com',  // YouTube links
      'www.youtube.com' // YouTube links
    ],
  },
};

export default withMDXConfig(nextConfig);
