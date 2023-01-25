const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    static width = 40;
    static height = 40;
    constructor({position}){
        this.position = position;
        this.width = 40;
        this.height = 40;
    }
    draw(){
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};

const map = [
    ['-', '-', '-', '-', '-', '-'], 
    ['-', '_', '_', '_', '_', '-'], 
    ['-', '_', '-', '-', '_', '-'], 
    ['-', '_', '_', '_', '_', '-'], 
    ['-', '-', '-', '-', '-', '-']
]

const boundaries = []
map.forEach((row, index) => {
    row.forEach((symbol, j) => {
        switch(symbol) {
            case '-': 
            boundaries.push(new Boundary ({
                position: {
                    x: Boundary.width * j,
                    y: Boundary.height * index
                }
            }))
            break
        }
    })
})

boundaries.forEach((boundary) => boundary.draw());