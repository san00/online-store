module.exports = ({ env }) => 
{
  console.log("hello it working", env, env.int('PORT', 1337) );
  return({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  username: env('DATABASE_USERNAME','default'),
  password: env('DATABASE_PASSWORD', 'default'),
});
}