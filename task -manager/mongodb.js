//CRUD create rest update delete
const { MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{ useUnifiedTopology: true},(error, client) => {
    if(error){
        console.log('unable to connect to database')
    }
    const db =client.db(databaseName)
    db.collection('users').insertOne({
        _id:id,
        name:'madhu',
        age : '23'
    },(error,result)=> {
        if (error){
            return console.log('unable to insert')
        }
        console.log(result.ops)
    })
})