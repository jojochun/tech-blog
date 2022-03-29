# TECH TALKS

## Purpose

The purpose of this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
This site is built completely from scratch and is deployed to Heroku. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation and Usage

1. Install node.js

2. Clone or download the source code from GitHub to your local machine:

```shell
git@github.com:jojochun/tech-talks.git
```

3. Navigate to the root of the downloaded code by typing:

```shell
cd tech-talks
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
DB_NAME='tech-talks_db'
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

![a screenshot of my app](./assets/tech-talks.png)

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
