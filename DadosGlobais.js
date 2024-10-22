const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);

async function VizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML= `Você Sabia que o mundo tem 
    <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente 
    <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em media <span> ${dados.tempo_medio} </span>
    horas conctadas`

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);

    console.log(paragrafo);
}

VizualizarInformacoesGlobais()