function DragUtilsClass(props) {
    this.props = props || {};
    this.targetEl = null;
}
let DragUtils = new DragUtilsClass();
let targetEl = DragUtils.targetEl;

//////////////////////////////////////////////////////////////////////////////

let hammertime = new Hammer(document.querySelector('body'));
hammertime.on('pan', (ev) => {
    if (targetEl) {
        let rotation = targetEl.getAttribute("rotation");
        let speed = 10;
        switch(ev.direction) {
            case 2: rotation.y = rotation.y + speed; break;
            case 4: rotation.y = rotation.y - speed; break;
            case 8: rotation.x = rotation.x + speed; break;
            case 16: rotation.x = rotation.x - speed; break;
            default: break;
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
            raycaster.components.raycaster.refreshObjects();
        });
        this.el.addEventListener('markerLost', () => {
            entity.classList.remove('clickable');
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
                    break;
                }
            }
        })
    }
});


