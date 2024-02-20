//subscribers
db.podcasts.updateOne({_id: ObjectId("6261a92dfee1ff300dc80bf1")},{$set:{subscribers:98562}})


//to find
db.podcasts.findOne({title: "The MongoDB Podcast"});
db.podcasts.findOne({_id: ObjectId("6261a92dfee1ff300dc80bf1")});

//ID for Upsert
db.podcasts.findOne({_id: ObjectId("65c3b3a81d3d2755a2febc76")});