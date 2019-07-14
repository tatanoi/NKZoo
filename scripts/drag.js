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

AFRAME.registerComponent('markerhandler', {
    schema: {
        entityId: {type: 'string', default: ''}
    },
    init: function () {
        const aEntity = document.querySelector(`#${this.data.entityId}`);
        aEntity.setAttribute('visible', "false");
        this.el.addEventListener('markerFound', function (ev) {
            aEntity.setAttribute('visible', "true");
        });
        this.el.addEventListener('markerLost', function (ev) {
            aEntity.setAttribute('visible', "false");
        });
        this.el.addEventListener('click', function (ev) {
            let intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            let visible = aEntity.getAttribute('visible');
            if (aEntity && intersectedElement === aEntity && visible) {
                targetEl = aEntity;
                console.log(`id=${aEntity.getAttribute('id')} | visible=${aEntity.object3D.visible}`);
            }
        });
    }
});


