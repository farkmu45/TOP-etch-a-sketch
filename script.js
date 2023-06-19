const container = document.getElementById('container')
const button = document.getElementById('btn-create')
generateGrid()

button.addEventListener('click', () => {
  const gridNumber = prompt('Change your grid')
  if (gridNumber < 100 && gridNumber != null && gridNumber != '') {
    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
    generateGrid(gridNumber)
  }
})

function generateGrid(number = 16) {
  for (let i = 0; i < number * number; i++) {
    const box = document.createElement('div')
    box.className = 'box'
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = randomRgbColor()
    })
    container.appendChild(box)
  }
}

function randomRgbColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
