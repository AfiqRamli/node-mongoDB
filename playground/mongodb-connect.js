const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error) {
        return console.log('cant connect to mongoDB server')
    }

    console.log('Connected to mongoDB server')

    var db = client.db('ToDoApp')
    db.collection('Users').insertOne({
        name: 'Ali',
        age: 26,
        location: 'Kuala Lumpur',
        country: 'MY'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert new user data', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close()
})