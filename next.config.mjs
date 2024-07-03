/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
          {
            source: '/404',
            destination: '/not-found',
            permanent: false,
          },
          {
            source: '/old-page',
            destination: '/new-page',
            permanent: true,
          }
        ];
      },
};

export default nextConfig;
