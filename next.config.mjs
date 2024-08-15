/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
	},
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
