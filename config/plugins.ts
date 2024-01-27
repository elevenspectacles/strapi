export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        product: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-brevo",
      providerOptions: {
        apiKey: process.env.BREVO_API,
      },
      settings: {
        defaultSenderEmail: "no-reply@elevenspectacles.com",
        defaultSenderName: "Eleven Spectacles",
        defaultReplyTo: "support@elevenspectacles.com",
      },
    },
  },
});
