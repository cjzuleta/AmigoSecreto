// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigos = [];
  
//Funcion para agregar amigos
    function agregarAmigo() {
      const nombre = inputNombre.value.trim();
  
      if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
      }
  
      amigos.push(nombre);
      actualizarLista();
      inputNombre.value = "";
    }

//Funcion para actualizar amigos
    function actualizarLista() {
      listaAmigos.innerHTML = "";
      amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
      });
    }

//Funcion para sortear amigos
    function sortearAmigo() {
      if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
      }
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSecreto = amigos[indiceAleatorio];
      resultado.innerHTML = `<p>Amigo Secreto: <strong>${amigoSecreto}</strong></p>`;
    }
  
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
  });
  