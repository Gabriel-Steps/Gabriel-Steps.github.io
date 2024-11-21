const consumirApiGithub = async () => {
    const url = "https://api.github.com/users/Gabriel-Steps/repos"
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

const verificacaoLinguagemImg = async (linguagem) => {
    if(linguagem === "Java"){
        return "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg";
    }else if(linguagem === "HTML"){
        return `https://cdn.simpleicons.org/HTML5?viewbox=auto`;
    }else if(linguagem === "CSS"){
        return `https://cdn.simpleicons.org/CSS3?viewbox=auto`;
    }else{
        return `https://cdn.simpleicons.org/${linguagem}?viewbox=auto`;
    }
}

const colocarCardsDeRepositoriosWeb = async () => {
    const divPai = document.getElementById("containerPrincpaisProjetos")
    const lista_repositorios = await consumirApiGithub();
    lista_repositorios.forEach(async repo => {
        if(repo.language !== null){
            const div = document.createElement("div");
            div.className = "cardRepositorio";
            const imagem = document.createElement("img");
            imagem.src = await verificacaoLinguagemImg(repo.language);
            imagem.alt = `Imagem do ${repo.language}`;
            const titulo = document.createElement("h2");
            titulo.className = "tituloCard"
            titulo.textContent = repo.name;
            const desc = document.createElement("p");
            desc.textContent = repo.description;
            const botao = document.createElement("a");
            botao.href = repo.html_url;
            botao.textContent = "Saiba Mais"
            botao.target = "_blank"
            div.appendChild(imagem);
            div.appendChild(titulo);
            div.appendChild(desc);
            div.appendChild(botao);
            divPai.appendChild(div)
        }
    })
}

document.addEventListener("DOMContentLoaded", colocarCardsDeRepositoriosWeb);