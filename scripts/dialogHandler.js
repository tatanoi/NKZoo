analyzeDialog = function() {
    if(window.isAbleToNext)
        document.getElementById("btn-start").style.display = "block";

    document.getElementById("content").innerText = window.txtContent;
    document.getElementById("footer").innerText = window.txtFooter;

    window.stackDialogs = document.getElementsByName("dialog");
}

window.analyzeDialog();

clickNext = function() {
    var a = window.stackDialogs[window.stackDialogs.length - 1];
    a.parentNode.removeChild(a);
}
clickFinal = function() {
    window.location = "./webar.html";
}