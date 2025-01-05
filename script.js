import Spider from "./Spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colorArr = ['red', 'blue', 'green'];

const spiders = Array.from({ length: 50 }, () => {

    const colorOfBox = colorArr[Math.floor(Math.random() * colorArr.length)];
    const size = Math.random() * (20 - 10) + 10;

    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        size,
        size,
        colorOfBox
    )
})

const gameLoop = (timestamp) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spiders.forEach((spider) => {
        spider.update(ctx);
    });
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
