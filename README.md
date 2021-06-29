
# task-manager



## Indices

* [Ungrouped](#ungrouped)

  * [delete avatar](#1-delete-avatar)
  * [localhost:5000/tasks](#2-localhost:5000tasks)
  * [localhost:5000/tasks](#3-localhost:5000tasks)
  * [localhost:5000/tasks/5faf71c97db3653ac4c4e93e](#4-localhost:5000tasks5faf71c97db3653ac4c4e93e)
  * [localhost:5000/tasks/5faf71c97db3653ac4c4e93e](#5-localhost:5000tasks5faf71c97db3653ac4c4e93e)
  * [localhost:5000/users](#6-localhost:5000users)
  * [localhost:5000/users/login](#7-localhost:5000userslogin)
  * [localhost:5000/users/logout](#8-localhost:5000userslogout)
  * [localhost:5000/users/logout all](#9-localhost:5000userslogout-all)
  * [localhost:5000/users/me](#10-localhost:5000usersme)
  * [localhost:5000/users/me](#11-localhost:5000usersme)
  * [localhost:5000/users/me](#12-localhost:5000usersme)
  * [upload avatar](#13-upload-avatar)


--------


## Ungrouped



### 1. delete avatar



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:5000/users/me/avatar
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwYjY4YmUzMjc4NzFhZjRiZWE5NjkiLCJpYXQiOjE2MDU0MTY1ODh9.5goCPV19BRjtnyv9Mi6vvkNHxY20nAE5kOcJD02DUnw |  |



### 2. localhost:5000/tasks


Get my tasks


***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:5000/tasks
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwYjY4YmUzMjc4NzFhZjRiZWE5NjkiLCJpYXQiOjE2MDU0MTY1ODh9.5goCPV19BRjtnyv9Mi6vvkNHxY20nAE5kOcJD02DUnw |  |
| completed | true |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| sortBy | createdAt:desc |  |



### 3. localhost:5000/tasks


Create task



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:5000/tasks
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwYjY4YmUzMjc4NzFhZjRiZWE5NjkiLCJpYXQiOjE2MDU0MTY1ODh9.5goCPV19BRjtnyv9Mi6vvkNHxY20nAE5kOcJD02DUnw |  |



***Body:***

```js        
{
    "description": "go there",
    "completed": true
    
}
```



### 4. localhost:5000/tasks/5faf71c97db3653ac4c4e93e


update task


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: localhost:5000/tasks/5faf71c97db3653ac4c4e93e
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFmNzk0MjIwM2M0ZjQ0ODA0NTg1MGYiLCJpYXQiOjE2MDUzMzUzNjJ9.sb6TKo8zaPfgEY7mLfkfsLtJp_V5uZfiSltvy2C4fvg |  |



***Body:***

```js        
{
    "description": "i love python"
}
```



### 5. localhost:5000/tasks/5faf71c97db3653ac4c4e93e


Get specific task


***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:5000/tasks/5faf71c97db3653ac4c4e93e
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFmNzk0MjIwM2M0ZjQ0ODA0NTg1MGYiLCJpYXQiOjE2MDUzMzUzNjJ9.sb6TKo8zaPfgEY7mLfkfsLtJp_V5uZfiSltvy2C4fvg |  |



### 6. localhost:5000/users


Create user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:5000/users
```



***Body:***

```js        
{
    "name": "anku",
    "email": "gushi88@gmail.com",
    "password": "batman123"
}
```



### 7. localhost:5000/users/login


Login user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:5000/users/login
```



***Body:***

```js        
{
    "email": "rob3@yahoo.com",
    "password": "superman"
}
```



### 8. localhost:5000/users/logout


logout


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:5000/users/logout
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFmNmZkM2YwMzg1YzRlYzQwM2VlZjYiLCJpYXQiOjE2MDUzMzI5NDd9.Xm4qK3roH7Pe0h3aKtRyCOywBvPUN0fNnxwodsOBgHs |  |



### 9. localhost:5000/users/logout all


logout


***Endpoint:***

```bash
Method: POST
Type: 
URL: localhost:5000/users/logoutAll
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFhNDU4MjcxZTNiNTM4NWNkYTRiYTEiLCJpYXQiOjE2MDUyNTAxMDN9.BmlvdBn6Pw7hU6BBdYck3xSQY83VVU3DN_5GMNQp6xM |  |



### 10. localhost:5000/users/me


Update my profile


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: localhost:5000/users/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFmNmI3MzJmMDBjNTNmZWM4MWQ5YTYiLCJpYXQiOjE2MDUzMzE4Mjd9.HRyR5fcCzQiawlD77cX8ts7FaOSJ6nRcQdM2fBBnmwY |  |



***Body:***

```js        
{
    "age": 98,
    "name": "batman123"
}
```



### 11. localhost:5000/users/me


Delete my profile


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: localhost:5000/users/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFhNDU4MjcxZTNiNTM4NWNkYTRiYTEiLCJpYXQiOjE2MDUzMzA2MTh9.LBJpKJ4farcaHtLxM4WarNOWGkLomHanQfi0mDKw3qg |  |



### 12. localhost:5000/users/me


My profile


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: localhost:5000/users/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwYjY4YmUzMjc4NzFhZjRiZWE5NjkiLCJpYXQiOjE2MDU0MTY1ODh9.5goCPV19BRjtnyv9Mi6vvkNHxY20nAE5kOcJD02DUnw |  |



***Body:***

```js        
{
    "name": "rob",
    "email": "rob3@yahoo.com",
    "age": 34,
    "password": "superman"
}
```



### 13. upload avatar



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: localhost:5000/users/me/avatar
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwYjY4YmUzMjc4NzFhZjRiZWE5NjkiLCJpYXQiOjE2MDU0MTY1ODh9.5goCPV19BRjtnyv9Mi6vvkNHxY20nAE5kOcJD02DUnw |  |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| avatar |  |  |



---
[Back to top](#task-manager)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-06-29 21:22:17 by [docgen](https://github.com/thedevsaddam/docgen)
