export default ({ env }) => ({
  proxy: true,
  url: "https://elevenspectacles.com/strapi", // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    url: "/admin",
  },
});
