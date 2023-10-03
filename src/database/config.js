const environmentCredentials = {
  username: process.env.DB_USERNAME || 'bohdan-mykhailenko',
  password: process.env.DB_PASSWORD || 'S2uwPg6nbIRm',

  host:
    process.env.DB_HOST || 'ep-sweet-heart-65946773.eu-central-1.aws.neon.tech',
};

const dialectConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
};

const development = {
  database: process.env.DB_DATABASE || 'superheroes',
  ...environmentCredentials,
  ...dialectConfig,
};

const test = {
  database: process.env.DB_DATABASE || 'superheroes-test',
  ...environmentCredentials,
  ...dialectConfig,
};

const production = {
  database: process.env.DB_DATABASE || 'superheroes-prod',
  ...environmentCredentials,
  ...dialectConfig,
};

module.exports = { development, test, production };
