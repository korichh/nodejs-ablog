# nodejs-ablog

This project is a Full Stack NodeJS Blog Application created to develop skills in building client-server architecture systems.

Through this project, I have learned how to work with the Express.js framework, set up a working environment for a NodeJS server, and handle authentication, authorization, cookies, sessions, hidden data, API protection, and MySQL data manipulation.

## Table of Contents

- [Database Configuration](#database-configuration)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Database Configuration

Before you start using this application, you need to set up the database using the [schema.sql](https://github.com/korichh/nodejs-ablog/blob/main/db/schema.sql) file and execute each line of SQL code from that file. You can easily do this using the freely available [phpMyAdmin](https://en.wikipedia.org/wiki/PhpMyAdmin) GUI for MySQL.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/db-mysql.png?raw=true)
> The final result as seen in the designer after all manipulations.

## Installation

There are several ways to run the project, all listed in the [package.json](https://github.com/korichh/nodejs-ablog/blob/main/package.json) file. Key commands include:

- `npm start` - To run the application.
- `npm run hot` - To watch files with any extension and reload the app in case of an error.
- `npm run ui` - To run the browser-sync CLI for automatic UI reloading.
- `npm run dev` - Combines `hot` and `ui`, ideal for development purposes.

## Usage

ABlog is simple to use due to the user-friendly UI. However, let's go through each available page step-by-step with corresponding images:

![](https://github.com/korichh/nodejs-ablog/blob/main/images/1-home.png?raw=true)
> ABlog home page, where you can see all created posts.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/2-single.png?raw=true)
> Single post page.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/3-signin.png?raw=true)
> Page to sign in to an existing account.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/4-signup.png?raw=true)
> Page to sign up and create a new account.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/5-dashboard.png?raw=true)
> Welcome to the dashboard!

![](https://github.com/korichh/nodejs-ablog/blob/main/images/6-create.png?raw=true)
> Simple form for creating new posts.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/7-edit.png?raw=true)
> Form for editing newly created posts.

![](https://github.com/korichh/nodejs-ablog/blob/main/images/8-delete.png?raw=true)
> Are you sure you want to delete this awesome post? ;(

## License

[MIT](https://github.com/korichh/nodejs-ablog/blob/main/LICENSE)
