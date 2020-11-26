// MongoClient.connect(url)
//     .then(function (db) { // <- db as first argument
//         console.log(db)
//     })
//     .catch(function (err) { })

(async function () {
    const mongo = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017'
    mongo.connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(function (client) {

            // if (err) {
            //     console.error(err)
            //     return
            // }

            //Create colletion and data
            const db = client.db('kennel')

            //Create and get a collection
            const collection = db.collection('dogs')
            console.log("Created db and colletion");

            // Insert data into a collection a Document
            // collection.insertOne({name: 'Roger'}, (err, result) => {
            //     console.log(result)
            // })

            // collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {
            //     console.log(result);
            // })

            //Find all documents
            // collection.find().toArray((err, items) => {
            //     console.log(items)
            // })

            // Find a specific document
            // collection.find({name:'Togo'}).toArray((err, items) => {
            //     console.log(items)
            // })

            // collection.findOne({name:'Togo'}, (err, item) => {
            //     console.log(item)
            // })

            // Update an existing document
            // collection.updateOne({name:'Togo'}, {'$set': {'name':'Togo2'}},(err, item) => {
            //     console.log(item)
            // })

            // Delete a document
            // collection.deleteOne({name:'Togo'}, (err, item) => {
            //     console.log(item)
            // })

            // Can be used with promises:
            // collection.findOne({ name: 'Togo' })
            //     .then(item => {
            //         console.log(item)
            //     })
            //     .catch(err => {
            //         console.error(err)
            //     })

            // async/await:
            const find = async () => {
                try {
                    const item = await collection.findOne({ name: 'Togo' })
                    console.log(item)
                } catch (err) {
                    console.error(err)
                }
                client.close()
            }
            find()

            // Closing the connection
            // client.close()
        })
        .catch(function (err) {
            console.error(err)
        })
})();
