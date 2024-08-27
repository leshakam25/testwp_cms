/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
		WORDPRESS_AUTH_REFRESH_TOKEN: process.env.WORDPRESS_AUTH_REFRESH_TOKEN
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
