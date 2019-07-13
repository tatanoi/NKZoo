AFRAME.registerComponent('kscale', {
    schema: {type: 'number', default: 1},
    init: function () {
        this.scale();
        this.el.addEventListener('object3dset', () => this.scale());
    },
    scale: function () {
        const el = this.el;
        const span = this.data;
        const mesh = el.getObject3D('mesh');

        if (!mesh) return;

        // Compute bounds.
        const bbox = new THREE.Box3().setFromObject(mesh);

        // Normalize scale.
        const scale = span / bbox.getSize().length();
        mesh.scale.set(scale, scale, scale);
    },
});

AFRAME.registerComponent('register-events', {
    init: function () {
        this.el.addEventListener('markerFound', this.onMarkerFound);
        this.el.addEventListener('markerLost', this.onMarkerLost);
    },
    onMarkerFound: function () {
        currentElement = this.querySelector("a-entity");
    },
    onMarkerLost: function () {

    },
});

AFRAME.registerComponent('move-forward', {
    init: function () {

    },
    onMarkerFound: function () {

    },
    tick: function (time, timeDelta) {
        let timeDeltaSeconds = timeDelta / 1000;
        this.el.object3D.position.x += timeDeltaSeconds;
    }
});

AFRAME.registerComponent('register-events-camera', {
    init: function () {

    },
    onMarkerFound: function () {

    },
    tick: function (time, timeDelta) {
        let position = new THREE.Vector3();
        let rotation = new THREE.Euler();
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(rotation);
        console.log(position);
        console.log(rotation);
    }
});

AFRAME.registerComponent('listener', {
    tick: function () {
        let position = new THREE.Vector3();
        let rotation = new THREE.Euler();
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(rotation);
        console.log(position);
    }
});


let currentElement = null;

function appendHtml(el, str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

function save() {
    if (currentElement === null || currentElement === undefined) {
        console.log("No element was found on camera");
        return;
    }
    let scene = document.getElementById('scene');
    let position = new THREE.Vector3();
    let rotation = new THREE.Euler();
    let scale = currentElement.getObject3D('mesh').scale;

    currentElement.object3D.getWorldPosition(position);
    currentElement.object3D.getWorldQuaternion(rotation);

    let attribute = "";
    attribute = attribute + ` gltf-model="${currentElement.getAttribute('gltf-model')}" `;
    attribute = attribute + ` position="${position.x} ${position.y} ${position.z}" `;
    attribute = attribute + ` rotation="${THREE.Math.radToDeg(rotation.x)} ${THREE.Math.radToDeg(rotation.y)} ${THREE.Math.radToDeg(rotation.z)}" `;
    attribute = attribute + ` scale="${scale.x} ${scale.y} ${scale.z}" `;

    appendHtml(scene, `<a-entity ${attribute} animation-mixer shadow="cast: true; receive: true;"></a-entity>`);
}

window.save = save;
