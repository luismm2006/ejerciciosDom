let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

function renderBooks(bookStore){
    
}

function addBook(title, author, price, category){
    bookStore.books.push({
        title: title, author: author, price: price, category: category 
    })
}


function getBooksByCategory(category){
    let bookcategory = [];
    bookcategory.push(bookStore.books.filter(p => p.category == category));
    return bookcategory;
}

//Utiliza sort() para ordenar los libros por precio, de mayor a menor.

console.log(
    bookStore.books.sort((a,b) => b.price-a.price)
)