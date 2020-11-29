class Game {
    constructor() {
        this.canvas = undefined;
        this.context = undefined;
        this.piano = new Piano()
        this.staff = new Staff()
        this.score = 0;
    }
}

begin() {
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d');

    //draw canvas with staff
    
    
}