import Spider from "./Spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2pvYjE4OTYtei1iYWNrZ3JvdW5kLTAyYS5qcGc.jpg';

const colorArr = ['red', 'blue', 'green'];
let mousePositions = { x: 0, y: 0 }
const spiders = Array.from({ length: 5 }, () => {

    const colorOfBox = colorArr[Math.floor(Math.random() * colorArr.length)];
    const size = Math.random() * (30 - 0) + 10;

    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        30,
        30,
        colorOfBox,
    );
});

const gameLoop = () => {

    const cursorSizeX = 30;
    const cursorSizeY = 30;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.rect(mousePositions.x - cursorSizeX / 2, mousePositions.y - cursorSizeY / 2, cursorSizeX, cursorSizeY)
    ctx.fill()
    spiders.forEach((spider) => {
        spider.update(ctx, mousePositions);
    });
    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

canvas.addEventListener("click", (e) => {
    const canvasBoundry = canvas.getBoundingClientRect();
    const mouseX = e.x - canvasBoundry.left;
    const mouseY = e.y - canvasBoundry.top;

    mousePositions = {
        x: mouseX,
        y: mouseY
    };
});
