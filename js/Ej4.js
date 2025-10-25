let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const titleInput = document.getElementById("titulo");
const authorInput = document.getElementById("autor");
const priceInput = document.getElementById("precio");
const categoryInput = document.getElementById("categoria");

// 🎨 Mostrar libros
function renderBooks(books = bookStore.books) {
  tbody.innerHTML = ""; // Limpia la tabla antes de volver a renderizar

  books.forEach(book => {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = book.price;

    const tdCategory = document.createElement("td");
    tdCategory.textContent = book.category;

    // botón eliminar
    const tdOptions = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.addEventListener("click", () => {
      bookStore.books = bookStore.books.filter(b => b.title !== book.title);
      renderBooks();
    });

    tdOptions.appendChild(btnDelete);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPrice);
    tr.appendChild(tdCategory);
    tr.appendChild(tdOptions);
    tbody.appendChild(tr);
  });
}

// ➕ Añadir libro
function addBook(title, author, price, category) {
  bookStore.books.push({ title, author, price: Number(price), category });
  updateSelectOptions();
  renderBooks();
}

// 🎯 Filtrar por categoría
function getBooksByCategory(category) {
  if (category === "all") return bookStore.books;
  return bookStore.books.filter(b => b.category.toLowerCase() === category.toLowerCase());
}

// 📋 Evento del formulario
form.addEventListener("submit", e => {
  e.preventDefault();
  addBook(titleInput.value, authorInput.value, priceInput.value, categoryInput.value);
  form.reset();
});

// 🧮 Ordenar por precio
const sortAscBtn = document.createElement("button");
sortAscBtn.textContent = "Ordenar ↑";
sortAscBtn.addEventListener("click", () => {
  const sorted = [...bookStore.books].sort((a, b) => a.price - b.price);
  renderBooks(sorted);
});

const sortDescBtn = document.createElement("button");
sortDescBtn.textContent = "Ordenar ↓";
sortDescBtn.addEventListener("click", () => {
  const sorted = [...bookStore.books].sort((a, b) => b.price - a.price);
  renderBooks(sorted);
});


// 🧩 Selector de categoría
const select = document.createElement("select");
select.innerHTML = `<option value="all">Todas</option>`;
updateSelectOptions();
select.addEventListener("change", () => {
  const filtered = getBooksByCategory(select.value);
  renderBooks(filtered);
});

// 🔁 Actualiza las opciones del select dinámicamente
function updateSelectOptions() {
  const categories = Array.from(new Set(bookStore.books.map(b => b.category)));
  select.innerHTML = `<option value="all">Todas</option>`;
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}
const divController = document.getElementById("controllers");
divController.appendChild(select);
divController.appendChild(sortDescBtn);
divController.appendChild(sortAscBtn);

// Render inicial
renderBooks();
