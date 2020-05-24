window.onload = function () {

    for (j = 0; j < 500; j++) {

        let i = Math.floor(Math.random() * 0xffffff).toString(16)

        let x = document.createElement('div')
        x.style.height = '10px'
        x.style.width = '10px'
        x.style.left = (Math.random() * window.innerWidth - 10) + 'px'
        x.style.top = (Math.random() * window.innerHeight - 10) + 'px'
        x.style.position = 'absolute'
        x.style.backgroundColor = '#' + i

        setInterval(() => {
            let i2 = Math.floor(Math.random() * 0xffffff).toString(16)
            x.style.backgroundColor = '#' + i2;
            px = parseFloat(x.style.top.substring(0, x.style.top.length - 2));
            if (px > 900) {
                x.style.top = '0px'
            } else {
                x.style.top = parseFloat(x.style.top.substring(0, x.style.top.length - 2)) + Math.random() * 10 + 'px';
            }
        }, 10);

        document.body.appendChild(x)
    }

    setInterval(() => {
        let i = Math.floor(Math.random() * 0xffffff).toString(16)
        document.getElementById("gangnam").style.backgroundColor = '#' + i;

    }, 100);
}

function play() {

    let a = document.createElement("audio")
    a.src = "gang.mp3"
    document.body.appendChild(a)
    a.play()

    let i = 0
    setInterval(() => {
        let a = document.createElement("audio")
        a.src = "gang.mp3"
        document.body.appendChild(a)
        a.play()
    }, 5000);
}