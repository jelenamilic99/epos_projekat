function validacija() {
    
    var inputtxt=document.forms["Forma-Form"]["number"].value;
    var number = /^\d{9}$/;
    if (!(inputtxt.match(number))){

        alert("Morate uneti pravilan broj telefona.");
        return false;
    }

    alert("Uspešno ste poslali svoju prijavu. Očekujte e-mail sa daljim uputstvima.");
    return true;

}

