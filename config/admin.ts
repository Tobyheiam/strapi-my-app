export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ec7d4c9bd84b6b5ac48f8e470f5f333'),
  },
});
