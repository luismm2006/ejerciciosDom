let gradebook = [
    { name: "Ana", grades: [8, 7, 9], average: 7 },
    { name: "Luis", grades: [6, 6, 6], average: 6 },
    { name: "Maria", grades: [9, 10, 8], average: 9 }
];



function mostrarNotas(item){
    const ul = document.getElementById("alumnos");

    const li = document.createElement("li");

    const divNombre = document.createElement("div");
    const divNotas = document.createElement("div");
    const divPromedio = document.createElement("div");

    divNombre.textContent = item.name;
    divNotas.textContent = item.grades;
    divPromedio.textContent = item.average

    li.appendChild(divNombre);
    li.appendChild(divNotas);
    li.appendChild(divPromedio);
    
    ul.appendChild(li);
};
gradebook.forEach(item => mostrarNotas(item));