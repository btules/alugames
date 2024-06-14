function alterarStatus(numero){
  let alugarBotao = document.getElementById(`game-${numero}`).querySelector('.dashboard__item__button')
  let alugarImg = document.getElementById(`game-${numero}`).querySelector('.dashboard__item__img')
  let informaAluguel = document.getElementById(`game-${numero}`).querySelector('.dashboard__item__button')

  if(alugarBotao.classList.contains('dashboard__item__button--return') && alugarImg.classList.contains('dashboard__item__img--rented')){
    alugarBotao.classList.remove('dashboard__item__button--return')
    alugarImg.classList.remove('dashboard__item__img--rented')
    informaAluguel.innerHTML = 'Alugar'
  }else{
    alugarBotao.classList.add('dashboard__item__button--return')
    alugarImg.classList.add('dashboard__item__img--rented')
    informaAluguel.innerHTML = 'Devolver'
  }
}