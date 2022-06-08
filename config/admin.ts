export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf0eee7f7834446e1bd18217a1149025'),
  },
});
