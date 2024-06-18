let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
  console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(numero){
  let gameClicado = document.getElementById(`game-${numero}`)
  let alugarBotao = gameClicado.querySelector('.dashboard__item__button')
  let alugarImg = gameClicado.querySelector('.dashboard__item__img')
  let nomeJogo = gameClicado.querySelector('.dashboard__item__name')

  if(alugarBotao.classList.contains('dashboard__item__button--return') && alugarImg.classList.contains('dashboard__item__img--rented')){
    if(confirm(`Você tem certeza que quer devolver o jogo ${nomeJogo.textContent}?s`)){
      alugarBotao.classList.remove('dashboard__item__button--return')
      alugarImg.classList.remove('dashboard__item__img--rented')
      alugarBotao.innerHTML = 'Alugar'
      jogosAlugados--
    }
  }else{
    alugarBotao.classList.add('dashboard__item__button--return')
    alugarImg.classList.add('dashboard__item__img--rented')
    alugarBotao.innerHTML = 'Devolver'
    jogosAlugados++
  }

  contarEExibirJogosAlugados()
}

document.addEventListener('DOMContentLoaded', function(){
  jogosAlugados = this.querySelectorAll('.dashboard__item__img--rented').length
  contarEExibirJogosAlugados()
})