import Spider from "./Spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const spiders = Array.from({ length: 50 }, () => {

    const size = Math.random() * (10 - 10) + 10;

    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        size,
        size
    )
})

const gameLoop = (timestamp) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spiders.forEach((spider) => spider.update(ctx));
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
