const lstIOS = ["safari"];
const lstAndroid = ["chrome", "opera", "firefox", "samsung internet"];

window.isAbleToNext = false;
window.txtContent = "";
window.txtFooter = "";


// content += "<p> name: " + platform.name; // 'Safari'
// content += "</p><p> version: " + platform.version; // '5.1'
// content += "</p><p> product: " + platform.product; // 'iPad'
// content += "</p><p> manufacturer: " + platform.manufacturer; // 'Apple'
// content += "</p><p> layout: " + platform.layout; // 'WebKit'
// content += "</p><p> os family: " + platform.os.family; // 'iOS 5.0'

firstPass = function() {
    switch(platform.os.family.toLowerCase())
    {
        case "ios":
            window.handleIOS();
            break;
        case "android":
            window.handleAndroid();
            break;
        default:
            window.handleOther();
            break;
    }
}

handleIOS = function() {
    if(window.isStringInList(platform.name, lstIOS)) {
        window.handleOther();
    }
    else {
        window.txtContent = "Rất tiếc, vì tính năng bảo mật, trình duyệt này không được phép sử dụng camera trên thiết bị này. Bạn vui lòng sử dụng trình duyệt sau:" +
        " Safari";
    }
}

handleAndroid = function () {
    window.txtFooter = "Vận hành tốt nhất trên trình duyệt Cốc Cốc"

    if(window.isStringInList(platform.name, lstAndroid)) {
        window.handleSpecificAndroid();
    }
    else {
        window.txtContent = "Rất tiếc, vì tính năng bảo mật, trình duyệt này không được phép sử dụng camera trên thiết bị này. Bạn vui lòng sử dụng một trong các trình duyệt sau:" +
        " Cốc Cốc, Google Chrome, Opera, Mozilla Firefox, Samsung Internet";
    }
}

handleSpecificAndroid = function() {
    if(platform.product == null) {
        window.handleOther();
        return;
    }
    switch(platform.product.toLowerCase())
    {
        case "nokia 5.1":
                txtContent = "Chào mừng bạn đến với ứng dụng Web AR NK's Zoo. Hãy chắc chắn rằng bạn đang sử dụng trình duyệt Cốc Cốc trên thiết bị này.";
            window.handleOther();
            break;
        default:
            window.handleOther();
            break;
    }
}


handleOther = function () {
    if(window.txtContent == "") {
        window.txtContent = "Chào mừng bạn đến với ứng dụng Web AR NK's Zoo";
    }

    this.isAbleToNext = true;    
}

clickNext = function () {

}

// support area
isStringInList = function(str, lst) {
    str = str.toLowerCase();
    var result = false;
    for(let i = 0; i < lst.length; ++i) {
        if(str.indexOf(lst[i]) != -1)
            result = true;
    }

    return result;
}


window.firstPass();