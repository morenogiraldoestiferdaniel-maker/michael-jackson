const formulario = document.getElementById("formulario");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const cancion = document.getElementById("cancion").value;
        document.getElementById("mensaje").textContent =
            "¡Gracias " + nombre + "! Tu canción favorita es " + cancion + ".";
    });
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