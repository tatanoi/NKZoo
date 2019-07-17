const PERCENT_BTN_TO_SCREEN = 0.12;

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
  let dialog = document.querySelector(".modal");
  dialog.style.display = "block";


  window.resetButtonSize();
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

  window.const_scale = small;

  var modal = document.querySelector(".modal");
  modal.style.marginTop = (small*1.1).toString() + "px";

  var btns = document.querySelectorAll(".btn-circle");
  for(let i = 0; i <btns.length; ++i) {
    btns[i].style.width = small.toString() + "px";
    btns[i].style.height = small.toString() + "px";
    btns[i].style.borderRadius = (small / 2.5).toString() + "px";
    btns[i].style.padding = (small / 6.67).toString() + "px";
  }


  modal = document.querySelector(".dropdown");
  modal.style.borderRadius = (small / 2.5).toString() + "px";

  var btn = document.querySelector("#btnPattern");
  btn.style.width = small.toString() + "px";
  btn.style.height = small.toString() + "px";

  // btn = document.querySelector(".dropdown-toggle::after");
  // btn.style.backgroundSize = small.toString() + "px " + small.toString() + "px";
  //



  small /= 1.143;
  var btnis = document.querySelectorAll(".btn-circle img");
  for(let i = 0; i <btnis.length; ++i) {
    btnis[i].style.width = small.toString() + "px";
    btnis[i].style.height = small.toString() + "px";
    btnis[i].style.borderRadius = (small / 2.5).toString() + "px";
  }


  btnis = document.querySelectorAll(".modal-body img");
  for(let i = 0; i < btnis.length; ++i) {
    btnis[i].style.width = small.toString() + "px";
    btnis[i].style.height = small.toString() + "px";
    btnis[i].style.borderRadius = (small / 2.5).toString() + "px";
    btnis[i].style.marginRight = (small/5.0).toString() + "px";
    btnis[i].style.marginBottom = (small/5.0).toString() + "px";
    btnis[i].style.marginLeft = (small/5.0).toString() + "px";
  }

  small /= 2.5;
  var txts = document.querySelectorAll("p");
  for(let i = 0; i < txts.length; ++i) {
    txts[i].style.fontSize = small.toString() + "px";
  }

  txts = document.querySelector(".modal-title");
  txts.style.fontSize = small.toString() + "px";

  txts = document.querySelector("#close-btn");
  txts.style.fontSize = small.toString() + "px";
};



window.initForButton();
//
