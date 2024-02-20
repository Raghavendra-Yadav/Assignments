db.books.replaceOne(
  { _id: ObjectId("65c292b7dd77e720d30e243e") },
  {
    _id: ObjectId("65c292b7dd77e720d30e243e"),
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);

db.books.replaceOne(
  { _id: ObjectId("65c292b7dd77e720d30e243e") },
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-6",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);
//To make sure we have the document
db.books.findOne({ _id: ObjectId("65c292b7dd77e720d30e243e") });
