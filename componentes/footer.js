

export function footer () {

    const iconosPorTipo = {
    github: '<i class="fa-brands fa-github"></i>',
    linkedin: '<i class="fa-brands fa-linkedin"></i>'
    };

    return `
    <footer class="footer">
        <div class="footer-contenido">
            <p>© Todos los derechos reservados.</p>
            <p class="enlace">Ejercicios tomados de <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></p>
        </div>
        <div>
            <img src="../images/logoPortafolio.png">
            <p>Desarrollado por Karla M. Salgado</p>
            <p class="enlace">Portafolio de proyectos de <a href="https://mi-portafolio-karlasalgado.vercel.app/" target="_blank" rel="noopener noreferrer">Mi portafolio</a></p>
        </div>
        <div class="footer-enlaces">
            <a href="https://www.linkedin.com/in/karlamss" target="_blank" rel="noopener noreferrer"> ${iconosPorTipo.linkedin}</a>
            <a href="https://github.com/karlaaMS" target="_blank" rel="noopener noreferrer"> ${iconosPorTipo.github}</a>
        </div>
    </footer>
    `;
}