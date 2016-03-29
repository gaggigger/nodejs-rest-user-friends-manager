# nodejs-rest-user-friends-manager
Node.js + express + MySQL REST application for maintaining Users friends connections.

## Requiremetns
For running this program you'll have to have:
*node.js server
*MySQL database
installed.

## Configuration
Before running nodejs-rest-user-friends-manager you'll have to make some adjustments in configuration files.

1. In confs/dbinfo.js

```js
    module.exports = {
        MySQL: {
            host: 'localhost',
            user: 'root',
            password : '',
            database : 'test_user_friends'
        }
    }
