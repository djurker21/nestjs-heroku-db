## Description

Docker TypeOrm Postgres Heroku project.

## Installation

```bash
$ npm install
```

## .env

DATABASE_URL=postgres://postgres:example@localhost:5432/nestjs_test2

## Running the app

```bash
# docker-compose db
$ docker-compose -f pg-stack.yml up

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```