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
        teamname: req.body.teamname,
        pin: req.body.pin,
        members: req.body.members,
        score: req.body.score,
        p1: req.body.p1,
        p2: req.body.p2,
        p3: req.body.p3,
        p4: req.body.p4,
        p5: req.body.p5,
        p6: req.body.p6,
        p7: req.body.p7,
        p8: req.body.p8,
        p9: req.body.p9,
        p10: req.body.p10,
        p11: req.body.p11,
        p12: req.body.p12,
        p13: req.body.p13,
        p14: req.body.p14,
        p15: req.body.p15,
        p16: req.body.p16,
        p17: req.body.p17,
        p18: req.body.p18,
        p19: req.body.p19,
        p20: req.body.p20,
        p21: req.body.p21,
        p22: req.body.p22,
        p23: req.body.p23,
        p24: req.body.p24,
        p25: req.body.p25,
        p26: req.body.p26,
        p27: req.body.p27,
        p28: req.body.p28,
        p29: req.body.p29,
        p30: req.body.p30
    });
    res.status(201).send();
});

//Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

//Modify Post
router.put("/:id/:puz_index", async (req, res) => {
    const posts = await loadPostsCollection();
    console.log("modifying!!");
    //console.log(req.params.id);
    console.log(req.params.puz_index);
    var field = req.params.puz_index;

    if(req.params.puz_index == "p1") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p1: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p2") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p2: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p3") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p3: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p4") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p4: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p5") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p5: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p6") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p6: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p7") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p7: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p8") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p8: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p9") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p9: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p10") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p10: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p11") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p11: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p12") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p12: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p13") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p13: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p14") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p14: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p15") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p15: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p16") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p16: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    } 
    else if(req.params.puz_index == "p17") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p17: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p18") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p18: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p19") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p19: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p20") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p20: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p21") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p21: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p22") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p22: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p23") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p23: "answered",
          },
          $inc: { 
            score: 1 
          }
        }
      );
    }
    else if(req.params.puz_index == "p24") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p24: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    else if(req.params.puz_index == "p25") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p25: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    else if(req.params.puz_index == "p26") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p26: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    else if(req.params.puz_index == "p27") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p27: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    else if(req.params.puz_index == "p28") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p28: "answered",
          },
          $inc: { 
            score: 5
          }
        }
      );
    }
    else if(req.params.puz_index == "p29") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p29: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    else if(req.params.puz_index == "p30") {
      await posts.updateOne(
        { _id: new mongodb.ObjectID(req.params.id) },
        {
          $set: {
            p30: "answered",
          },
          $inc: { 
            score: 5 
          }
        }
      );
    }
    
    res.status(200).send();
  });

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://cswnUser:cswn2019@cswn2019-jbhdg.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true,

    })

    return client.db('puz_day').collection('puz_teams');
}

module.exports = router;