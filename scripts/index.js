//global variables
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const keys = document.querySelectorAll('.key');
const BPM = 130;
const gameLevel = 2;
const BPMTime = Math.floor (gameLevel * 1000 * 60 * (1 / BPM));
const backgroundImg = new Image();
backgroundImg.src = '/images/colorStaff.png';

let interval;
let showedNote = 0;
let notePosition = 1000;
let checkedNote;
let score = 0;
let gameBtn = document.getElementById('playGame');
let freePlayBtn = document.getElementById('freePlay');

//page load
window.onload = () => {
    document.getElementById('playGame').onclick = () => {
    interval = window.setInterval(incSongNote, BPMTime);
    renderCanvas();
    };
}

//piano key display functionality and visuals
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

//piano key / keyboard associations
const timer = 500;

document.addEventListener('keydown', event => {
switch(event.code) {
    case 'KeyA':
        playKeyboard('C2');
        break;
    case 'KeyW':
        playKeyboard('Db2');
        break;
    case 'KeyS':
        playKeyboard('D2');
        break;
    case 'KeyE':
        playKeyboard('Eb2');
        break;
    case 'KeyD':
        playKeyboard('E2');
        break;    
    case 'KeyF':
        playKeyboard('F2');
        break;
    case 'KeyT':
        playKeyboard('Gb2');
        break;
    case 'KeyG':
        playKeyboard('G2');
        break;
    case 'KeyY':
        playKeyboard('Ab2');
        break;
    case 'KeyH':
        playKeyboard('A2');
        break;
    case 'KeyU':
        playKeyboard('Bb2');
        break;
    case 'KeyJ':
        playKeyboard('B2');
        break;
    case 'KeyK':
        playKeyboard('C3');
        break;
    case 'KeyO':
        playKeyboard('Db3');
        break;
    case 'KeyL':
        playKeyboard('D3');
        break;
    case 'KeyP':
        playKeyboard('Eb3');
        break;
    case 'Semicolon':
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
    }
}

//Here Comes The Sun 
//const songNotes = ['C2', 'F2', 'E2', 'F2', 'A2', 'G2', 'C3', 'A2', 'C3', 'D3', 'C3', 'A2', 'G2', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'C3', 'A2', 'E3', 'D3', 'C3', 'B2', 'E3', 'D3', 'E3', 'C3', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'E3', 'C3', 'C3', 'D3', 'C3', 'E3', 'D3', 'C3'];

//Auld Lang Syne
const songNotes = ['C2', 'F2', 'E2', 'F2', 'A2', 'G2', 'F2', 'G2', 'A2', 'F2', 'F2', 'A2', 'C3', 'D3', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'A2', 'G2', 'F2', 'D2', 'D2', 'C2', 'F2', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'D3', 'C3', 'A2', 'A2', 'C3', 'D3', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'A2', 'G2', 'F2', 'D2', 'D2', 'C2', 'F2']

//game functionality (notes displaying on the staff at given interval)
//(option to have user change speed with selector in next version))
function incSongNote() {
    console.log('incSongNote')
    notePosition -= 100;
}

function renderCanvas()
{
    // console.log('renderCanvas')
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
        }
        startingNotePosition += 100;
    });

    showScore();

    if (songNotes[songNotes.length - 1] && startingNotePosition < 200) gameOver();

    requestAnimationFrame(renderCanvas);
}

function showScore() {
    context.fillStyle = 'black';
    context.font = '40px "Luckiest Guy"';
    context.fillText(`Score: ${score}`, 800, 50);
}

function gameOver() {
    context.clearRect(0, 0, 1000, 350);
    context.shadowBlur = 10;
    context.shadowOffsetY = 10;
    context.shadowColor = 'lightgreen';
    context.fillStyle = 'blue';
    context.font = '90px "Luckiest Guy"';
    context.fillText(`GAME OVER!`, 260, 150);
    context.lineWidth = 1.5;
    context.strokeStyle = "lightgreen"; 
    context.strokeText("GAME OVER!", 260, 150); 
    context.fillStyle = 'blue';
    context.font = '70px "Luckiest Guy"';
    context.fillText(`You scored ${score} points!`, 160, 250);
    context.strokeText(`You scored ${score} points!`, 160, 250); 
    gameBtn.innerHTML = 'Reset Game';
    gameBtn.addEventListener('click', () => {location.reload();
    window.cancelAnimationFrame(renderCanvas);
    })
}