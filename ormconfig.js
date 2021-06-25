module.exports = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: ['dist/**/entities/*.entity{.js,.ts}'],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  migrationsRun: true,
  migrations: ['dist/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
