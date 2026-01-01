const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookDB', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

//const Book = require('../models/book.model');
const bookItems = require('../models/bookModel');

// const ProjectSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   link: String,
//   description: String,
// });

//const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
    { id: 'b1', title: 'The Three-Body Problem', author: 'Liu Cixin', year: 2008, genre: 'Science Fiction', summary: 'The Three-Body Problem is the first novel in the Remembrance of Earth\'s Past trilogy...', price: '22.99' },
    { id: 'b2', title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Classic', summary: 'An orphaned governess confronts class, morality, and love at Thornfield Hall...', price: '19.99'},
    { id: 'b3', title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Classic', summary: 'Elizabeth Bennet and Mr Darcy navigate pride, misjudgement, and social expectations in a sharp study of manners and marriage.', price: '24.99' },
    { id: 'b4', title: 'The English Patient', author: 'Michael Ondaatje', year: 1992, genre: 'Historical Fiction', summary: 'Summary: In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.', price: '29.99' },
    { id: 'b5', title: 'Small Gods', author: 'Terry Pratchett', year: 1992, genre: 'Fantasy', summary: 'In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.', price: '34.99' },
];




// Project.insertMany(sampleData)
//   .then(() => {
//     console.log("Sample data inserted");
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));


// scripts/seed.js


(async () => {
    try {
        // 3) ensure unique on id (good practice)
        //await bookItems.collection.createIndex({ id: 1 }, { unique: true });

        // 4) clear and insert
        await bookItems.deleteMany({});
        await bookItems.insertMany(sampleData);

        console.log('Seeded 5 book items.');
    } catch (err) {
        console.error('Seeding failed:', err.message);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
})();