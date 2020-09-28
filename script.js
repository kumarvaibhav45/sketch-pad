let resetBtn = document.getElementById('reset')
let showHide = document.getElementById('show-hide')
let size = document.getElementById('size')
let grid = document.getElementById('grid')
let colorInp = document.getElementById('color')
let random = document.getElementById('random')
let squareBorder = true
let gridSize = 16
let color = '#B800FF'
let goRandom = false
random.checked = false

function generateColor() {
  let red = Math.trunc(Math.random() * 255)
  let blue = Math.trunc(Math.random() * 255)
  let green = Math.trunc(Math.random() * 255)
  return `rgb(${red}, ${blue}, ${green})`
}

function squareHover(e) {
  if (goRandom) {
    e.target.style.backgroundColor = generateColor()
  } else {
    e.target.style.backgroundColor = color
  }
}

function addGrid() {
  // empty grid first
  grid.innerHTML = ''
  showHide.checked = false
  squareBorder = true
  size.value = gridSize
  colorInp.value = color
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement('div')
    div.setAttribute('class', 'grid-square')
    div.addEventListener('mouseover', squareHover)
    grid.appendChild(div)
  }
}

let removeBorder = () => {
  let gridSquares = document.querySelectorAll('.grid-square')
  gridSquares.forEach((sq) => {
    sq.style.borderWidth = 0
  })
}
let addBorder = () => {
  let gridSquares = document.querySelectorAll('.grid-square')
  gridSquares.forEach((sq) => {
    sq.style.borderWidth = '1px'
  })
}
showHide.addEventListener('input', function () {
  if (squareBorder) {
    removeBorder()
    squareBorder = false
  } else {
    addBorder()
    squareBorder = true
  }
  return false
})

resetBtn.addEventListener('click', function () {
  addGrid()
  return false
})

size.addEventListener('input', function (e) {
  gridSize = e.target.value
  addGrid()
  return false
})

colorInp.addEventListener(
  'change',
  function (e) {
    color = e.target.value
  },
  false
)
random.addEventListener('input', function () {
  goRandom = !goRandom
})

addGrid()
