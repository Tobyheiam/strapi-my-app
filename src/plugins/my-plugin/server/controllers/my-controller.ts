export default ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('my-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
