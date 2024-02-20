db.podcasts.findAndModify({
    query: {_id: ObjectId("65c2a217dd77e720d30e243f")},
    update: {$inc: {downloads: 1}},
    new: true,
  });