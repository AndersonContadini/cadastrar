var area = document.getElementById("area");
var botao = document.getElementById("botao");

function entrar() {
    var nome = prompt("Digite seu nome");
    var nomeCadastro = "Anderson";

    if (nomeCadastro === '' || nomeCadastro === null) {
        alert("Ops!! Algo deu errado!!!");
        area.innerHTML = "Clique no botão  para acessar...";
    }

    else if (nome == nomeCadastro) {
        
        botao.setAttribute("hidden", true);
        area.innerHTML = "Olá seja bem vindo," + nome + "<br><br>";
        let botaosair = document.createElement("button");
        botaosair.innerHTML = "Sair da conta ";
        botaosair.onclick = sair;
        area.appendChild(botaosair);
    }
    else {
        alert("Ops !! Algo deu errado!!!");
        area.innerHTML = "Clique no botão para se cadastrar!!";
    }
}

function sair() {
    alert("Até Mais !!");    
    area.innerHTML = "Você saiu";
    botao.removeAttribute("hidden");
}