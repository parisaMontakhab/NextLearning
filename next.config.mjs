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
          },
          // {
          //   source: '/postlist',
          //   destination: '/dashboard',
          //   permanent: true,
          // }
        ];
      },
};

export default nextConfig;
