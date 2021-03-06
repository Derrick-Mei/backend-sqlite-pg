module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    connection: {
      filename: './data/campaigns.db3',
    },
  },
  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    connection: {
      filename: './data/test.db3',
    },
  },
  production: {
    client: 'pg',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    connection: process.env.DATABASE_URL,
  },
};
