function alterarStatus(numero){
  let gameClicado = document.getElementById(`game-${numero}`)
  let alugarBotao = gameClicado.querySelector('.dashboard__item__button')
  let alugarImg = gameClicado.querySelector('.dashboard__item__img')

  if(alugarBotao.classList.contains('dashboard__item__button--return') && alugarImg.classList.contains('dashboard__item__img--rented')){
    alugarBotao.classList.remove('dashboard__item__button--return')
    alugarImg.classList.remove('dashboard__item__img--rented')
    alugarBotao.innerHTML = 'Alugar'
  }else{
    alugarBotao.classList.add('dashboard__item__button--return')
    alugarImg.classList.add('dashboard__item__img--rented')
    alugarBotao.innerHTML = 'Devolver'
  }
}