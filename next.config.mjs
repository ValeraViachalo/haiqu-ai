/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.haiqu.ai',
                port: '',
                pathname: '/**',
            },
        ],
    },
};



export default nextConfig;
