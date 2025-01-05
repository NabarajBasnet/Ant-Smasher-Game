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

        this.colorArr = ['red', 'blue', 'green'];
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fill();
    };

    move() {
        this.position.x = this.position.x + this.direction.x;
        this.position.y = this.position.y + this.direction.y;
    };

    update(ctx) {
        this.draw(ctx);
        this.move();
        this.checkBorderCollision();
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
