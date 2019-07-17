let reactionMap = {
    "allosaurus": {
        "allosaurus": "emo-angry",
        "bunny": "emo-evil",
        "butterfly": "emo-happy",
        "cow": "emo-evil",
        "crocodile": "emo-angry",
        "guppie": "emo-evil",
        "penguin": "emo-evil",
        "hippopotamus": "emo-angry",
        "rhinoceros": "emo-angry",
        "macaw": "emo-evil",
        "shark": "emo-angry",
        "squirrel": "emo-evil",
        "whale": "emo-speechless",
        "wolf": "emo-angry"
    },
    "bunny": {
        "allosaurus": "emo-crying",
        "bunny": "emo-happy",
        "butterfly": "emo-happy",
        "cow": "emo-fear",
        "crocodile": "emo-crying",
        "guppie": "emo-surprised",
        "penguin": "emo-surprised",
        "hippopotamus": "emo-fear",
        "rhinoceros": "emo-fear",
        "macaw": "emo-normal",
        "shark": "emo-crying",
        "squirrel": "emo-happy",
        "whale": "emo-surprised",
        "wolf": "emo-crying"
    },
    "butterfly": {
        "allosaurus": "emo-happy",
        "bunny": "emo-happy",
        "butterfly": "emo-happy",
        "cow": "emo-happy",
        "crocodile": "emo-happy",
        "guppie": "emo-happy",
        "penguin": "emo-happy",
        "hippopotamus": "emo-happy",
        "rhinoceros": "emo-happy",
        "macaw": "emo-happy",
        "shark": "emo-happy",
        "squirrel": "emo-happy",
        "whale": "emo-happy",
        "wolf": "emo-happy"
    },
    "cow": {
        "allosaurus": "emo-crying",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-happy",
        "crocodile": "emo-fear",
        "guppie": "emo-dizzy",
        "penguin": "emo-normal",
        "hippopotamus": "emo-normal",
        "rhinoceros": "emo-normal",
        "macaw": "emo-dizzy",
        "shark": "emo-fear",
        "squirrel": "emo-normal",
        "whale": "emo-speechless",
        "wolf": "emo-fear"
    },
    "crocodile": {
        "allosaurus": "emo-fear",
        "bunny": "emo-evil",
        "butterfly": "emo-happy",
        "cow": "emo-evil",
        "crocodile": "emo-normal",
        "guppie": "emo-evil",
        "penguin": "emo-evil",
        "hippopotamus": "emo-fear",
        "rhinoceros": "emo-fear",
        "macaw": "emo-dizzy",
        "shark": "emo-angry",
        "squirrel": "emo-evil",
        "whale": "emo-speechless",
        "wolf": "emo-angry"
    },
    "guppie": {
        "allosaurus": "emo-crying",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-normal",
        "crocodile": "emo-crying",
        "guppie": "emo-normal",
        "penguin": "emo-crying",
        "hippopotamus": "emo-fear",
        "rhinoceros": "emo-fear",
        "macaw": "emo-fear",
        "shark": "emo-crying",
        "squirrel": "emo-normal",
        "whale": "emo-fear",
        "wolf": "emo-crying"
    },
    "penguin": {
        "allosaurus": "emo-crying",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-normal",
        "crocodile": "emo-normal",
        "guppie": "emo-happy",
        "penguin": "emo-happy",
        "hippopotamus": "emo-surprised",
        "rhinoceros": "emo-surprised",
        "macaw": "emo-dizzy",
        "shark": "emo-crying",
        "squirrel": "emo-dizzy",
        "whale": "emo-surprised",
        "wolf": "emo-fear"
    },
    "hippopotamus": {
        "allosaurus": "emo-angry",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-speechless",
        "crocodile": "emo-normal",
        "guppie": "emo-normal",
        "penguin": "emo-normal",
        "hippopotamus": "emo-normal",
        "rhinoceros": "emo-normal",
        "macaw": "emo-normal",
        "shark": "emo-speechless",
        "squirrel": "emo-normal",
        "whale": "emo-speechless",
        "wolf": "emo-speechless"
    },
    "rhinoceros": {
        "allosaurus": "emo-angry",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-normal",
        "crocodile": "emo-normal",
        "guppie": "emo-normal",
        "penguin": "emo-normal",
        "hippopotamus": "emo-normal",
        "rhinoceros": "emo-normal",
        "macaw": "emo-normal",
        "shark": "emo-normal",
        "squirrel": "emo-normal",
        "whale": "emo-normal",
        "wolf": "emo-normal"
    },
    "macaw": {
        "allosaurus": "emo-normal",
        "bunny": "emo-normal",
        "butterfly": "emo-happy",
        "cow": "emo-surprised",
        "crocodile": "emo-fear",
        "guppie": "emo-normal",
        "penguin": "emo-normal",
        "hippopotamus": "emo-normal",
        "rhinoceros": "emo-fear",
        "macaw": "emo-normal",
        "shark": "emo-crying",
        "squirrel": "emo-happy",
        "whale": "emo-speechless",
        "wolf": "emo-fear"
    },
    "shark": {
        "allosaurus": "emo-angry",
        "bunny": "emo-evil",
        "butterfly": "emo-surprised",
        "cow": "emo-evil",
        "crocodile": "emo-angry",
        "guppie": "emo-evil",
        "penguin": "emo-evil",
        "hippopotamus": "emo-angry",
        "rhinoceros": "emo-fear",
        "macaw": "emo-evil",
        "shark": "emo-angry",
        "squirrel": "emo-evil",
        "whale": "emo-fear",
        "wolf": "emo-angry"
    },
    "squirrel": {
        "allosaurus": "emo-crying",
        "bunny": "emo-happy",
        "butterfly": "emo-happy",
        "cow": "emo-fear",
        "crocodile": "emo-crying",
        "guppie": "emo-normal",
        "penguin": "emo-dizzy",
        "hippopotamus": "emo-fear",
        "rhinoceros": "emo-fear",
        "macaw": "emo-dizzy",
        "shark": "emo-crying",
        "squirrel": "emo-normal",
        "whale": "emo-surprised",
        "wolf": "emo-crying"
    },
    "whale": {
        "allosaurus": "emo-speechless",
        "bunny": "emo-normal",
        "butterfly": "emo-surprised",
        "cow": "emo-normal",
        "crocodile": "emo-normal",
        "guppie": "emo-normal",
        "penguin": "emo-normal",
        "hippopotamus": "emo-surprised",
        "rhinoceros": "emo-surprised",
        "macaw": "emo-normal",
        "shark": "emo-normal",
        "squirrel": "emo-normal",
        "whale": "emo-normal",
        "wolf": "emo-normal"
    },
    "wolf": {
        "allosaurus": "emo-fear",
        "bunny": "emo-evil",
        "butterfly": "emo-happy",
        "cow": "emo-evil",
        "crocodile": "emo-angry",
        "guppie": "emo-evil",
        "penguin": "emo-evil",
        "hippopotamus": "emo-angry",
        "rhinoceros": "emo-fear",
        "macaw": "emo-evil",
        "shark": "emo-angry",
        "squirrel": "emo-evil",
        "whale": "emo-surprised",
        "wolf": "emo-happy"
    }
}; // get from excel

