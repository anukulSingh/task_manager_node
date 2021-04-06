// exploring mongodb

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect..');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Anku',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document');
    //     }

    //     console.log(result.ops);
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name: 'Divya',
    //         age: 19
    //     },
    //     {
    //         name: 'Tithu',
    //         age: 18
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed : true
    //     },
    //     {
    //         description: 'Task 2',
    //         completed : false
    //     },
    //     {
    //         description: 'Task 3',
    //         completed : true
    //     }
    // ], (err, results) => {
    //     if (err) {
    //         return console.log('unable to insert..');
    //     }

    //     console.log(results.ops);
    // })

    // db.collection('users').findOne({ _id: new ObjectID('5f9cfdeb5db74b3070bc7d7e') }, (err, user) => {
    //     if (err) {
    //         return console.log('unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, users) => {
    //     console.log(users);
    // })
    // db.collection('tasks').find({ completed: true }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f9cfdeb5db74b3070bc7d7f')
    // }, {
    //     // $set: {
    //     //     name: 'Tithi singh'
    //     // },
    //     $inc: {
    //         age: 1
    //     }
    // })
    // .then(result => console.log(result))
    // .catch(error => console.log(error))

    // db.collection('tasks').updateMany({
    //         completed: false
    //     }, {
    //          $set: {
    //              completed: true
    //          },
           
    //     })
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error))
    
    db.collection('tasks').deleteOne({
        description: 'Task 1'
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))

})

