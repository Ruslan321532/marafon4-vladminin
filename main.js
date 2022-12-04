
const board = document.querySelector('#board')
const colors = ['#F0F8FF',   
    '#F0FFF0',   
    "#F0FFFF",   
    "#F4A460",
    "#F5DEB3",   
    "#F5F5DC",   
    "#F5F5F5",   
    '#F5FFFA',   
    '#F8F8FF',   
    '#FA8072',   
    '#FAEBD7',   
    '#FAF0E6',   
    '#FAFAD2',   
    '#FDF5E6', 
    '#FF0000',
    '#FF00FF',
    '#FF00FF',
    '#FF1493',
    '#FF4500',
    '#FF6347',
    '#FF69B4',
    '#FF7F50',
    '#FF8C00',
    '#FFA07A',
    '#FFA500',
    '#FFB6C1',
    '#FFC0CB',
    '#FFD700',
    '#FFDAB9',
    '#FFDEAD',
    '#FFE4B5',
    '#FFE4C4',
    '#FFE4E1',
    '#FFEBCD',
    '#FFEFD5',
    '#FFF0F5',
    '#FFF5EE',
    '#FFF8DC',
    '#FFFACD',
    '#FFFAF0',
    '#FFFAFA',
    '#FFFF00',
    '#FFFFE0',
    '#FFFFF0',
    '#FFFFFF'
]
const squares_number = 400

for (let i = 0;i < squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' , () => {
        setColor(square)
    })

    square.addEventListener('mouseleave' , () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}