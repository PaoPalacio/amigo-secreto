const listaAmigos = []; //array vacío para almacenar los nombres
const botonAgregar = document.getElementById("botonAñadir") 
botonAgregar.addEventListener("click", agregarAmigo); //captura del click en el botón

function agregarAmigo() { // creación de funcion agregarAmigo
    const inputAmigo = document.getElementById("amigo");
    const nombre =inputAmigo.value; //a nombre le asigno el valor escrito en el input
    if (nombre && !listaAmigos.includes(nombre)) { //si nombre no es vacío Y no está incluido en listaAmigos
        listaAmigos.push(nombre);//entonces lo agrego a listaAmigos 
        mostrarListaAmigos();//agrego el nombre en la ul(id="listaAmigos") del html
    }
    inputAmigo.value = ""; //vacío el input para poder volver a  usarlo   
}

function mostrarListaAmigos() {
    const listaAmigosElemento = document.getElementById("listaAmigos"); //capturo el elemento de la lista
    listaAmigosElemento.innerHTML = ""; // Limpio la lista antes de actualizarla
    listaAmigos.forEach((amigo) => { //para cada "amigo" de la lista 
        const nuevoElemento = document.createElement("li"); // creo un nuevo li  
        nuevoElemento.textContent = amigo;  
        listaAmigosElemento.appendChild(nuevoElemento); //asigno a cada li la variable amigo
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {  //evalúo si la lista está vacía(longitud 0)
        alert("No hay elementos para sortear");  //muestra un alert si está vacía
        return;  
    }
    const indiceRandom = Math.floor(Math.random() * listaAmigos.length);  //número random multiplicado por la longitud del array para obtener un número entero(Math.floor)
    const amigoSecreto = listaAmigos[indiceRandom];  //selecciono el elemento correspondiente

    const elementoResultado = document.getElementById("resultado");  // en el id="resultado" muestro el nombre del amigo secreto
    elementoResultado.innerHTML = "";  //cada vez que lo uso limpio la ul destino para no acumular resultados

    const amigoSecretoResultado = document.createElement("li");  //creo un elemento li 
    amigoSecretoResultado.textContent = " El amigo secreto es: "+amigoSecreto ;//le asigno el texto y el nombre del amigoSecreto
    elementoResultado.appendChild(amigoSecretoResultado);  //agrego el li en el dom
}

















/*

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        ulResultado.innerHTML = "<li>Debe haber al menos dos participantes para hacer el sorteo.</li>";
        return;
    }

    const asignaciones = {};
    let amigosRestantes = [...listaAmigos];

    listaAmigos.forEach(amigo => {
        let indiceAleatorio;
        let asignado;

        do {
            indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
            asignado = amigosRestantes[indiceAleatorio];
        } while (asignado === amigo);

        asignaciones[amigo] = asignado;
        amigosRestantes.splice(indiceAleatorio, 1);
    });

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    ulResultado.innerHTML = "";
    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        ulResultado.appendChild(li);
    }
}

*/