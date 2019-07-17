clickNext = function () {};
clickFinal = function () {};

analyzeDialog = function() {

    document.getElementById("content").innerText = window.txtContent;
    document.getElementById("footer").innerText = window.txtFooter;
    window.s = document.getElementById("sound_player")
    

    if(window.isAbleToNext)
        document.getElementById("btn-start").style.display = "block";
    else {
        document.getElementById("bar").style.display = "none";
        window.stop();
    }

    window.stackDialogs = document.getElementsByName("dialog");
}

window.analyzeDialog();

window.isFirstClick = false;
clickNext = function() {
    var n = window.stackDialogs.length - 1
    var a = window.stackDialogs[n];
    a.parentNode.removeChild(a);
    
    if(n != 0) {
        --n;
        window.stackDialogs[n].style.display = "block";
    }

    if(!window.isFirstClick)
        document.getElementById("sound").play()
}
clickFinal = function() {
    if(window.isDoneLoad)
        window.location = "./webar.html";
}
