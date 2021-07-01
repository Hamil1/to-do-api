# TO DO API

This API requires:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

Install the dependencies

```sh
npm install
```

Build the project and start the server.

```sh
npm run build
npm run start
```

**Authors**
>  Victor Diaz <hamil151@hotmail.com | victor.hamil.diaz@gmail.com>


## Request & Response Examples

**Authentication:**

- [POST /v1/account/register](#post-v1accountregister)
- [POST /v1/account/login](#post-v1accountlogin)

**API Resources**

## Account
  V1
- [GET /v1/account](#get-v1account)
- [GET /v1/account/:id](#get-v1accountid)
- [DELETE /v1/account/:id](#delete-v1accountid)

## Task
  V1
- [GET /v1/task](#get-v1task)
- [GET /v1/task/completed](#get-v1taskcompleted)
- [GET /v1/task/incomplete](#get-v1taskincomplete)
- [GET /v1/task/:id](#get-v1taskid)
- [DELETE /v1/task/:id](#delete-v1taskid)
- [POST /v1/task](#post-v1task)
- [PUT /v1/task](#put-v1taskid)

## EXAMPLES


### POST /v1/account/register

Request body:
    
    {
    	"username": "victor.diaz",
    	"password": "puzzle"
    }

Response body:

    {
      "user": {
          "_id": "60dd15c46c03b27dee86d7a6",
          "username": "victor.diaz",
          "password": "$2a$10$aual/xwBTjUr2LolLhMjdeP0XA.Pal2mtcTPNxiPmXoKa/ietyD3S",
          "createdAt": "2021-07-01T01:09:24.331Z",
          "updatedAt": "2021-07-01T01:09:24.331Z",
          "__v": 0
      }
    }
  

### POST /v1/account/login

Request body:
    
    {
    	"username": "victor.diaz",
    	"password": "puzzle"
    }

Response body:

    {
      "message": "Auth successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpY3Rvci5kaWF6IiwiaWF0IjoxNjI1MTAxOTU0LCJleHAiOjMyNTA1NjM5MDgsImlzcyI6ImNvb2xJc3N1ZXIifQ.aQ4bE9y2UhX0ltSZDoAMFfqr_uOHBGj_UJjC35mm_nE",
      "user": {
          "_id": "60dd15c46c03b27dee86d7a6",
          "username": "victor.diaz",
          "password": "$2a$10$aual/xwBTjUr2LolLhMjdeP0XA.Pal2mtcTPNxiPmXoKa/ietyD3S",
          "createdAt": "2021-07-01T01:09:24.331Z",
          "updatedAt": "2021-07-01T01:09:24.331Z",
          "__v": 0
      }
    }

### GET /v1/account

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    [
      {
          "_id": "60dd0b4d76ce1b77e3d908d1",
          "username": "victor.diaz",
          "createdAt": "2021-07-01T00:24:45.596Z",
          "updatedAt": "2021-07-01T00:24:45.596Z",
          "__v": 0
      },
      {
          "_id": "60dd0c3422cdf07877f83ab6",
          "username": "jose.diaz",
          "createdAt": "2021-07-01T00:28:36.695Z",
          "updatedAt": "2021-07-01T00:28:36.695Z",
          "__v": 0
      },
      {
          "_id": "60dd0c3922cdf07877f83ab9",
          "username": "emil.diaz",
          "createdAt": "2021-07-01T00:28:41.089Z",
          "updatedAt": "2021-07-01T00:28:41.089Z",
          "__v": 0
      },
      {
          "_id": "60dd0c3d22cdf07877f83abc",
          "username": "pedro.diaz",
          "createdAt": "2021-07-01T00:28:45.712Z",
          "updatedAt": "2021-07-01T00:28:45.712Z",
          "__v": 0
      },
      {
          "_id": "60dd0c4e22cdf07877f83abf",
          "username": "pedros.diaz",
          "createdAt": "2021-07-01T00:29:02.430Z",
          "updatedAt": "2021-07-01T00:29:02.430Z",
          "__v": 0
      }
    ]

### GET /v1/account/id

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    {
      "_id": "60dd0b4d76ce1b77e3d908d1",
      "username": "victor.diaz",
      "createdAt": "2021-07-01T00:24:45.596Z",
      "updatedAt": "2021-07-01T00:24:45.596Z",
      "__v": 0
    }

### DELETE /v1/account/id

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    {
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    }
  
  ### GET /v1/task

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    [
      {
          "_id": "60dd0d8222cdf07877f83ac4",
          "name": "Terminar la prueba",
          "isComplete": 0,
          "__v": 0
      },
      {
          "_id": "60dd0d9022cdf07877f83ac6",
          "name": "Entregar la prueba",
          "isComplete": 0,
          "__v": 0
      }
    ]
    
### GET /v1/task/completed

>**This one returns all the tasks that are completed**

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    [
      {
          "_id": "60dd0d8222cdf07877f83ac4",
          "name": "Terminar la prueba",
          "isComplete": 1,
          "__v": 0
      },
      {
          "_id": "60dd0d9022cdf07877f83ac6",
          "name": "Entregar la prueba",
          "isComplete": 1,
          "__v": 0
      }
    ]
    
### GET /v1/task/incomplete

>**This one returns all the tasks that are incomplete**

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    [
      {
          "_id": "60dd0d8222cdf07877f83ac4",
          "name": "Terminar la prueba",
          "isComplete": 0,
          "__v": 0
      },
      {
          "_id": "60dd0d9022cdf07877f83ac6",
          "name": "Entregar la prueba",
          "isComplete": 0,
          "__v": 0
      }
    ]
    
### GET /v1/task/id

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    {
      "_id": "60dd0d9022cdf07877f83ac6",
      "name": "Entregar la prueba",
      "isComplete": 0,
      "__v": 0
    }
    
### DELETE /v1/task/id

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {}

Response body:

    {
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    }

  ### POST /v1/task

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {
      "name": "Entregar la pruebaa",
      "isComplete": 0
    }

Response body:

    {
      "_id": "60dd0e3722cdf07877f83aca",
      "name": "Entregar la pruebaa",
      "isComplete": 0,
      "__v": 0
    }
    
  ### PUT /v1/task/id

>**In this endpoint you can update a task (if you want to edit just the status of it, you can send just this { isComplete: 0 })**

Headers:
    
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODQ0NzBjZWRjZTRlMTViY2JiNmQ2NyIsImlhdCI6MTU4NzQxMTQwMCwiZXhwIjoxNTkwMDAzNDAwfQ.E00JB6BzTdhmfA4czdlBdFjBA63B-OBlXSbZQlP9qwU
    
Request body:
    
    {
      "name": "Entregar la prueba hoy",
      "isComplete": 1
    }

Response body:

    {
      "_id": "60dd0e3722cdf07877f83aca",
      "name": "Entregar la prueba hoy",
      "isComplete": 1,
      "__v": 0