//////////////////////////////////////////////////////////////////////////////

const patternPath = './assets/markers/pattern';
const speechPath = './assets/sounds/speech';
const soundPath = './assets/sounds';

const models = [
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
    btnSpeech.innerHTML = `<img src="./assets/images/speech.png" alt=""/>`;
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

    for (let i = 0; i < models.length; i++) {
        let url = `${speechPath}/${models[i]}.mp3`;
        audioLoader.load(url, buffer => {
            speeches[models[i]] = buffer;
        });
    }
}

initSound();

let btnEmo = document.querySelector('#btnEmo');
let btnReset = document.querySelector('#btnReset');
let btnSound = document.querySelector('#btnSound');
let btnSpeech = document.querySelector('#btnSpeech');
let btnPattern = document.querySelector('#btnPattern');
let dropdownPattern = document.querySelector('#dropdownPattern');

let targetEl = document.querySelector(`#wolf-entity`) || null;
let currentSpeech = null;
let currentSound = null;
let allowEmo = false;

btnReset.addEventListener('click', () => {
    if (!btnReset || !targetEl) return;
    let span = targetEl.getAttribute('kscale');
    let mesh = targetEl.getObject3D('mesh');
    if (mesh) {
        let bbox = new THREE.Box3().setFromObject(mesh);
        let scale = span / bbox.getSize().length();
        // targetEl.object3D.scale.set(scale, scale, scale);
        targetEl.object3D.position.set(0, 0, 0);
        targetEl.object3D.rotation.set(
            THREE.Math.degToRad(0),
            THREE.Math.degToRad(0),
            THREE.Math.degToRad(0)
        );
    }
});

