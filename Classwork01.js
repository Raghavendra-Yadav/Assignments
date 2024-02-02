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