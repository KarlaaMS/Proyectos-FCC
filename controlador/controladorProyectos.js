import { navbar } from "../componentes/navbar.js";
import { proyectos } from "../modelo/dataProyectos.js";
import { crearTarjeta } from "../componentes/tarjetaProyecto.js";
import { footer } from "../componentes/footer.js";

const contenedor = document.getElementById("contenedor-proyectos"); 

function renderizarNavbar() {
    const placeholder = document.getElementById("navbar-placeholder");
    placeholder.innerHTML = navbar();
}

function renderizarFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder"); 
    footerPlaceholder.innerHTML = footer();
}

function renderizarProyectos (lista) {
    contenedor.innerHTML = ""; 
    const fragmento = document.createDocumentFragment(); 

    lista.forEach(proyecto => {
        fragmento.appendChild(crearTarjeta(proyecto));
    });

    contenedor.appendChild(fragmento); 


}
function init () {
    renderizarNavbar();
    renderizarProyectos(proyectos);
    renderizarFooter();
}

  init();