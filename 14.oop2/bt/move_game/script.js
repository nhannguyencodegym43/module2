function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }
    this.setSpeed = function(speed){
        this.speed = speed;
    }
}

var hero = new Hero('Avatar - Copy.jpg', 20, 30, 200, 20);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    if (hero.top < window.innerHeight - hero.size){
        hero.moveDown();
    }
    if (hero.left > window.innerWidth - hero.size){
        hero.moveLeft();
    }
    if (hero.top > window.innerHeight - hero.size){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();