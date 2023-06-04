window.onload = function () {
    let squares = []
    for (j = 0; j < 500; j++) {
        const color = Math.floor(Math.random() * 0xffffff).toString(16)
        const left = Math.random()
        const top = Math.random() * window.innerHeight - 20
        const rotSpeed = (Math.random() * 2) + 0.25;

        let square = document.createElement('div')
        square.className = 'square'
        square.style.top = top + 'px'
        square.style.backgroundColor = '#' + color
        square.style.animation = `rotation ${rotSpeed}s infinite linear`
        
        squares.push({
            el: square,
            top: top,
            left: left
        })
    }

    let fragment = document.createDocumentFragment()
    squares.forEach(s => fragment.appendChild(s.el))
    document.body.appendChild(fragment)

    function distributeSquares() {
        squares.forEach(s => {
            s.el.style.left = (s.left * window.innerWidth - 20) + 'px';
        });
    }
    
    squares.forEach(s => {
        const moveSquare = () => {
            const color = Math.floor(Math.random() * 0xffffff).toString(16)
            s.el.style.backgroundColor = '#' + color
            s.top = (s.top + Math.random() * 25) % (window.innerHeight - 20)
            s.el.style.top = s.top + 'px'
            setTimeout(moveSquare, Math.random() + 25)
        }
        moveSquare()
    })

    setInterval(() => {
        let i = Math.floor(Math.random() * 0xffffff).toString(16)
        document.getElementById("gangnam").style.backgroundColor = '#' + i;
    }, 100);

    window.addEventListener('resize', distributeSquares);
    distributeSquares();
}

function play() {
    let a = document.createElement("audio")
    a.src = "gang.mp3"
    document.body.appendChild(a)
    a.play()
    setInterval(() => {
        let a = document.createElement("audio")
        a.src = "gang.mp3"
        document.body.appendChild(a)
        a.play()
    }, 5000);
}