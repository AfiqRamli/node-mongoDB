const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error) {
        return console.log('cant connect to mongoDB server')
    }
    console.log('Connected to mongoDB server')

    var db = client.db('ToDoApp')
    db.collection('Users').deleteMany({
        name: "Names"
    }).then((result) => {
        console.log(result)
    })

    //deleteOne
    // db.collection('Users').deleteOne().then((result) => {console.log(result)})

    //findOneAndDelete
    // db.collection('Users').finceOneAndDelete({
    //     name: "Name"
    // }).then((result) => {console.log(result)})

    // client.close()
})