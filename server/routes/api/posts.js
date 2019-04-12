const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({/*query*/}).toArray());
});

//Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: newDate()
    });
    res.status(201).send();
});

//Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});



async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://cswnUser:cswn2019@cswn2019-jbhdg.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true,

    })

    return client.db('puz_day').collection('puz_teams');
}

module.exports = router;