btnSpeech.addEventListener('click', () => {
    if (!currentSpeech) return;
    if (speechListener.isPlaying) {
        speechListener.stop();
        btnSpeech.innerHTML = `<img src="./assets/images/speech.png" alt=""/>`;
    } else if (currentSpeech) {
        speechListener.setBuffer(currentSpeech);
        speechListener.play();
        btnSpeech.innerHTML = `<img src="./assets/images/silence.png" alt=""/>`;
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

btnEmo.addEventListener('click', () => {
    allowEmo = !allowEmo;
    if (allowEmo) {
        btnEmo.innerHTML = `<img src="./assets/images/noemo.png" alt=""/>`;
    } else {
        btnEmo.innerHTML = `<img src="./assets/images/emo.png" alt=""/>`;
    }
    updateEmo();
});


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
        dropdownInnerHtml += `<li onclick="onClickLi('${name}')"><img src='${patternPath}/${name}.png' style='width:40px;height:40px' alt=''> ${name}</li>`;
        if (visibleEntities.length === 1) {
            onClickLi(name);
        }
    }
    dropdownPattern.innerHTML = dropdownInnerHtml;
}

function updateTarget() {
    if (!targetEl) {
        console.log('Target not found');
    }
    let entityName = targetEl.getAttribute('id').replace('-entity', '');
    currentSpeech = speeches[entityName] || null;
    currentSound = sounds[entityName] || null;
    btnPattern.innerHTML = `<img src="${patternPath}/${entityName}.png" style="width:${window.const_scale / 1.4}px;height:${window.const_scale / 1.4}px" alt="">`;
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


AFRAME.registerComponent('kscale', {
    schema: {type: 'number', default: 1},
    init: function () {
        this.scale();
        this.el.addEventListener('object3dset', () => this.scale());
    },
    scale: function () {
        let span = this.data;
        let mesh = this.el.getObject3D('mesh');

        if (!mesh) return;

        let bbox = new THREE.Box3().setFromObject(mesh);

        // Normalize scale.
        let scale = span / bbox.getSize().length();
        mesh.scale.set(scale, scale, scale);
    },
});

AFRAME.registerComponent('marker-handler', {
    init: function () {
        let entity = this.el.querySelector(`.drag-entity`);
        let raycaster = document.querySelector('#raycaster');

        this.el.addEventListener('markerFound', () => {
            entity.classList.add('clickable');
            updateDropdown();
            updateEmo();
            raycaster.components.raycaster.refreshObjects();

        });
        this.el.addEventListener('markerLost', () => {
            entity.classList.remove('clickable');
            updateDropdown();
            updateEmo();
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

function initEmoticons() {
    let entities = document.querySelectorAll('.drag-entity');
    for (let i = 0; i < entities.length; i++) {
        let entity = entities[i];
        entity.innerHTML = `<a-image class="emo" src="" kscale="0.5" position="0 1 0" visible="false"></a-image>`;
    }
}

function updateEmo() {
    let emoElements = document.querySelectorAll('.emo') || [];
    for (let i = 0; i < emoElements.length; i++) {
        let el = emoElements[i];
        if (el) {
            el.setAttribute('src', `#emo-normal`);
            el.setAttribute('visible', JSON.stringify(allowEmo));
        }
    }

    let entityElements = document.querySelectorAll('.clickable') || [];
    if (entityElements.length === 2) {
        let elA = entityElements[0];
        let elB = entityElements[1];
        if (elA && elB) {
            let emoA = elA.querySelector('.emo');
            let emoB = elB.querySelector('.emo');
            let result = getReactions(elA, elB) || [];
            if (result && result.length === 2) {
                emoA.setAttribute('src', `#${result[0]}`);
                emoB.setAttribute('src', `#${result[1]}`);
            }
        }
    }
}

function getReactions(entityA, entityB) {
    let a = entityA.getAttribute('id').replace('-entity', '');
    let b = entityB.getAttribute('id').replace('-entity', '');
    let emoA = reactionMap[a] && reactionMap[a][b] ? reactionMap[a][b] : 'emo-normal';
    let emoB = reactionMap[a] && reactionMap[b][a] ? reactionMap[b][a] : 'emo-normal';
    return [emoA, emoB];
}

initEmoticons();
updateEmo();