module.exports = {
  port: process.env.PORT || 7655,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb://localhost/wsot',
    test: 'mongodb://localhost/wsot',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    //for players credential
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '1d'
  },
  credentials:{
    //for provider credential
    expiry: 10
  }

};
