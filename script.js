const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Eu gosto, acho sensacional!"
            },
            {
                texto: "Não",
                afirmativa: "Não gosto, acho que elas irão dominar o mundo."
            }
        ]
    },
    {
        enunciado: "Quanto tempo você acha necessário para a dominancia das IAS?",
        alternativas: [
            {
                texto: "10 anos",
                afirmativa: "Em até 10 anos"
            },
            {
                texto: "Não irá dominar o mundo",
                afirmativa: "Não irá dominar o mundo"
            }
        ]
    },
    {
        enunciado: "Você acha necessario a regulamentação da IA?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Com certeza"
            },
            {
                texto: "Não",
                afirmativa: "Não acho necessario"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + "";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    
}
mostraPergunta()