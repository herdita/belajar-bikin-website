function menu_pilihan1(){
    var ket = "data16.html";
    location.open(ket);
}



function daftar_tamu(form){
    var strnim = parseFloat(document.form2.nim.value);
    if(isNaN(strnim)){
        {alert("Isi form NIM Anda Salah")}
    }
    document.form2.nim1.value = strnim;
    
    var strnama = (document.form2.nama.value);
    document.form2.nama1.value= strnama;

    var ket = "IF-1";
    if(form.kelas[1].checked == true){
        ket = "IF-2";
    }
    else
        if(form.kelas[2].checked == true){
            Ket = "IF-3";
        }
        else
            if(form.kelas[3].checked == true){
                ket = "IF-4";
            }
            else
                if(form.kelas[4].checked == true){
                    ket = "IF-5";
                }
                else
                    if(form.kelas[5].checked == true){
                        ket = "IF-6";
                    }
    document.form2.kelas1.value = ket;
}