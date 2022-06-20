import '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('my-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
