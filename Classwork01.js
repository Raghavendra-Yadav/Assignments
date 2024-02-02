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