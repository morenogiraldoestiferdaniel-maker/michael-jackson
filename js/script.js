const parametros = new URLSearchParams(window.location.search);

if (parametros.has("Usuario")) {
    const nombreUsuario = parametros.get("Usuario");
    const cancionFavorita = parametros.get("Cancion");
    
    const mensaje = document.getElementById("bienvenida");
    if (mensaje) {
        mensaje.textContent = `¡Bienvenido al Club de Fans, ${nombreUsuario}! Vemos que tu canción favorita es ${cancionFavorita}.`;
    }
}

const btnDato = document.getElementById("btn-dato");
if (btnDato) {
    btnDato.addEventListener("click", function () {
        const dato = document.getElementById("dato");
        dato.classList.toggle("oculto");
        btnDato.textContent = dato.classList.contains("oculto")
            ? "Mostrar dato curioso"
            : "Ocultar dato curioso";
    });
}

const tabla = document.getElementById("tablaDatos");
if (tabla) {
    let parametros = new URLSearchParams(window.location.search);
    let campos = {};

    parametros.forEach(function (valor, nombre) {
        if (nombre === "Clave") {
            valor = "********";
        }
        campos[nombre] = campos[nombre] ? campos[nombre] + ", " + valor : valor;
    });

    for (let nombre in campos) {
        let fila = tabla.insertRow();
        fila.insertCell().textContent = nombre;
        fila.insertCell().textContent = campos[nombre];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contenido = button.nextElementSibling;
            const span = button.querySelector('span');
            
            contenido.classList.toggle('oculto');
            
            if (contenido.classList.contains('oculto')) {
                span.textContent = '+';
            } else {
                span.textContent = '×';
            }
        });
    });
});