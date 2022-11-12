/* Lab 1
    Problem
    0 ile 100 arasında inputa giriş yapılan değerin not durumunu hesaplayın
    eğer puan 0 a eşit veya büyük ve 45 ten küçük ise not 1 olur.
    eğer puan 45 a eşit veya büyük ve 55 ten küçük ise not 2 olur.
    eğer puan 55 a eşit veya büyük ve 70 ten küçük ise not 3 olur.
    eğer puan 70 a eşit veya büyük ve 85 ten küçük ise not 4 olur.
    eğer puan 85 a eşit veya büyük ve 100 e eşit veya küçük ise not 5 olur.

    Çözüm
    1. id si puan olan inputun valuesu bir değişkene alınır
    2. sonuc isimli bir değişken oluşturulur
    3. problemdeki koşullar js ile kodlanır. Koşul karar vererek sonuc değişkeninin değerini belirler
    4. id si not olan element yakalanır
    5. sonuc deişkeninin değeri not id li elemente yazdırılır
*/

function notHesapla() {
    let puan = document.getElementById('puan').value;
    let sonuc;
    let notElement = document.getElementById('not');

    if (puan >= 0 && puan < 45) {
        sonuc = 1;
    } else if (puan >= 45 && puan < 55) {
        sonuc = 2;
    } else if (puan >= 55 && puan < 70) {
        sonuc = 3;
    } else if (puan >= 70 && puan < 85) {
        sonuc = 4;
    } else if (puan >= 85 && puan <= 100) {
        sonuc = 5;
    } else {
        notElement.innerHTML = "<span style='color:red;'>Hatalı değer girdiniz!.</span>";
        return;
    }

    notElement.innerHTML = "Notunuz : " + sonuc;
}

//Lab 2
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Coder' && password == '123') {
        document.getElementById('message').innerHTML =
            "<p style='color:green;'>Giriş Başarılı</p>";
    } else {
        document.getElementById('message').innerHTML =
            "<p style='color:red;'>Giriş Başarısız</p>";
    }
}

//Lab 3
/* function findDay() {
    let userDay = document.getElementById('day').value;
    let resultArea = document.getElementById('result');

    //girilen değer hafta içi mi? Hafta sonu mu?
    switch (userDay) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            resultArea.innerText = "Hafta içi";
            break;
        case "6":
        case "7":
            resultArea.innerText = "Hafta sonu";
            break;
        default:
            resultArea.innerText = "Geçersiz bir değer girdiniz.";
            break;
    }



    //Girilen değer haftanın hangi günü

    // switch (userDay) {
    //     case "1":
    //         resultArea.innerText = "Pazartesi";
    //         break;
    //     case "2":
    //         resultArea.innerText = "Salı";
    //         break;
    //     case "3":
    //         resultArea.innerText = "Çarşamba";
    //         break;
    //     case "4":
    //         resultArea.innerText = "Perşembe";
    //         break;
    //     case "5":
    //         resultArea.innerText = "Cuma";
    //         break;
    //     case "6":
    //         resultArea.innerText = "Cumartesi";
    //         break;
    //     case "7":
    //         resultArea.innerText = "Pazar";
    //         break;
    //     default:
    //         resultArea.innerText = "Geçersiz bir değer girdiniz.";
    //         break;
    // }

    //ÖDEV : LAB 3 içindeki 2 switch bloğununda if-else versiyonunu yazınız.
}
*/

function findDay(){
    var userDay = document.getElementById('day').value;
    var resultArea = document.getElementById('result');
    var foundDay;

    if(userDay == 1){
        foundDay = "Pazartesi";
    }else if(userDay == 2){
        foundDay ="Salı";
    }else if(userDay == 3){
        foundDay ="Çarşamba";
    }else if(userDay == 4){
        foundDay ="Perşembe";
    }else if(userDay == 5){
        foundDay ="Cuma";
    }else if(userDay == 6){
        foundDay ="Cumartesi";
    }else if(userDay == 7){
        foundDay ="Pazar";
    }else{
        resultArea.innerHTML = "Geçersiz bir değer girdiniz.";
           return;
    }

    resultArea.innerHTML = "Bugün günlerden: " + foundDay;





}

//JSON : Javascript Object Notation
//JSON Nedir?
//HTML 5 Local ve Session Storage