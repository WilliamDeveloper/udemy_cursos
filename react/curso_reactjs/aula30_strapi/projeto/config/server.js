module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8082),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '84c6af4f7c3ef496543ce4bc442024d0'),
    },
  },
});
