define({ "api": [
  {
    "type": "all",
    "url": "*",
    "title": "Other requests",
    "name": "OtherRequests",
    "group": "General",
    "description": "<p>All conections that are not mentioned in this document will get error response</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X GET http://localhost:8081/other_request",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nothing here</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response (example):",
          "content": "HTTP/1.1 404 OK\n{\"message\":\"Nothing here\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "confs/routes.js",
    "groupTitle": "General"
  },
  {
    "type": "delete",
    "url": "/user_friends/:id1,:id2",
    "title": "Destroy friends connection",
    "name": "DestroyFriendsConnection",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id1",
            "description": "<p>Unique ID of User (non-negative integer) different than id2</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id2",
            "description": "<p>Unique ID of User (non-negative integer) different than id1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE http://localhost:8081/user_friends/1,2",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users are not friends anymore</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response (example):",
          "content": "HTTP/1.1 200 OK\n{\"message\":\"Users are not friends anymore\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Invalid <code>ID</code> given</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\"message\":\"Invalid ID given\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "confs/routes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user_friends/:id1",
    "title": "Get User friends list",
    "name": "GetUserFriendsList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id1",
            "description": "<p>Unique ID of User (non-negative integer)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X GET http://localhost:8081/user_friends/1",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "friendsList",
            "description": "<p>List of user friends IDs (may return empty list)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response (empty list example):",
          "content": "HTTP/1.1 200 OK\n{\"friendsList\":[]}",
          "type": "json"
        },
        {
          "title": "Success response (filled list example):",
          "content": "HTTP/1.1 200 OK\n{\"friendsList\":[4,5,554543]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "confs/routes.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Invalid <code>ID</code> given</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\"message\":\"Invalid ID given\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user_friends/:id1,:id2",
    "title": "Make new friends connection",
    "name": "MakeNewFriendsConnection",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id1",
            "description": "<p>Unique ID of User (non-negative integer) different than id2</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id2",
            "description": "<p>Unique ID of User (non-negative integer) different than id1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X GET http://localhost:8081/user_friends/1,2",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users became friends</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response (example):",
          "content": "HTTP/1.1 200 OK\n{\"message\":\"Users became friends\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Invalid <code>ID</code> given</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\"message\":\"Invalid ID given\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "confs/routes.js",
    "groupTitle": "User"
  }
] });
