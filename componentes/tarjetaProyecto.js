export function crearTarjeta(proyecto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-proyecto";
    tarjeta.dataset.id = proyecto.id; 

    const badgesTecnologias = proyecto.tecnologias
    .map(tec => `<span class="badge-tecnologia">${tec}</span>`)
    .join("");

    const iconosPorTipo = {
        github: "../images/github.png",
        codepen: "../images/codepen.png"
    };

    const enlaces = proyecto.enlaces
        .map(enlace => `
            <a class="enlace-tipo" href="${enlace.url}" target="_blank" rel="noopener">
                <img src="${iconosPorTipo[enlace.tipo]}" alt="${enlace.tipo}">
            </a>
        `)
        .join("");

    tarjeta.innerHTML = `<span class="tarjeta-modulo">#${proyecto.id}</span>
    <span class="tarjeta-estado estado-${proyecto.estado.toLowerCase().replace(/\s+/g, "-")}">${proyecto.estado}</span>
    <h3 class="tarjeta-titulo">${proyecto.nombre}</h3>
    <p class="descripcion">${proyecto.descripcion}</p>
    <div class="tecnologias">${badgesTecnologias}</div>
    <div class="enlace">${enlaces}</div>`; 

    return tarjeta;
}