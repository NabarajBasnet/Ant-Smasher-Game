import Spider from "./Spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image()
image.src = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2pvYjE4OTYtei1iYWNrZ3JvdW5kLTAyYS5qcGc.jpg'

const colorArr = ['red', 'blue', 'green'];

const spiders = Array.from({ length: 10 }, () => {

    const colorOfBox = colorArr[Math.floor(Math.random() * colorArr.length)];
    const size = Math.random() * (20 - 10) + 10;

    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        30,
        30,
        colorOfBox
    )
})

const gameLoop = (timestamp) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image,0,0,canvas.width, canvas.height);
    spiders.forEach((spider) => {
        spider.update(ctx);
    });
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
