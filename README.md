# nodejs-rest-user-friends-manager

Node.js + express + MySQL REST application for maintaining Users friends connections.

## Requirements

For running this program you'll have to have:
* Node.js
* MySQL

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
        MySQL: {
            host: 'DATABASE_ADRESS',
            user: 'DATABASE_USERNAME',
            password : 'DATABASE_PASSWORD',
            database : 'DATABASE_NAME'
        }
    }
    ```

## Running

### Basic

