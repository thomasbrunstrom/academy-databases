# Welcome to the exercise

## Part 1

Create a new folder this part of the exercise. E.g. mysql/

Open that folder and init npm with `npm init -y`  
Install the mysql2 module with `npm install mysql2`
Create a file for you javascript code.  
Require the mysql2/promises with:

```javascript
const mysql = require("mysql2/promise");
```

Look at the documentation on https://github.com/sidorares/node-mysql2 how to connect to your MySQL server.  
What you need to supply is the following:

```
host: localhost
database: world
user: root
password: <your password for the root user>
```

Make a connection and make sure it works by selecting all the data in the `country` table with a suitable query.

Run your file with "node [filename.js]"

Repeat the queries from earlier exercise, part 2 and 3 from [mysql.md](../mysql.md) but this time use nodejs and mysql2 to make the queries and log out the result in a **nice** way to the console.

---

## Part 2

In the repo there is a academy.sql self-contained file.  
Use MySQL Workbench to import the schema/database and its tables to your locally installed server.

### The movie collection

You have the embryo to a movie collection api. There are very few endpoints defined. There are some database queries defined but there's still missing a lot. Your task is to continue build on the API and create endpoints to support the following functionality.

### Task 1, explore!!!

Start with exploring the files in the repo, take a look at the architecture of the application/server.

There are three main files in the repo.

- server.js is our main file where everything is set up.
- routes.js is the file that contains our endpoints.
- database.js is the file that contains our queries to the database.

To start the server simply run the following command in the terminal: `npm run serve`

If you have problems with getting nodemon to work, install supervisor with the following command: `npm install supervisor --save-dev` and then replace the `"script" : "nodemon server.js"` with `"script" : "supervisor server.js"`

### Task 2, implement according to the use cases

When developing your API, make sure to use the right **HTTP VERB** for each endpoint, eg if we're fetching data, we use **GET**. If we want to delete something we use **DELETE** and so on. Decide if you want to use PUT or PATCH when updating something.

If there is something in the database that need "tweaking" to fit your needs better just go ahead.

To lend a movie to someone, you might want to use a table just for that.

As a API-user I want to be able to:

#### Movies

1. I want to be able to get a list of all my movies
1. I want to be able to add new movie
1. I want to be able to update a movie
1. I Want to be able to lend a movie to a friend
1. I want to be able to return a movie
1. I want to be able to delete a movie

#### Categories

1. I want to be able to add new movie categories
1. I want to be able to update a movie category
1. I don't want to be able to delete a category that have movies bound to it.

Some helpful links:

node-mysql2: https://github.com/sidorares/node-mysql2
expressjs: https://expressjs.com/en/4x/api.html

> Hint: Don't hesitate to let me know if there is something that needs clarification.
