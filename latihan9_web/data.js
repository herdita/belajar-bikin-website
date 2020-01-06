function proses(form) {
    var strnama = document.fform.nama_lengkap.value;
    var strpanggilan = document.fform.panggilan.value;
    var stralamat = document.fform.alamat.value;
    var strsekolah = document.fform.sekolah.value; 
    var strselect = (document.fform.fakultas.value); //function select
    var strmotto = document.fform.motto.value;  // function texarea
    document.zform.znama_lengkap.value = strnama;
    document.zform.zpanggilan.value = strpanggilan;
    document.zform.zalamat.value = stralamat;
    document.zform.zsekolah.value = strsekolah;
    document.zform.zfakultas.value = strselect;
    document.zform.zmotto.value = strmotto;
}

function radio(form) {
    var ket = "";
    if (form.kelamin[1].checked == true)
    { ket = " Wanita"; }
    else
    { ket = " Pria"; }
    document.zform.zkelamin.value = ket;
}

function checkbox(form) {
    var hobi1 = "";
    var hobi2 = "";
    var hobi3 = "";

    if (form.sport.checked == true) {
        hobi1 = " Sport";
    }
    if (form.games.checked == true) {
        hobi2 = "Games";
    }
    if (form.hunting.checked == true) {
        hobi3 = "Hunting";
    }
    document.zform.zhobi.value = hobi1+' , '+hobi2+' , '+hobi3;
}