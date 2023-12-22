/** @type {import('next').NextConfig} */
const nextConfig = {    
    env: {
        // Ensure VESTA credentials are provided
        TOKEN: process.env.VESTA_NAME && process.env.VESTA_PASSWORD
            ? Buffer.from(`${process.env.VESTA_NAME}:${process.env.VESTA_PASSWORD}`).toString('base64')
            : null, // or some error handling
        // Add other environment variables you need to use
        CHANNELPARTNERDOMAIN: process.env.CHANNELPARTNERDOMAIN,
        ENVIRONMENT: process.env.ENVIRONMENT,
        CLIENTNAME: process.env.CLIENTNAME,
        CLIENTDOMAIN: process.env.CLIENTDOMAIN,
        PRODUCT: process.env.PRODUCT,
        },
        async headers() {
            return [
              {
                // matching all API routes
                // https://vercel.com/guides/how-to-enable-cors
                source: "/api/:path*",
                headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" },
                  {
                    key: "Access-Control-Allow-Methods",
                    value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                  },
                  {
                    key: "Access-Control-Allow-Headers",
                    value:
                      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                  },
                ],
              },
            ];
          },
  };

module.exports = nextConfig
