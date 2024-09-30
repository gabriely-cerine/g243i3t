
const URL = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function vizualiarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = (dados.tempo_medio - horas) * 100
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente
     <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas e
      <span>${minutos}</span> conectadas. Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas  em alguma rede social`    
    console.log(paragrafo)
    const ontainer = document.getElementById(`graficos-container`)
    Container.appendChild(paragrafo)
}
vizualiarInformacoesGlobais();
