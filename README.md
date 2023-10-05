# Superheroes API

## Overview

- [**Demo Link**](https://superheroes-bg7cj9zf0-alfabravo228.vercel.app/)
- [**Frontend Repo**](https://github.com/bohdan-mykhailenko/superheroes)

## Description

This repository contains the source code for the Superheroes project, which serves as the backend side for the application.

## Features

**The API provides the following features:**

- **CRUD functionality**: Implement default operations.
- **Static serving**: Store and serve static files.
- **Pagination**: Send only required data portion.

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Nest.js](https://nestjs.com/)
- [Sequelize](https://sequelize.org/)
- [Sequelize CLI](https://sequelize.org/docs/v7/cli/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://github.com/expressjs/multer)

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository:

```shell
https://github.com/bohdan-mykhailenko/superheroes_API.git
```

2. Install dependencies:

```shell
npm install
```

3. Set up PostgreSQL Database(optional):
 - Open the `src/config/database.config.ts` file and add your PostgreSQL database configuration.

```
export const db = {
  DB_HOST: 'host',
  DB_NAME: 'name',
  DB_USERNAME: 'username',
  DB_PASSWORD: 'password',
};
```

4. Run migration:

```shell
npm run migrate
```

5. Run seeder;
```shell

npm run seed
```

6. Start the server:

```shell
npm run start
```


## Endpoints and messages

The base URL for the API is: **https://superheroesbackend-production.up.railway.app/**

<table>
    <tr>
        <th>
        	Method
        </th>
        <th>
        	Endpoint
        </th>
        <th>
        	Description
        </th>
        <th>
        	Body
        </th>
    </tr>
    	<tr>
        <th colspan="4">Superheroes</th>
    	</tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        		/superheroes/:superheroId
        </td>
        <td>
        	Get superhero with certain id
        </td>
        <td>
        	NULL
        </td>
    </tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        		/superheroes?page=1
        </td>
        <td>
        	Get all superheroes with pagination
        </td>
        <td>
        	NULL
        </td>
    </tr>
    <tr>
        <td>
        	POST
        </td>
        <td>
          /superheroes
        </td>
        <td>
        	Create new superhero with all required fields
        </td>
        <td>
<pre>
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: FileList;
<pre>
        </td>
    </tr>
  <tr>
        <td>
        	PATCH
        </td>
        <td>
          /superheroes/:superheroId
        </td>
        <td>
        	Update existing superhero with all optional fields
        </td>
        <td>
<pre>
  nickname?: string;
  real_name?: string;
  origin_description?: string;
  superpowers?: string;
  catch_phrase?: string;
  images?: FileList;
<pre>
        </td>
    </tr>
    <tr>
        <td>
        	DELETE
        </td>
        <td>
        	/superheroes/:superheroId
        </td>
        <td>
        	Delete superhero with certain id.
        </td>
        <td>
        	NULL
        </td>
    </tr>
</table>
