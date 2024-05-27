
const books = [
    { 
    id: 1, 
    title: "3body", 
    author: ["Tolstoy", "Turgenev"],
    year: 2000 
    },
    { 
    id: 2, 
    title: "dune", 
    author: ["Turgenev"],
    year: 1989 
    },
];

const authors = [
    {
    id:1,
    name: "Tolstoy",
    count: 1,
    },
    {
    id:2,
    name: "Turgenev",
    count: 2,
    }
];
let filteredField = [''];
const decCountBooks = () => {
    filteredField[0] = 'Turgenev';

    const newList = books.filter(book=> book.author.some(name => name === filteredField[0]));
    
    return newList;

}


console.log(decCountBooks());