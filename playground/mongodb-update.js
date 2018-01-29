const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error) {
        return console.log('cant connect to mongoDB server')
    }
    console.log('Connected to mongoDB server')

    var db = client.db('ToDoApp')
    // deleteMany

    db.collection('Users').findOneAndUpdate({
            id: new ObjectID('//INSERT OBJECT ID HERE MOFOS')
        }, {
            $set: {
                completed: false
            }
        }, {
            returnOriginal: false
        }).then((result) => {console.log(result)})

    // client.close()
})