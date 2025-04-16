document.addEventListener('DOMContentLoaded', function() {
    const bgi = ['bgi/bgi1.jpg', 'bgi/bgi2.jpg', 'bgi/bgi3.jpg', 'bgi/bgi4.jpg', 'bgi/bgi5.jpg', 'bgi/bgi6.jpg', 'bgi/bgi7.jpg', 'bgi/bgi8.jpg', 'bgi/bgi9.jpg', 'bgi/bgi10.jpg'];

    function randomizeBgi() {
        const randomBgi = Math.floor(Math.random() * bgi.length);
        const randomPic = bgi[randomBgi];
        document.body.style.backgroundImage = `url('${randomPic}')`;
    }

    randomizeBgi();

    setInterval(randomizeBgi, 30000);
});