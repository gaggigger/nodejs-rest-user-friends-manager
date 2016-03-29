# nodejs-rest-user-friends-manager

Node.js + express + MySQL REST server for maintaining Users friends connections.

## Requirements

For running this server you'll have to have:
* Node.js with npm installed
* MySQL database installed and running

## Configuration

Before running nodejs-rest-user-friends-manager you'll have to make some preparations:

1. Make sure you have created **user_friends** table
   
    ```mysql
    CREATE TABLE `user_friends` (
        `id1` int(11) NOT NULL,
        `id2` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    ALTER TABLE `user_friends`
        ADD UNIQUE KEY `friends` (`id1`,`id2`);
    ```
2. Save your database configuration data at confs/dbinfo.js
   
    ```js
    module.exports = {
        MySQL_development: {
            host: 'DATABASE_ADRESS',
            user: 'DATABASE_USERNAME',
            password : 'DATABASE_PASSWORD',
            database : 'DATABASE_NAME'
        }
        MySQL_production: {
            host: 'DATABASE_ADRESS',
            user: 'DATABASE_USERNAME',
            password : 'DATABASE_PASSWORD',
            database : 'DATABASE_NAME'
        }
    }
    ```

## Running nodejs-rest-user-friends-manager server

### Basic

1. Running in development mode from npm:

    $ npm start

2. Running in production mode from npm:

    $ npm start --production
   
