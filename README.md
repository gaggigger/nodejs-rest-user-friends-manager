# nodejs-rest-user-friends-manager

Node.js + express + MySQL REST server for maintaining Users friends connections.

## Requirements

For running this server you'll have to have:
* Node.js with npm installed
* MySQL database installed and running

## Configuration

Before running nodejs-rest-user-friends-manager you'll have to make some preparations:

1. Make sure you have created `user_friends` table
   
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

## Installing

Installing all (production and development) dependencies:

    $ npm install

Installing only production dependencies:

    $ npm install --production

## Usage

### Basic run

1. Running in development mode:
   
    ```
    $ npm start
    ```

2. Running in production mode:

    ```
    $ npm start --production
    ````
   
### Running on port other than 8081

1. Windows `cmd`

    ```
    $ set PORT=1234
    $ npm start
    ```
   
2. Unix `shell`

    ```
    $ PORT=1234 npm start
    ```

### Running tests

    $ npm test

## API

Detailed API description can be found in `apidoc` folder

## Licence

The MIT License (MIT)
Copyright (c) 2016 Grzegorz Krzemiński <grzegorz.krzeminski@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
