//global variables
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const keys = document.querySelectorAll('.key');
const gameBtn = document.getElementById('playGameEasy');
const gameBtn2 = document.getElementById('playGameHard');
const gameBtnPractice = document.getElementById('practice');
const backgroundImg = new Image();
backgroundImg.src = 'images/colorStaff.png';

let interval;
let showedNote = 0;
let notePosition = 1000;
let checkedNote;
let score = 0;
let playMode;
let gameStarted = false;
// let previousNotePlayLength = 0;

//page load
window.onload = () => {
    document.getElementById('playGameEasy').onclick = () => {
    startPiano(2);
    playMode = 'easy';
    setResetButtons()
    
    };
    document.getElementById('playGameHard').onclick = () => {
        startPiano(1);
        playMode = 'hard';
        setResetButtons()
    };
    document.getElementById('practice').onclick = () => {
        startPiano(2);
        playMode = 'practice';
        // interval = notePosition -= 120;
        setResetButtons()
    };
}

function startPiano(gl) {
    document.getElementById('instructions').style.display = 'none';
    const BPM = 130;
    let gameLevel = gl;
    const BPMTime = Math.floor (gameLevel * 1000 * 60 * (1 / BPM));
    gameStarted = true;
    interval = window.setInterval(incSongNote, BPMTime);
}

function setResetButtons() {
    renderCanvas();
    gameBtn.innerHTML = 'Reset Game';
    gameBtn2.style.display = 'none';
    gameBtnPractice.style.display = 'none';
    gameBtn.addEventListener('click', () => {
        location.reload();
    })
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

//Here Comes The Sun 
const songNotes2 = ['E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'C3', 'A2', 'C3', 'D3', 'C3', 'A2', 'G2', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'C3', 'A2', 'E3', 'D3', 'C3', 'B2', 'E3', 'D3', 'E3', 'C3', 'E3', 'C3', 'D3', 'E3', 'E3', 'D3', 'E3', 'C3', 'C3', 'D3', 'C3', 'E3', 'D3', 'C3'];

//Auld Lang Syne
const songNotes = ['C2', 'F2', 'E2', 'F2', 'A2', 'G2', 'F2', 'G2', 'A2', 'F2', 'F2', 'A2', 'C3', 'D3', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'A2', 'G2', 'F2', 'D2', 'D2', 'C2', 'F2', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'D3', 'C3', 'A2', 'A2', 'C3', 'D3', 'D3', 'C3', 'A2', 'A2', 'F2', 'G2', 'F2', 'G2', 'A2', 'G2', 'F2', 'D2', 'D2', 'C2', 'F2']

// Practice Notes
let practiceKeys = [];

document.addEventListener('keydown', event => {
if(gameStarted) {    
switch(event.code) {
    case 'KeyA':
        playKeyboard('C2');
        if (playMode === 'practice') {
            practiceKeys.push('C2')
        }
        break;
    case 'KeyW':
        playKeyboard('Db2');
        if (playMode === 'practice') {
            practiceKeys.push('Db2')
        }
        break;
    case 'KeyS':
        playKeyboard('D2');
        if (playMode === 'practice') {
            practiceKeys.push('D2')
        }
        break;
    case 'KeyE':
        playKeyboard('Eb2');
        if (playMode === 'practice') {
            practiceKeys.push('Eb2')
        }
        break;
    case 'KeyD':
        playKeyboard('E2');
        if (playMode === 'practice') {
            practiceKeys.push('E2')
        }
        break;    
    case 'KeyF':
        playKeyboard('F2');
        if (playMode === 'practice') {
            practiceKeys.push('F2')
        }
        break;
    case 'KeyT':
        playKeyboard('Gb2');
        if (playMode === 'practice') {
            practiceKeys.push('Gb2')
        }
        break;
    case 'KeyG':
        playKeyboard('G2');
        if (playMode === 'practice') {
            practiceKeys.push('G2')
        }
        break;
    case 'KeyY':
        playKeyboard('Ab2');
        if (playMode === 'practice') {
            practiceKeys.push('Ab2')
        }
        break;
    case 'KeyH':
        playKeyboard('A2');
        if (playMode === 'practice') {
            practiceKeys.push('A2')
        }
        break;
    case 'KeyU':
        playKeyboard('Bb2');
        if (playMode === 'practice') {
            practiceKeys.push('Bb2')
        }
        break;
    case 'KeyJ':
        playKeyboard('B2');
        if (playMode === 'practice') {
            practiceKeys.push('B2')
        }
        break;
    case 'KeyK':
        playKeyboard('C3');
        if (playMode === 'practice') {
            practiceKeys.push('C3')
        }
        break;
    case 'KeyO':
        playKeyboard('Db3');
        if (playMode === 'practice') {
            practiceKeys.push('Db3')
        }
        break;
    case 'KeyL':
        playKeyboard('D3');
        if (playMode === 'practice') {
            practiceKeys.push('D3')
        }
        break;
    case 'KeyP':
        playKeyboard('Eb3');
        if (playMode === 'practice') {
            practiceKeys.push('Eb3')
        }
        break;
    case 'Semicolon':
        playKeyboard('E3');
        if (playMode === 'practice') {
            practiceKeys.push('E3')
        }
        break;
}
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

//game functionality (notes displaying on the staff at given interval)
function incSongNote() {
    notePosition -= 100;
}

function renderCanvas()
{
    let noteDrawings = [];

    context.drawImage(backgroundImg, 0, 0, 1000, 350);
    if (playMode !== 'practice') {
        context.fillStyle='rgba(255, 255, 51, 0.7)';
        context.fillRect(400, 0, 100, 350);
    }
        
    startingNotePosition = notePosition;

    const notesToPlay = playMode === 'easy' ? songNotes : playMode === 'hard' ? songNotes2 : practiceKeys

    if(notesToPlay.length) {
        for(let i = 0; i < notesToPlay.length; i++) {

            const practiceNotePath = playMode === 'practice' ? `freePlay/${notesToPlay[i]}` : null;
            tempDrawing = new Image();
            tempDrawing.src = `images/${playMode !== 'practice' ? notesToPlay[i] : practiceNotePath}.png`;
            noteDrawings.push(tempDrawing);
            
            if(notesToPlay[i].notePosition < -500  && playMode === 'practice') {
                practiceKeys.splice(i, 1);
            }

            // if(playMode === 'practice' && practiceKeys.length === previousNotePlayLength) {
            //     previousNotePlayLength = practiceKeys.length;
            //     practiceKeys.push('');
            
            // }

        }
    }

    noteDrawings.forEach(n => {
        if (startingNotePosition > 100) 
            context.drawImage(n, startingNotePosition, 0);
    
        if (startingNotePosition > 375 && startingNotePosition < 500) {
            checkedNote = n.src.substr(n.src.length-6, 2);
        }
        
        startingNotePosition += 100;
    });

    if(playMode !== 'practice') {
        showScore();
    }

    if (songNotes[songNotes.length - 1] && startingNotePosition < 200 && playMode !== 'practice') {
        gameOver();
    }
    else {
        requestAnimationFrame(renderCanvas);
    }
}

function showScore() {
    context.fillStyle = 'black';
    context.font = '40px "Luckiest Guy"';
    context.fillText(`Score: ${score}`, 800, 50);
}

function gameOver() {
    clearInterval(interval);
    gameStarted = false;
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
    window.cancelAnimationFrame(renderCanvas);
}