const directions = [-1, 1];
class Spider {
    constructor(x, y, w, h) {
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

        this.speed = Math.random() * (3 - 0.5) + 0.5;
        this.isSpiderDead = false;

        this.image = new Image();
        this.image.src = 'https://pngimg.com/d/spider_PNG41.png';
    };

    draw(ctx) {
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

    update(ctx, mousePositions, cursorSize) {
        this.draw(ctx);
        this.move();
        this.checkBorderCollision();
        this.checkIsSpiderBeingClicked(mousePositions, cursorSize);
    };

    checkIsSpiderBeingClicked(mousePositions, cursorSize) {
        if (!mousePositions) {
            return;
        }

        const spiderDim = {
            sTop: this.position.y,
            sRight: this.position.x + this.size.width,
            sLeft: this.position.x,
            sBottom: this.position.y + this.size.height,
        };

        const cursorDim = {
            mTop: mousePositions.y - cursorSize / 2,
            mBottom: mousePositions.y + cursorSize / 2,
            mRight: mousePositions.x + cursorSize / 2,
            mLeft: mousePositions.x - cursorSize / 2,
        };

        // Check collision
        const isSpiderClicked =
            cursorDim.mRight > spiderDim.sLeft &&
            cursorDim.mBottom > spiderDim.sTop &&
            cursorDim.mLeft < spiderDim.sRight &&
            cursorDim.mTop < spiderDim.sBottom;

        if (isSpiderClicked) {
            this.isSpiderDead = true;
        }
    };

    checkBorderCollision() {
        if (this.position.x + this.size.width >= 600) {
            this.direction.x = -1
        } else if (this.position.x <= 0) {
            this.direction.x = 1
        };

        if (this.position.y + this.size.height >= 600) {
            this.direction.y = -1;
        } else if (this.position.y <= 0) {
            this.direction.y = 1;
        };
    };
};

export default Spider;
