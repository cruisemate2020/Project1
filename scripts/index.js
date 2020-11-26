const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const keys = document.querySelectorAll('.key');

// keys.forEach(key  => {
//     key.addEventListener('click', () => playNote(key));
// });

function playNote(note) {
    let keySound;
    keySound = document.getElementById(note);
    keySound.currentTime = 0;
    keySound.play();
}

function keyChange(note) {
    const playedKey = document.querySelector(`[data-key="${note}"`);
    // console.log(playedKey.dataset.key);
    playedKey.classList.add('playing');
    // setTimeout(playedKey.classList.remove('playing'), 5000);
}

function keyReturn(note) {
    const endKey = document.querySelector(`[data-key="${note}"`);
    // console.log(playedKey.dataset.key);
    endKey.classList.remove('playing');
}

setTimeout(() => {
    keyReturn('C2');
}, 2000);

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
