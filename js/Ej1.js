let inventario = {
  items: [
    { nombre: "Laptop", cantidad: 5, precio: 1200 },
    { nombre: "Mouse", cantidad: 25, precio: 20 },
    { nombre: "Keyboard", cantidad: 15, precio: 50 }
  ]
};

const tablaBody = document.getElementById('inventarioBody');
const annadir = document.getElementById("annadir");
renderTable();
function crearFila(item) {
  const fila = document.createElement('tr');

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = item.nombre;
  fila.appendChild(celdaNombre);

  const celdaCantidad = document.createElement('td');
  celdaCantidad.textContent = item.cantidad;
  fila.appendChild(celdaCantidad);

  const celdaPrecio = document.createElement('td');
  celdaPrecio.textContent = item.precio;
  fila.appendChild(celdaPrecio);

  const celdaEliminar = document.createElement('td');
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = "Eliminar";
  celdaEliminar.appendChild(btnEliminar);
  fila.appendChild(celdaEliminar);

  btnEliminar.addEventListener("click", () => {
    fila.remove();
    const indexItem = inventario.items.indexOf(item);
    eliminarItem(indexItem);
  });

  if(item.precio > 50){
    fila.className = "mayor";
  }

  tablaBody.appendChild(fila);
}
function eliminarItem(indice){
    if (indice !== -1) {
      inventario.items.splice(indice);
    }
}
// Cargar inventario inicial
function renderTable(){
  tablaBody.innerHTML="";
  inventario.items.forEach(item => crearFila(item));
}

annadir.addEventListener("click", annadirArticulos);

function update({nombre, cantidad, precio}){
  const indexItem = inventario.items.findIndex(item => item.nombre === nombre);
  if(indexItem!=-1){
    const item = inventario.items[indexItem];
    item.cantidad = parseInt(item.cantidad) + parseInt(cantidad); 
    item.precio = precio;
    renderTable();
  }
}


function annadirArticulos() {
  const nombre = document.getElementById("nombre").value;
  const cantidad = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;
  const notAdded = true;
  const nuevoItem = { nombre, cantidad, precio };
  inventario.items.forEach(item => {
    if(nuevoItem.nombre === item.nombre){
      update(nuevoItem);
      notAdded = false;
    }
    
  })
  if(notAdded){
    inventario.items.push(nuevoItem);
    crearFila(nuevoItem);

  }
  renderTable();
  document.getElementById("nombre").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}