const keys = document.querySelectorAll('.key');

keys.forEach(key  => {
    key.addEventListener('click', () => playNote(key));
});

function playNote(note) {
    let keySound;
    if (note.dataset) {
        keySound = document.getElementById(note.dataset.key);
    }
    else {
        keySound = document.getElementById(note);
    }
    keySound.currentTime = 0;
    keySound.play();
}

document.addEventListener('keydown', event => {
switch(event.code) {
    case 'KeyZ':
        playNote('C2');
        break;
    case 'KeyS':
        playNote('Db2');
        break;
    case 'KeyX':
        playNote('D2');
        break;
    case 'KeyD':
        playNote('Eb2');
        break;
    case 'KeyC':
        playNote('E2');
        break;    
    case 'KeyV':
        playNote('F2');
        break;
    case 'KeyG':
        playNote('Gb2');
        break;
    case 'KeyB':
        playNote('G2');
        break;
    case 'KeyH':
        playNote('Ab2');
        break;
    case 'KeyN':
        playNote('A2');
        break;
    case 'KeyJ':
        playNote('Bb2');
        break;
    case 'KeyM':
        playNote('B2');
        break;
    case 'Comma':
        playNote('C3');
        break;
    case 'KeyL':
        playNote('Db3');
        break;
    case 'Period':
        playNote('D3');
        break;
    case 'Semicolon':
        playNote('Eb3');
        break;
    case 'Slash':
        playNote('E3');
        break;

}
})
