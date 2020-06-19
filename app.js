const btnDontPush = document.getElementById('btnDontPush')

btnDontPush.addEventListener('click', function () {
  const clicked = function () {
    this.textContent = 'Why you clicked me 😑'
    this.className = 'big-button-red'
  }
  clicked()
})
