function sistema(event) {
    
    event.preventDefault();
    idade = parseFloat(document.getElementById("idade").value);
    nome = document.getElementById("nome").value;
    resultado = document.getElementById("resultado");

    if (idade < 11) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome + " é uma criança!";
    } else if (idade >= 12 && idade <= 20) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome + " é um adolescente!";
    } else if (idade >= 21 && idade <= 65) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome +" é um adulto!";
    } else if (idade > 65) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome +" é um idoso!";
    }
}