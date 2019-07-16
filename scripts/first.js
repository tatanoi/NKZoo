var content = "";

content += "<p> name: " + platform.name; // 'Safari'
content += "</p><p> version: " + platform.version; // '5.1'
content += "</p><p> product: " + platform.product; // 'iPad'
content += "</p><p> manufacturer: " + platform.manufacturer; // 'Apple'
content += "</p><p> layout: " + platform.layout; // 'WebKit'
content += "</p><p> os family: " + platform.os.family; // 'iOS 5.0'

document.write("</p> Chào mừng!" + content);