# DocketBase

Turn transcriptions into a website.

## Tech Stack

- [Yarn](https://yarnpkg.com/getting-started/install)
- [Next.js](https://nextjs.org/)
- [Prettier](https://prettier.io/)

## Getting Start

Run the command below to **install all dependencies**:

```bash
$ yarn install
```

Run the command below to **start app in development mode**:

> The app will be available under http://localhost:3000

```bash
$ yarn dev
```

Run the command below to **build app in production mode**:

```bash
$ yarn build
```

Run the command below to **serve app in production mode**:

> The app will be available under http://localhost:3000

```bash
$ yarn build:serve
```

Run the command below to **export the app as a static website**:

```bash
$ yarn static
```

## Docker

Run the command below to **build your container**:

```bash
$ yarn docker:build
```

Run the command below to **run your container**:

> The container will be available under http://localhost:3000

```bash
$ yarn docker:run
```

## Adding new Files

In order to display new files, you should need to follow all conditions below:

### Path

Adds a valid `.JSON` file under `/public/transcriptions` folder

## Filename

Follow the name convention below:

- File date `MM-DD-YY` 
- File summary `something-to-add-in-addition`
- File extension `.JSON`

> Remember to replace empty spaces by `-`

```json
06-02-19-Jay-part-2-Valenziano-Guerci-USA-v-Raniere.json
```
