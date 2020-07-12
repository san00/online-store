module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  username: env('DATABASE_USERNAME','default'),
  password: env('DATABASE_PASSWORD', 'default'),
});
