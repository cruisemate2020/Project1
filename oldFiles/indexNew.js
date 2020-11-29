let interval = window.setInterval(incSongNote, 1000);
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const keys = document.querySelectorAll('.key');
let showedNote = 0;
const backgroundImg = new Image();
backgroundImg.src = '/images/staff.jpg'
let notePosition = 900;

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

setTimeout(() => {
    keyReturn('C2');
}, 2000);

//keyboard manipulation
const timer = 500;

document.addEventListener('keydown', event => {
switch(event.code) {
    case 'KeyZ':
        playNote('C2');
        keyChange('C2');
        setTimeout(() => { keyReturn('C2'); }, timer);
        break;
    case 'KeyS':
        playNote('Db2');
        keyChange('Db2');
        setTimeout(() => { keyReturn('Db2'); }, timer);
        break;
    case 'KeyX':
        playNote('D2');
        keyChange('D2');
        setTimeout(() => { keyReturn('D2'); }, timer);
        break;
    case 'KeyD':
        playNote('Eb2');
        keyChange('Eb2');
        setTimeout(() => { keyReturn('Eb2'); }, timer);
        break;
    case 'KeyC':
        playNote('E2');
        keyChange('E2');
        setTimeout(() => { keyReturn('E2'); }, timer);
        break;    
    case 'KeyV':
        playNote('F2');
        keyChange('F2');
        setTimeout(() => { keyReturn('F2'); }, timer);
        break;
    case 'KeyG':
        playNote('Gb2');
        keyChange('Gb2');
        setTimeout(() => { keyReturn('Gb2'); }, timer);
        break;
    case 'KeyB':
        playNote('G2');
        keyChange('G2');
        setTimeout(() => { keyReturn('G2'); }, timer);
        break;
    case 'KeyH':
        playNote('Ab2');
        keyChange('Ab2');
        setTimeout(() => { keyReturn('Ab2'); }, timer);
        break;
    case 'KeyN':
        playNote('A2');
        keyChange('A2');
        setTimeout(() => { keyReturn('A2'); }, timer);
        break;
    case 'KeyJ':
        playNote('Bb2');
        keyChange('Bb2');
        setTimeout(() => { keyReturn('Bb2'); }, timer);
        break;
    case 'KeyM':
        playNote('B2');
        keyChange('B2');
        setTimeout(() => { keyReturn('B2'); }, timer);
        break;
    case 'Comma':
        playNote('C3');
        keyChange('C3');
        setTimeout(() => { keyReturn('C3'); }, timer);
        break;
    case 'KeyL':
        playNote('Db3');
        keyChange('Db3');
        setTimeout(() => { keyReturn('Db3'); }, timer);
        break;
    case 'Period':
        playNote('D3');
        keyChange('D3');
        setTimeout(() => { keyReturn('D3'); }, timer);
        break;
    case 'Semicolon':
        playNote('Eb3');
        keyChange('Eb3');
        setTimeout(() => { keyReturn('Eb3'); }, timer);
        break;
    case 'Slash':
        playNote('E3');
        keyChange('E3');
        setTimeout(() => { keyReturn('E3'); }, timer);
        break;
}
})

//draw notes
const noteImgs = ['C2.png', 'Db2.png', 'D2.png', 'Eb2.png', 'E2.png', 'F2.png', 'Gb2.png', 'G2.png', 'Ab2.png', 'A2.png', 'Bb2.png', 'B2.png', 'C3.png', 'Db3.png', 'D3b.png', 'Eb3.png', 'E3.png'];

const songNotes = ['/images/E3.png', '/images/C3.png', '/images/D3.png', '/images/C3.png'];

//move notes
// function init() {
//     console.log(`Note is: ${showedNote}`);
//     updateCanvasInterval = setInterval(updateCanvas, 1000);
// }


// function updateCanvas() {
// console.log(`Note is: ${showedNote}`);
// drawNotes();
// showedNote++;
// if (showedNote === 4) clearInterval(interval);
// };

// function drawNotes() {
//     context.drawImage(backgroundImg, 0, 0, 1000, 500);
//     drawing = new Image();
//     drawing.src = songNotes[showedNote];
//     context.drawImage(drawing, 800, 0);
//     console.log(`dn --> ${songNotes[showedNote]}`)
// }
renderCanvas();

function incSongNote() {
    if (showedNote === 4) clearInterval(interval);
    showedNote++;
    notePosition -= 100;
    console.log(`isn --> ${songNotes[showedNote]}`)
}

function renderCanvas()
{
   context.drawImage(backgroundImg, 0, 0, 1000, 500); // clear any previous drawing
    drawing = new Image();
    drawing.src = songNotes[showedNote];
    context.drawImage(drawing, notePosition, 0);

    requestAnimationFrame(renderCanvas); // call renderCanvas again as soon as possible
}