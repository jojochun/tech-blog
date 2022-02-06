# TECH BLOG

## Purpose

The purpose of this project was to create the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database. With this application, a user can create, read, update and delete data from their database.

## Installation and Usage

1. Install node.js

2. Clone or download the source code from GitHub to your local machine:

```shell
git@github.com:jojochun/tech-blog.git
```

3. Navigate to the root of the downloaded code by typing:

```shell
cd e-commerce-back-end
```

4. Install required dependencies by opening a terminal and on command line type:

```shell
npm init -y (set "main": "server.js", "start": "node server.js")
npm install express sequelize mysql2
npm install dotenv
```

5. Create the .env file and open the file by typing:

```shell
touch .env
code .env
```

6. Add the following to the .env file:

```shell
DB_NAME='tech-blog_db'
DB_USER=''
DB_PW=''
```

7. Navigate to the MySQL shell and enter:

```shell
mysql -u root -p
```

8. Enter the password for MySQL

9. Create the database, then exit MySQL by typing:

```shell
source db/schema.sql
exit
```

9. To test your routes in Insomnia, seed the database and start the server:

```shell
npm run seed
npm start
```

## Screenshot

![a screenshot of my app](./assets/tech-blog.png)

## Video Walkthrough

[Video Walthrough]()

[Video Testing API routes]()

## Built With

HTML

CSS

Javascript

## Technologies

Node.js

npm

mysql2

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Contribution

Made with ❤️ by Joanne Chun
