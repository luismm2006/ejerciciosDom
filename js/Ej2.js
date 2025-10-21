let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};

const ul = document.getElementById("alumnos");
const addAlumn = document.getElementById("addAlumn");
const nameInput = document.getElementById("nombre");

function renderAlumn({ name, grades, average }) {
    const li = document.createElement("li");

    const divNombre = document.createElement("div");
    const divNotas = document.createElement("div");
    const divPromedio = document.createElement("div");
    const btnAddNota = document.createElement("button");

    divNombre.textContent = name;
    divNotas.textContent = "Notas: " + grades;
    divPromedio.textContent = "Promedio: " + average;
    btnAddNota.textContent = "Añadir nota";

    btnAddNota.addEventListener("click", () => {
        const nuevaNota = parseFloat(prompt(`Añadir nueva nota para ${name}:`));
        if(nuevaNota>=0 && nuevaNota<=10){
            const alumn = gradebook.students.find(i => i.name === name);
            alumn.grades.push(nuevaNota);
            alumn.average = alumn.grades.reduce((total, num) => total + num, 0) / alumn.grades.length;
            renderListAlumn(gradebook);
        }
    });

    li.appendChild(divNombre);
    li.appendChild(divNotas);
    li.appendChild(divPromedio);
    li.appendChild(btnAddNota);

    ul.appendChild(li);
}
function renderListAlumn(gradebook){
    ul.innerHTML="";
    gradebook.students.forEach(alumn => renderAlumn(alumn));
}
function addNewAlumn(name, grades=[], average=0){
    const alumn = gradebook.students.find(alumn => alumn.name.toLowerCase() === name.toLowerCase());
    const response = "notAdded";
    if(alumn) {
        response = "repeat";
    }else {
        gradebook.students.push({name, grades, average});
    }
    return response;
}
addAlumn.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const response = addNewAlumn(name);
    if(response == "notAdded"){
        renderListAlumn(gradebook);
    }else{
        alert("Ya existe este alumno");
    }
    nameInput = document.getElementById("nombre").value = "";
});
gradebook.students.forEach(alumn => {
    alumn.average = alumn.grades.reduce((total, num) => total + num, 0) / alumn.grades.length;
});
renderListAlumn(gradebook);