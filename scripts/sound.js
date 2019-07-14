initSound = function() {
    // initialize events
    //THREE.EventDispatcher.prototype.apply( THREE.Audio.prototype );
    // THREE.Audio.prototype.onEnded = function() {

    //     this.isPlaying = false;
    //     this.dispatchEvent( { type: 'ended' } ); // ended
    // };

    // per animal
    var listener = new THREE.AudioListener();
    window.sound = new THREE.Audio( listener );
    window.sound.setVolume(1);
    window.sound.setLoop(false);

    // for all
    var listener2 = new THREE.AudioListener();
    window.speecher = new THREE.Audio( listener2 );
    window.speecher.setVolume(1);
    window.speecher.setLoop(false);
    //window.speecher.isASpeecher = true;
    window.speecher.onEnded = function() {
        this.isPlaying = false;
        window.speechState = false;
        document.getElementById("btn").src = "./iconfinder_button_31_61462.png";
    };

    window.registerSounds();
}

registerSounds = function() {

    window.currentId = "";

    window.speechs = {};
    window.speechState = false;

    AFRAME.registerComponent('marker_sound', {// component for the marker
        schema: {type: 'string', default: ""},
        init: function () {
            var strs = this.data.split(" ");
            if(!strs || strs.length == 0)
                return;
    
            var name = strs[0];
            window[name] = this;
            this.name = name;
    
            var p = "";
            this.buffers = [];
            
            var audioLoader = new THREE.AudioLoader();
            // animal yell loader
            for(let i = 1; i < strs.length; ++i) {
                p = "./assets/sounds/" + name + "/" + strs[i] + ".mp3";
                audioLoader.load(p, ( buffer ) => {
                    this.buffers.push(buffer);
                });
            }
            // animal speech loader
            p = "./assets/sounds/speech/" + name + ".mp3";
            audioLoader.load(p, ( buffer ) => {
                window.speechs[this.name] = buffer;
            });

            // event found and lost
            let marker = this.el;
            marker.addEventListener('markerFound', () => {
                window.currentId = this.name;

                if(this.buffers.length == 0)
                    return;

                if(window.sound.sourceType != "empty") {
                    window.sound.stop();
                }
                window.sound.setBuffer(this.buffers[Math.floor(Math.random() * this.buffers.length)]);
                window.sound.play();
            });
            marker.addEventListener('markerLost', () => {
                if(this.buffers.includes(window.sound.buffer)
                    && window.sound.sourceType != "empty")
                    window.sound.stop();
            });
        }
    });
}

onClickSpeech = function() {
    if(window.speechState) {
        if(window.stopSpeaking()){
            //document.getElementById("btn").src = "./iconfinder_button_31_61462.png";
            window.btnStop.classList.add("hide");
            window.btnStop.classList.remove("show");
            // window.btnPlay.classList.add("show");
            // window.btnPlay.classList.remove("hide");
            window.speechState = false;
        }
    }
    else {
        if(window.speakCurrent()){
            //document.getElementById("btn").src = "./iconfinder_button_32_61463.png";
            // window.btnPlay.classList.add("hide");
            // window.btnPlay.classList.remove("show");
            window.btnStop.classList.add("show");
            window.btnStop.classList.remove("hide");
            window.speechState = true;
        }
    }
}

speakCurrent = function() {
    if(window.speechs[window.currentId] != null) {
        window.stopSpeaking();

        window.speecher.setBuffer(window.speechs[window.currentId]);
        window.speecher.play();

        return true;
    }
}

stopSpeaking = function() {
    if(window.speecher.sourceType != "empty")
        window.speecher.stop();

    return true;
}