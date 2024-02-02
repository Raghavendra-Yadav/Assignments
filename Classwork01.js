// Classwork 1 - 23-1-2024

// First Query
// Creating a new collection named 'Details'
db.createCollection('Details')

// Inserting a details into the 'Details' collection
db.Details.insertOne({
    "_id": 351, // Unique identifier for the document
    "Emp_ID": "10025AE336", 
    "Personal_details": {
        "First_Name": "Radhika",
        "Last_Name": "Sharma",
        "Date_Of_Birth": "1995-09-26" 
    },
    "Contact": {
        "e-mail": "radhika_sharma.123@gmail.com", 
        "phone": "9848022338" 
    },
    "Address": {
        "city": "Hyderabad",
        "Area": "Madapur"
    }
})

// Output of Create collection and insert data

/* Output: {
  acknowledged: true,
  insertedId: 351
} */

// Second Query
// Creating a new collection named 'Post'
db.createCollection('Post')

// Inserting a document into the 'Post' collection 
// Using the 'insertOne' method
db.Post.insertOne({
    "id": "POST_ID", 
    "title": "TITLE_OF_POST", 
    "description": "POST_DESCRIPTION", 
    "by": "POST_BY", 
    "url": "URL_OF_POST", 
    "tags": ["TAG1", "TAG2", "TAG3"], // Array of tags associated with the post
    "likes": "TOTAL_LIKES", 
    "comments": [
        {
            "user": "COMMENT_BY", 
            "message": "TEXT", 
            "dateCreated": "DATE_TIME", 
            "like": "LIKES" 
        },
        {
            "user": "COMMENT_BY",
            "message": "TEXT",
            "dateCreated": "DATE_TIME",
            "like": "LIKES"
        }
    ]
})

//Output of the insertOne method

/* Output: {
  acknowledged: true,
  insertedId: ObjectId('65bc69751c3679bd62609612')
} */

//Query 3
// Inserting a document into the 'Posts' collection 
// Using the 'insertMany' method
db.Posts.insertMany([
    {
        "id": "POST_ID_1",
        "title": "TITLE_OF_POST_1",
        "description": "POST_DESCRIPTION_1",
        "by": "POST_BY_1",
        "url": "URL_OF_POST_1",
        "tags": ["TAG1", "TAG2", "TAG3"],
        "likes": "TOTAL_LIKES_1",
        "comments": [
            {
                "user": "COMMENT_BY_1",
                "message": "TEXT_1",
                "dateCreated": "DATE_TIME_1",
                "like": "LIKES_1"
            },
            {
                "user": "COMMENT_BY_1",
                "message": "TEXT_1",
                "dateCreated": "DATE_TIME_1",
                "like": "LIKES_1"
            }
        ]
    },
    {
        "id": "POST_ID_2",
        "title": "TITLE_OF_POST_2",
        "description": "POST_DESCRIPTION_2",
        "by": "POST_BY_2",
        "url": "URL_OF_POST_2",
        "tags": ["TAG4", "TAG5", "TAG6"],
        "likes": "TOTAL_LIKES_2",
        "comments": [
            {
                "user": "COMMENT_BY_2",
                "message": "TEXT_2",
                "dateCreated": "DATE_TIME_2",
                "like": "LIKES_2"
            },
            {
                "user": "COMMENT_BY_2",
                "message": "TEXT_2",
                "dateCreated": "DATE_TIME_2",
                "like": "LIKES_2"
            }
        ]
    }
])

//Output of the insertMany method

/* Output: {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65bc9c18f440bda6f2d5fbea'),
    '1': ObjectId('65bc9c18f440bda6f2d5fbeb')
  }
} */