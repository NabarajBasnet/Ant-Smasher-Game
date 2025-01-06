const directions = [-1, 1];

class Spider {
    constructor(x, y, w, h, colorOfBox) {
        this.position = {
            x: x || 0,
            y: y || 0
        };

        this.size = {
            width: w || 20,
            height: h || 20
        };

        this.direction = {
            x: directions[Math.floor(Math.random() * 2)],
            y: directions[Math.floor(Math.random() * 2)],
        };

        this.color = colorOfBox;

        this.speed = Math.random() * (3 - 0.5) + 0.5; // (Max + Min) + Min

        this.image = new Image();
        this.image.src = 'https://pngimg.com/d/spider_PNG41.png';
    };

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fill();
    };

    move() {
        this.position.x = this.position.x + this.direction.x * this.speed;
        this.position.y = this.position.y + this.direction.y * this.speed;
    };

    update(ctx, mousePositions) {
        this.draw(ctx);
        this.move();
        this.checkBorderCollision();
        this.checkIsSpiderBeingClicked(mousePositions)
    };

    checkIsSpiderBeingClicked(mousePositions) {
        console.log(mousePositions)
    };

    checkBorderCollision() {
        if (this.position.x + this.size.width >= 400) {
            this.direction.x = -1
        } else if (this.position.x <= 0) {
            this.direction.x = 1
        };

        if (this.position.y + this.size.height >= 400) {
            this.direction.y = -1;
        } else if (this.position.y <= 0) {
            this.direction.y = 1;
        };
    };
};

export default Spider;
