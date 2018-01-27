const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error) {
        return console.log('cant connect to mongoDB server')
    }

    console.log('Connected to mongoDB server')

    // var db = client.db('ToDoApp')
    // db.collection('Users').find({name: "Ali"}).toArray().then((docs) => {
    //     console.log('Fetching data successful')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch data', err)
    // })

    // var db = client.db('ToDoApp')
    // db.collection('Users').find().count().then((count) => {
    //     console.log(`Fetching ${count} data successful`)
    // }, (err) => {
    //     console.log('Unable to fetch data', err)
    // })
    
    var db = client.db('ToDoApp')
    db.collection('Users').find({
        _id: new ObjectID('5a682d350628900ab96fb05d')
    }).toArray().then((docs) => {
        console.log('Fetching data successful')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch data', err)
    })


    // client.close()
})