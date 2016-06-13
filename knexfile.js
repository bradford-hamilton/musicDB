// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/music'
    // connection: 'postgres://whbqicagocdkoq:Wd9Fd8xgBMrxuGH5cy_YI31UYH@ec2-54-235-68-4.compute-1.amazonaws.com:5432/d6vd8094rssa4v?ssl=true'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
