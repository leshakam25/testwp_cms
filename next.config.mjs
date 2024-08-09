/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '**',
			},
			{
				protocol: 'http',
				hostname: '192.168.10.113',
				pathname: '**',
			},
		],
	}
};

export default nextConfig;
