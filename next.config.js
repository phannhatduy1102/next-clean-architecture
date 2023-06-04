/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  modularizeImports: {
    "lodash/?(((\\w*)?/?)*)": {
      transform: "lodash/{{ matches.[1] }}/{{member}}",
      preventFullImport: true,
    },
  },
};

module.exports = nextConfig;
