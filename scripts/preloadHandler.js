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