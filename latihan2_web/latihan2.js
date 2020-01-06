function pw() {
    var user = document.fform.user.value;
    var pass = document.fform.pass.value;
    var masuk = 0;

    do {
        if (user == "herdita" & pass == "unikom") {
            alert("Passowrd Benar, Silahkan Klik oke");
            window.open("www.google.com");
            break;
        }
        else
            if (masuk == 3) {
                alert("maaf, kesempatan anda hanya 3 kali");
                break;
            }
            else {
                alert("User atau password anda salah !!!");
                user = prompt("Tuliskan User dengan benar", "");
                pass = prompt("Tuliskan password dengan benar", "");
            }


        masuk = masuk + 1;
        document.fform.user.value = "";
        document.fform.pass.value = "";
    }
    while (masuk <= 3)
}