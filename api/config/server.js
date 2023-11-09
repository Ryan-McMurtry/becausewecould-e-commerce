module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://becausewecould.com",
  app: {
    keys: env.array("APP_KEYS"),
  },
  dirs: {
    public: "/data/public",
  },
  path: "/admin",
  build: {
    backend: env("ADMIN_BUILD_BACKEND", "https://becausewecould.com"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
