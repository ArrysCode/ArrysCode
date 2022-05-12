document.oncontextmenu=function (){
    return false;
}

function right (e){
var msg="Command is  Blocked!";
if (navigator.appName == 'Netscape' && e.which == 3){
alert (msg);
}
else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2){
alert (msg);
return false;
}
return true;
}
document.onmousedown=right;