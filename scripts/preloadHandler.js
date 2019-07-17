window.countLoaded = 0;
const TOTAL_COUNT_LOAD = 15;

initLoadedCallback = function() {
    AFRAME.registerComponent('countload', {
      init: function () {
        this.el.addEventListener('object3dset', window.modelLoadedCallback);
      }
    });
};

modelLoadedCallback = function() {

    if(++window.countLoaded == TOTAL_COUNT_LOAD) {
        document.getElementById("loading_text").innerText = "Tải hoàn tất";
        window.isDoneLoad = true;
        document.getElementById("btn_final").style.display = "block";
    }

    var pros = document.getElementById("progress_one");
    if(pros)
        pros.style.width = "" + ((window.countLoaded/TOTAL_COUNT_LOAD).toFixed(2) * 100) + "%";

    
}

initLoadedCallback();

// ========= sound

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