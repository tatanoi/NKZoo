const PERCENT_BTN_TO_SCREEN = 0.02;

initMain = function() {
    // window.initAutoScaleCenterGLTF();

    // if(window.initSound) {
    //   window.initSound();
    // }
};

initAutoScaleCenterGLTF = function() {
  // AFRAME.registerComponent('kscale', {
  //   schema: {type: 'number', default: 1},
  //   init: function () {
  //     this.scale();
  //     this.el.addEventListener('object3dset', () => this.scale());
  //   },
  //   scale: function () {
  //     const el = this.el;
  //     const span = this.data;
  //     const mesh = el.getObject3D('mesh');
  //
  //     if (!mesh) return;
  //
  //     // Compute bounds.
  //     const bbox = new THREE.Box3().setFromObject(mesh);
  //
  //     // Normalize scale.
  //     const scale = span / bbox.getSize().length();
  //     mesh.scale.set(scale, scale, scale);
  //   },
  // });
};

// buttonInit = function() {
//   window.btnPlay = document.getElementById("btn_p");
//   window.btnStop = document.getElementById("btn_s");
// };


// AFRAME.registerComponent("done_camera", {
//   init: function () {
//     setTimeout(() => {
//       window.resetButtonSize();
//     }, 5000);
//   }
// });
//
loadComplete = function() {
  // this is loaded
  window.resetButtonSize();
  let dialog = document.querySelector(".modal");
  dialog.style.display = "block"
};

initForButton = function() {
  AFRAME.registerComponent('btncheck', {
    init: function () {
      this.el.addEventListener('object3dset', () => setTimeout(window.loadComplete, 500));
    }
  });
};

// hàm này đã dc gọi tới, giờ xử lý nữa thôi
resetButtonSize = function() {
  var small = window.innerWidth < window.innerHeight? window.innerWidth : window.innerHeight;
  small *= PERCENT_BTN_TO_SCREEN;

  //  gán size của mấy button trong web ar giúp mình nha tks
  // window.btnPlay.style.width = "" + small + "px";
  // window.btnPlay.style.height = "" + small + "px";
  // window.btnStop.style.width = "" + small + "px";
  // window.btnStop.style.height = "" + small + "px";

  alert("size updated!");
};
//

window.initForButton();
//
