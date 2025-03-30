let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");

        // Añade las clases correctas para cada habilidad técnica
        habilidades[0].classList.add("prototipado-wireframing");
        habilidades[1].classList.add("html-css-javascript");
        habilidades[2].classList.add("diseno-visual-ui");
        habilidades[3].classList.add("sistemas-de-diseno");
        habilidades[4].classList.add("versionado-colaboracion");

        // Añade las clases correctas para cada habilidad profesional
        habilidades[5].classList.add("comunicacion-efectiva");
        habilidades[6].classList.add("colaboracion-equipo");
        habilidades[7].classList.add("gestion-tiempo");
        habilidades[8].classList.add("diseno-centrado-usuario");
        habilidades[9].classList.add("adaptabilidad");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

document.getElementById("download-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "img\Hoja de vida Bancolombia.pdf"; // Cambia a la ruta real del PDF
    link.download = "hojadevidaSaraBastidas.pdf";   // Nombre del archivo descargado
    link.click();
});