/*
  MongoDB Query Operations

  Description:
  This script contains MongoDB queries using the MongoDB shell.
  It demonstrates various queries, including AND, OR, NOR, NOT, AND-OR-OR, Element Match, document finding, insertion with insertOne and insertMany, and more.
*/

// Operators
// Use the 'sample_airbnb' database
use sample_airbnb

// AND logic : Find listings with both Wifi and TV amenities
db.listingsAndReviews.find({ $and: [{ amenities: "Wifi" }, { amenities: "TV" }] });

// OR logic : Find listings with either Wifi or TV amenities
db.listingsAndReviews.find({ $or: [{ amenities: "Wifi" }, { amenities: "TV" }] });

// NOR logic : Find listings without both Wifi or TV amenities
db.listingsAndReviews.find({ $nor: [{ amenities: "Wifi" }, { amenities: "TV" }] });

// NOT logic : Find listings without Wifi or TV amenities
db.listingsAndReviews.find({ $not: [{ amenities: "Wifi" }, { amenities: "TV" }] });

// AND-OR-OR logic : Find listings with Wifi or Fridge and Kitchen or Heater amenities
db.listingsAndReviews.find({
    $and: [
      { $or: [{ amenities: "Wifi" }, { amenities: "Fridge" }] },
      { $or: [{ amenities: "Kitchen" }, { amenities: "Heater" }] },
    ],
  });

// Element Match: Find listings with amenities that include "Wifi"
db.listingsAndReviews.find({ amenities: { $elemMatch: { $eq: "Wifi" } } });

// Document Finding : Find a grade document with a specific ObjectId
db.grades.find({ _id: ObjectId("65b9b6f769c4895078585dc0") })

// Find listings with Wifi in the amenities array
db.listingsAndReviews.find({ amenities: "Wifi" });

// Insert a document using insertOne( )
db.UniversityData.insertOne({
    student_id: 987654,
    products: [
      { type: "exam", score: 85 },
      { type: "homework", score: 72 },
      { type: "quiz", score: 88 },
      { type: "homework", score: 95 },
    ],
    class_id: 101,
  });

/* Output: {
  acknowledged: true,
  insertedId: ObjectId('65bdc372f440bda6f2d5fbec')
}
*/

// Insert many documents using insertMany( )
db.UniversityData.insertMany([
    {
      student_id: 987655,
      products: [
        {
          type: "quiz",
          score: 65,
        },
        {
          type: "homework",
          score: 80,
        },
        {
          type: "quiz",
          score: 75,
        },
        {
          type: "exam",
          score: 92,
        },
      ],
      class_id: 552,
    },
    {
      student_id: 654321,
      products: [
        {
          type: "exam",
          score: 78,
        },
        {
          type: "quiz",
          score: 62,
        },
        {
          type: "homework",
          score: 88,
        },
        {
          type: "exam",
          score: 95,
        },
      ],
      class_id: 553,
    },
    {
      student_id: 111222,
      products: [
        {
          type: "quiz",
          score: 50,
        },
        {
          type: "homework",
          score: 40,
        },
        {
          type: "exam",
          score: 60,
        },
        {
          type: "homework",
          score: 78,
        },
      ],
      class_id: 554,
    },
  ]);

/* Output:{
    acknowledged: true,
    insertedIds: {
      '0': ObjectId('65bdc7f3f440bda6f2d5fbed'),
      '1': ObjectId('65bdc7f3f440bda6f2d5fbee'),
      '2': ObjectId('65bdc7f3f440bda6f2d5fbef')
    }
  } */
