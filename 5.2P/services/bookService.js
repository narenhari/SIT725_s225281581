const booksData = [
    { id: 'b1', title: 'The Three-Body Problem', author: 'Liu Cixin', year: 2008, genre: 'Science Fiction', summary: 'The Three-Body Problem is the first novel in the Remembrance of Earth\'s Past trilogy...' },
    { id: 'b2', title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Classic', summary: 'An orphaned governess confronts class, morality, and love at Thornfield Hall...' },
    { id: 'b3', title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Classic', summary: 'Elizabeth Bennet and Mr Darcy navigate pride, misjudgement, and social expectations in a sharp study of manners and marriage.' },
    { id: 'b4', title: 'The English Patient', author: 'Michael Ondaatje', year: 1992, genre: 'Historical Fiction', summary: 'Summary: In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.' },
    { id: 'b5', title: 'Small Gods', author: 'Terry Pratchett', year: 1992, genre: 'Fantasy', summary: 'In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.' },
];

const getAllBooks = () => {
    return booksData;
};

const getBookById = (id) => {
    return booksData.find(book => book.id === id);
};

module.exports = {
    getAllBooks,
    getBookById,
};