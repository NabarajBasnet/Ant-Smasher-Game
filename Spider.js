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

        this.isSpiderDead = false;

        this.image = new Image();
        this.image.src = 'https://pngimg.com/d/spider_PNG41.png';
    };

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fill();
    };

    move() {
        if (this.isSpiderDead) {
            return;
        };

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
        const spiderDim = {
            sTop: this.position.y,
            sRight: this.position.x + this.size.width,
            sLeft: this.position.x,
            sBottom: this.position.y + this.size.height,
        };

        const cursorDim = {
            mTop: mousePositions.y,
            mBottom: mousePositions.y + 45,
            mRight: mousePositions.x + 45,
            mLeft: mousePositions.x
        };

        // Checks 
        const isSpiderClicked =
            cursorDim.mRight > spiderDim.sLeft &&
            cursorDim.mBottom > spiderDim.sTop &&
            cursorDim.mLeft < spiderDim.sRight &&
            cursorDim.mTop < spiderDim.sBottom;

        if (isSpiderClicked) {
            this.isSpiderDead = true;
        };
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
