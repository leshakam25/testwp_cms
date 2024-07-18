/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'www.shutterstock.com',
				pathname: '**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '**',
			},
		],
	}
};

export default nextConfig;
