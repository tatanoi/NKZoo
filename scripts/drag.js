//////////////////////////////////////////////////////////////////////////////

const patternPath = '../assets/markers/pattern';
const speechPath = '../assets/sounds/speech';
const soundPath = '../assets/sounds';

const animals = [
    'allosaurus',
    'bunny',
    'butterfly',
    'cow',
    'crocodile',
    'guppie',
    'hippopotamus',
    'macaw',
    'penguin',
    'rhinoceros',
    'squirrel',
    'whale',
    'wolf',
];

const soundConfigs = {
    allosaurus: `allosaurus 1 2 3 4`,
    bunny: `bunny 1 2 3 4`,
    cow: `cow 1 2 3`,
    crocodile: `crocodile 1 2 3 4`,
    hippopotamus: `hippopotamus 1 2 3`,
    macaw: `macaw 1 2 3 4`,
    penguin: `penguin 1 2 3 4`,
    rhinoceros: `rhinoceros 1`,
    squirrel: `squirrel 1 2 3 4`,
    whale: `whale 1 2 3 4`,
    wolf: `wolf 1 2 3 4`,
};


let soundListener = new THREE.Audio(new THREE.AudioListener());
soundListener.setVolume(1);
soundListener.setLoop(false);

let speechListener = new THREE.Audio(new THREE.AudioListener());
speechListener.setVolume(1);
speechListener.setLoop(false);
speechListener.onEnded = () => {
    btnSpeech.innerHTML = `<img src="../assets/images/speech.png" alt=""/>`;
    speechListener.stop();
};

let sounds = {};
let speeches = {};

function initSound() {
    let audioLoader = new THREE.AudioLoader();
    let soundKeys = Object.keys(soundConfigs);
    let count = 0;
    for (let i = 0; i < soundKeys.length; i++) {
        let key = soundKeys[i];
        let strArray = soundConfigs[key].split(' ');
        if (!strArray || strArray.length <= 1) {
            continue;
        }
        let name = strArray[0];

        for (let j = 1; j < strArray.length; j++) {
            let url = `${soundPath}/${name}/${j}.mp3`;
            count++;
            audioLoader.load(url, buffer => {
                sounds[name] = sounds[name] || {};
                sounds[name][j] = buffer;
            });
        }
    }

    for (let i = 0; i < animals.length; i++) {
        let url = `${speechPath}/${animals[i]}.mp3`;
        audioLoader.load(url, buffer => {
            speeches[animals[i]] = buffer;
            console.log(url);
        });
    }
}

initSound();

let btnSound = document.querySelector('#btnSound');
let btnSpeech = document.querySelector('#btnSpeech');
let btnPattern = document.querySelector('#btnPattern');
let dropdownPattern = document.querySelector('#dropdownPattern');

let targetEl = document.querySelector(`#wolf-entity`) || null;
let currentSpeech = null;
let currentSound = null;

btnSpeech.addEventListener('click', () => {
    if (!currentSpeech) return;
    if (speechListener.isPlaying) {
        speechListener.stop();
        btnSpeech.innerHTML = `<img src="../assets/images/speech.png" alt=""/>`;
    } else if (currentSpeech) {
        speechListener.setBuffer(currentSpeech);
        speechListener.play();
        btnSpeech.innerHTML = `<img src="../assets/images/silence.png" alt=""/>`;
    }
});

btnSound.addEventListener('click', () => {
    if (!currentSound) return;
    let keys = Object.keys(currentSound);
    if (soundListener.isPlaying) {
        soundListener.stop();
    }
    let buffer = currentSound[keys[Math.floor(Math.random() * keys.length)]] || null;
    if (buffer) {
        soundListener.setBuffer(buffer);
        soundListener.play();
    }
});

setTimeout(() => updateTarget(), 5000);

function onClickLi(name) {
    let entity = document.querySelector(`#${name}-entity`);
    if (entity) {
        targetEl = entity;
        updateTarget();
    }
}

function updateDropdown() {
    let visibleEntities = document.querySelectorAll('.clickable') || [];
    let dropdownInnerHtml = '';
    for (let i = 0; i < visibleEntities.length; i++) {
        let entity = visibleEntities[i];
        let name = entity.getAttribute('id').replace('-entity', '');
        dropdownInnerHtml += `<li><img onclick="onClickLi('${name}')" src='${patternPath}/${name}.png' style='width:40px;height:40px' alt=''></li>`;
    }
    dropdownPattern.innerHTML = dropdownInnerHtml;
}

function updateTarget() {
    if (!targetEl) {
        console.log('Target not found');
    }
    //
    let entityName = targetEl.getAttribute('id').replace('-entity', '');
    let speech = speeches[entityName] || null;
    let sound = sounds[entityName] || null;

    if (btnPattern) {
        btnPattern.innerHTML = `<img src="${patternPath}/${entityName}.png" style="width:25px;height:25px" alt="">`
    }

    if (btnSpeech) {
        currentSpeech = speech;
    }

    if (btnSound) {
        currentSound = sound;
    }
}

//////////////////////////////////////////////////////////////////////////////

let hammertime = new Hammer(document.querySelector('body'));
hammertime.on('pan', (ev) => {
    if (targetEl) {
        let rotation = targetEl.getAttribute("rotation");
        let speed = 10;
        switch (ev.direction) {
            case 2:
                rotation.y = rotation.y + speed;
                break;
            case 4:
                rotation.y = rotation.y - speed;
                break;
            case 8:
                rotation.x = rotation.x + speed;
                break;
            case 16:
                rotation.x = rotation.x - speed;
                break;
            default:
                break;
        }
        targetEl.setAttribute("rotation", rotation);
    }
});

/////////////////////////////////////////////////////////////////////////////////

AFRAME.registerComponent('marker-handler', {
    init: function () {
        let entity = this.el.querySelector(`.drag-entity`);
        let raycaster = document.querySelector('#raycaster');

        this.el.addEventListener('markerFound', () => {
            entity.classList.add('clickable');
            updateDropdown();
            raycaster.components.raycaster.refreshObjects();

        });
        this.el.addEventListener('markerLost', () => {
            entity.classList.remove('clickable');
            updateDropdown();
            raycaster.components.raycaster.refreshObjects();
        });
    }
});

AFRAME.registerComponent('click-handler', {
    init: function () {
        let entities = document.querySelectorAll('.drag-entity') || [];
        this.el.addEventListener('click', (ev) => {
            let intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            for (let i = 0; i < entities.length; i++) {
                let entity = entities[i];
                if (entity && intersectedElement === entity) {
                    console.log(entity.getAttribute('id'));
                    targetEl = entity;
                    updateTarget();
                    break;
                }
            }
        })
    }
});

/////////////////////////////////////////////////////////////////////////////////

