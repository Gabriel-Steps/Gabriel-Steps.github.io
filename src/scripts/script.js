const determinarHorario = () => {
    let textoHorario = document.getElementById("mensagemHorario");
    const data = new Date();
    const horas = data.getHours();
    if(horas >= 6 && horas < 12){
        textoHorario.textContent = "Bom dia!";
    }else if(horas >= 12 && horas < 18){
        textoHorario.textContent = "Boa tarde!";
    }else{
        textoHorario.textContent = "Boa Noite!";
    }
}

const colocarIconesSobreMim = () => {
    const div = document.getElementById("containerIcons");
    const lista = ["Javascript", "HTML5", "CSS3", "React", "Node.js", "C#","Typescript", "Python"];

    lista.forEach(linguagem => {
        const divLinguagem = document.createElement("div");
        divLinguagem.className = "cardLinguagem";
        const image = document.createElement("img");
        image.src = `https://cdn.simpleicons.org/${linguagem}?viewbox=auto`;
        image.alt = `Imagem do ${linguagem}`;
        const titulo = document.createElement("h2");
        titulo.textContent = linguagem;
        divLinguagem.appendChild(image);
        divLinguagem.appendChild(titulo);
        div.appendChild(divLinguagem);
    });
};

document.addEventListener("DOMContentLoaded", determinarHorario);
document.addEventListener("DOMContentLoaded", colocarIconesSobreMim);
