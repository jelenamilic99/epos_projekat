window.close = function(){
    if(confirm("Da li zelite da napustite sajt?")){
        close();
    } else{
        return false;
    }
}