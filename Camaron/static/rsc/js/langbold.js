var nombrepath = location.pathname;
var patharray = nombrepath.split('/');
if(patharray[1]=='en'){
    document.getElementById("langSwitch_en").style.fontWeight = "bolder";
}
else if(patharray[1]=='es'){
    document.getElementById("langSwitch_es").style.fontWeight = "bolder";
}
else if(patharray[1]=='cn'){
    document.getElementById("langSwitch_cn").style.fontWeight = "bolder";
}