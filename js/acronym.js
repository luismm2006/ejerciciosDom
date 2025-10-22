function generateAcronym(){
    // Obtenemos el contenido del input
    const phrase = document.getElementById("phrase").value.trim();
    // Generamos el acrónimo
    acronymClassName = "";
    if(phrase.split(" ").length > 3){
        acronymClassName = "phraseLonger";
    }
    const acronymPhrase = phrase.split(" ").map(p => p[0].toUpperCase()).join(""); 
    return renderAcronym(acronymPhrase);
    // 
}

function clear(){
  document.getElementById("phrase").value = "";
  document.getElementById("acronym").innerHTML = "";
}


// Obenemos el botón y lo guardamos en la constante button

const button = document.getElementById("submit");

button.addEventListener('click', generateAcronym);


// Obtenemos el botón de reset y lo guardamos en la constante reset

const reset = document.getElementById("reset");

reset.addEventListener('click', clear);


let acronymClassName = "";
function renderAcronym(acronymPhrase){
    const acronym = document.getElementById("acronym");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const p = document.createElement("p")
    p.className = acronymClassName;
    p.textContent = acronymPhrase;
    li.appendChild(p);
    ul.appendChild(li);
    acronym.appendChild(ul);
}

