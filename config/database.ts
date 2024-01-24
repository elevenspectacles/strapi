export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", ""),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD"), // use ENV
      schema: env("DATABASE_SCHEMA", "public"),
    },
    debug: false,
  },
});
