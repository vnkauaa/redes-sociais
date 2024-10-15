const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);

async function VizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML= `Você Sabia que o mundo tem 
    ${dados.total_pessoas_mundo} de pessoas e que aproximadamente 
    ${dados.total_pessoas_conctadas} estão conectadas em alguma rede social e passam em media ${dados.tempo_medio}
    horas conctadas`

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);

    console.log(paragrafo);
}

VizualizarInformacoesGlobais()