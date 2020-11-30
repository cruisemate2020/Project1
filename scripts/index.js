const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const keys = document.querySelectorAll('.key');
const BPM = 130;
const gameLevel = 3;
const BPMTime = Math.floor (gameLevel * 1000 * 60 * (1 / BPM));
const interval = window.setInterval(incSongNote, BPMTime);
const backgroundImg = new Image();
backgroundImg.src = 'images/colorStaff.jpg'

let showedNote = 0;
let notePosition = 1000;
let checkedNote;
let score = 0;

function playNote(note) {
    let keySound;
    keySound = document.getElementById(note);
    keySound.currentTime = 0;
    keySound.play();
}

function keyChange(note) {
    const playedKey = document.querySelector(`[data-key="${note}"`);
    playedKey.classList.add('playing');
}

function keyReturn(note) {
    const endKey = document.querySelector(`[data-key="${note}"`);
    endKey.classList.remove('playing');
}

//keyboard manipulation
const timer = 500;

document.addEventListener('keydown', event => {
switch(event.code) {
    case 'KeyZ':
        playKeyboard('C2');
        break;
    case 'KeyS':
        playKeyboard('Db2');
        break;
    case 'KeyX':
        playKeyboard('D2');
        break;
    case 'KeyD':
        playKeyboard('Eb2');
        break;
    case 'KeyC':
        playKeyboard('E2');
        break;    
    case 'KeyV':
        playKeyboard('F2');
        break;
    case 'KeyG':
        playKeyboard('Gb2');
        break;
    case 'KeyB':
        playKeyboard('G2');
        break;
    case 'KeyH':
        playKeyboard('Ab2');
        break;
    case 'KeyN':
        playKeyboard('A2');
        break;
    case 'KeyJ':
        playKeyboard('Bb2');
        break;
    case 'KeyM':
        playKeyboard('B2');
        break;
    case 'Comma':
        playKeyboard('C3');
        break;
    case 'KeyL':
        playKeyboard('Db3');
        break;
    case 'Period':
        playKeyboard('D3');
        break;
    case 'Semicolon':
        playKeyboard('Eb3');
        break;
    case 'Slash':
        playKeyboard('E3');
        break;
}
})

function playKeyboard (keyNote) {
    playNote(keyNote);
    keyChange(keyNote);
    setTimeout(() => { keyReturn(keyNote); }, timer);
    if (checkedNote === keyNote) {
        score++;
        // console.log(`---> score ${score}`);
    }
}

// //draw notes
// const noteImgs = ['C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3b', 'Eb3', 'E3'];

const songNotes = ['E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'C3', 'A2', 'C3', 'D3', 'C3', 'A2', 'G2', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'C3', 'A2', 'E3', 'D3', 'C3', 'B2', 'E3', 'D3', 'E3', 'C3', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'E3', 'C3', 'C3', 'D3', 'C3', 'E3', 'D3', 'C3'];

renderCanvas();

function incSongNote() {
    notePosition -= 100;
}

function renderCanvas()
{
    context.drawImage(backgroundImg, 0, 0, 1000, 350);
    context.fillStyle='rgba(255, 255, 51, 0.7)';
    context.fillRect(400, 0, 100, 350);
    
    let noteDrawings = [];
    
    startingNotePosition = notePosition;

    for(let i = 0; i < songNotes.length; i++) {
        tempDrawing = new Image();
        tempDrawing.src = 'images/' + songNotes[i] + '.png';
        noteDrawings.push(tempDrawing);
    }

        noteDrawings.forEach(n => {
        if (startingNotePosition > 100) 
            context.drawImage(n, startingNotePosition, 0);
    

        if (startingNotePosition > 375 && startingNotePosition < 500) {
        checkedNote = n.src.substr(n.src.length-6, 2);
        // console.log(`--->${checkedNote}`);
        }
        startingNotePosition += 100;
    });

    showScore();
    requestAnimationFrame(renderCanvas);
}

function showScore() {
    context.fillStyle = 'black';
    context.font = '40px "Luckiest Guy"';
    context.fillText(`Score: ${score}`, 800, 50);
}

function gameOver() {
    context.clearRect(0, 0, 1000, 350);
    context.fillStyle = 'red';
    context.font = '70px Arial';
    context.fillText(`GAME OVER! /nYou scored ${score} points, ` + `${score} \ ${songNotes.length}`, 300, 200);
}