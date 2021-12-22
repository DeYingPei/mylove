    const audio1 = document.querySelector('#audio1');
    const audio2 = document.querySelector('#audio2');
    const love = document.querySelector('#img');
    const status = document.querySelector('#status');
    const status1 = document.querySelector('#status1');
    function hold() {
        audio1.play();
        status.innerText = "Châm xinh"
        love.style.width = '600px';
        love.style.left = '450px';
        love.style.animation = 'loveimg 0.7s linear infinite';
    }
    function leave() {
        audio1.pause();
        status.innerText = ""
        love.style.width = '500px';
        love.style.left = '500px';
        love.style.animation = '0.6s linear infinite';
    }
    function press() {
        audio1.pause();
        audio2.play();
        status.style.left = '490px';
        status.style.position = 'absolute';
        status.style.fontSize = '60px';
        status.innerText = "Cái này thì... 🤣🤣🤣";
        love.style.height = '600px';
        love.style.animation = '';
        document.getElementById('img').onmouseover = '';
        document.getElementById('img').onmouseleave = '';
        document.getElementById('img').src = 'img/sheesh.png';
        setTimeout(() => {
            status.style.left = '350px';
            document.getElementById('img').onclick = '';
            document.getElementById('img').src = 'img/love.png';
            status.innerText = "Nhưng nói chung vẫn là vợ anh =))))";
            status1.innerText = "Yêu emmmmm ❤❤❤";
        }, 3000)
    }