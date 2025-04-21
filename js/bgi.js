document.addEventListener('DOMContentLoaded', function() {
    const bgi = [{url: 'bgi/bgi1.jpg', tone: 'dark' }, 
                {url: 'bgi/bgi2.jpg', tone: 'medium'},  
                {url: 'bgi/bgi5.jpg', tone: 'light'}, 
                {url: 'bgi/bgi6.jpg', tone: 'dark'}, 
                {url: 'bgi/bgi7.jpg', tone: 'light'}, 
                {url: 'bgi/bgi8.jpg', tone: 'medium'}, 
                {url: 'bgi/bgi9.jpg', tone: 'dark'}, 
                {url: 'bgi/bgi10.jpg', tone: 'medium'}
            ];

    function randomizeBgi() {
        const randomBgi = Math.floor(Math.random() * bgi.length);
        const randomPic = bgi[randomBgi];
        document.body.style.backgroundImage = `url('${randomPic.url}')`;

        if (randomPic.tone === 'dark') {
            document.body.style.color = 'white';
        }
        else if (randomPic.tone === 'light') {
            document.body.style.color = 'black';
        }
        else {
            document.body.style.color = 'dark-gray';
        }
    }


    randomizeBgi();

    setInterval(randomizeBgi, 30000);
});