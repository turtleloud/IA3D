const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você considera que a Inteligencia Artificial tem uma grande importancia nos dias de hoje?",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas:["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
    }
}