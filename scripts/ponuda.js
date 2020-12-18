$(document).ready(function(){
    $("a").click(function(){
        var url = $(this).attr('href');
        if( confirm("Da li ste sigurni da zelite da napustite stranicu?")){
            document.location.href = url;
        }else{
            return false;
        }
       
    });
  });