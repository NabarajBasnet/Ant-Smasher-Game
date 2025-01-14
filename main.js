import Spider from "./spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

const image = new Image();
image.src = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2pvYjE4OTYtei1iYWNrZ3JvdW5kLTAyYS5qcGc.jpg';

let mousePositions = null;

const spiders = Array.from({ length: 10 }, () => {
    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        30,
        30,
    );
});

const cursorSize = 30;

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    if (mousePositions) {
        ctx.beginPath();
        ctx.rect(
            mousePositions.x - cursorSize / 2,
            mousePositions.y - cursorSize / 2,
            cursorSize,
            cursorSize
        );
        ctx.strokeStyle = "red";
        ctx.stroke();
    }

    spiders.forEach((spider) => {
        spider.update(ctx, mousePositions, cursorSize);
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

    setTimeout(() => {
        mousePositions = null;
    }, 10);
});
