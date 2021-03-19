## This is the backend logic for a task-manager application where user can Sign up with their credentials and can subsequently authorize on further requests and store the information about different tasks

> Any third-party OAuth hasn't been implemented yet

### Commands
```
npm start 
npm run dev
npm test
```
### Following are the supported routes :
***/users route***

. [/users](http://localhost:8000/users/)
    
    Public access
    Register a new user (POST)
        Fields: name,email,password,age

. [/users/login](http://localhost:8000/users/login)

    Public access
    login an existing user (POST)

. [/users/logout](http://localhost:8000/users/logout)

    Private access
    logout from that particular session (POST)

. [/users/logoutAll](http://localhost:8000/users/logoutAll)

    Private access
    logout from all sessions (POST)

. [/users/me](http://localhost:8000/users/me)

    Private access
    see your profile (GET)
    update your profile (PATCH)
    delete my account (DELETE)

. [/users/me/avatar](http://localhost:8000/users/me/avatar)

    Private access
    upload your avatar in JPG/JPEG/PNG (POST)
    delete your avatar (DELETE)

. [/users/:id/avatar](http://localhost:8000/users/:id/avatar)

    Public access
    get avatar of registered users (GET)

***/tasks route***


. [/tasks](http://localhost:8000/tasks)

    Private access
    create a new task (POST)
        Fields: description,completed
    other queries are :

    1. ?completed=true (GET)
        show tasks which are marked as completed
        other option is false
        
    2. ?limit=10&skip=0 (GET)
        show 10 recent tasks and limit by 0
        options are integers

    3. ?sortBy=createdAt:desc (GET)
        sort by recently created or opposite
        other option is 'asc'

. [/tasks/:id](http://localhost:8000/tasks/:id)

    Private access
    get a particular task (GET)
    update a particular task (PATCH)
    delete a particular task (DELETE)


