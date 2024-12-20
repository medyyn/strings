// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.
// let number = Number(prompt("Zəhmət olmasa, ikirəqəmli bir ədəd daxil edin"));

// if (number >= 10 && number <= 99) {
//     for (let i = number; number < 100; number += 7) {
//     }
//     console.log(`Son dəyər , ${number}`);
// } else {
//     console.log("Daxil edilən ədəd ikirəqəmli deyil.");
// }


// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.
// const n = Number(prompt("Zəhmət olmasa bir rəqəm daxil edin."))
// let i = 1
// while (i <= n){
//     document.write(i + " .I know how to use cycles <br/>")
//     i++
// }


// 3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
// const fullName = prompt("Zəhmət olmasa tam adınızı 'ad soyad' şəklində daxil edin");
// const nameParts = fullName.trim().split(" ");

// if (nameParts.length === 2) {
//     const firstName = nameParts[0];
//     const lastName = nameParts[1];
//     document.write(`${lastName} ${firstName}`);
// } else {
//     console.log("Zəhmət olmasa tam adınızı düzgün şəkildə daxil edin 'ad soyad'.");
// }



// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın
// function capitalizeFirstLetter(String) {
//     if (typeof String !== "string" || String.length === 0) {
//         return "Zəhmət olmasa, düzgün bir mətn daxil edin.";
//     }
//     let capitalizedString = String.charAt(0).toUpperCase() + String.slice(1);
//     return capitalizedString;
// }

// document.write(capitalizeFirstLetter("salam <br/>"));
// document.write(capitalizeFirstLetter(""));


// 8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın
// function convertToUpperCase(String) {
//     if (typeof String !== "string" || String.length === 0) {
//         return "Zəhmət olmasa, düzgün bir mətn daxil edin.";
//     }
//     let upperCaseString = String.toUpperCase();
//     return upperCaseString;
// }

// document.write(convertToUpperCase("salam <br/>"));
// document.write(convertToUpperCase("hello world <br/>"));
// document.write(convertToUpperCase(""));


// 9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın
// function convertToUpperCase(String) {
//     if (typeof String !== "string" || String.length === 0) {
//         return "Zəhmət olmasa, düzgün bir mətn daxil edin.";
//     }
//     let upperCaseString = String.toLowerCase();
//     return upperCaseString;
// }

// document.write(convertToUpperCase("SALAM <br/>"));
// document.write(convertToUpperCase("HELLO <br/>"));
// document.write(convertToUpperCase(""));


// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara
// function ilkHerfiDeyis(soz, ilkHerf) {
//     if (typeof soz !== "string" || typeof ilkHerf !== "string" || soz.length === 0 || ilkHerf.length === 0) {
//         return "Zəhmət olmasa, düzgün parametrlər daxil edin.";
//     }
//     let yeniSoz = ilkHerf + soz.slice(1);
//     return yeniSoz;
// }

// document.write(ilkHerfiDeyis('Qara', "Y"), "<br/>");
// document.write(ilkHerfiDeyis('Senan', "K"), "<br/>");
// document.write(ilkHerfiDeyis('hello', ""));


// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin
// function nameFormat(str) {
//     let nameParts = str.split(" ");
//     if (nameParts.length !== 2) {
//         return "Zəhmət olmasa, düzgün formatda ad və soyad daxil edin.";
//     }
//     let firstName = nameParts[0];
//     let lastName = nameParts[1];
//     let lastNameInitial = lastName.charAt(0).toUpperCase() + ".";
//     return `${lastNameInitial} ${firstName}`;
// }
// console.log(nameFormat("Ramin Mammadzada"));
// console.log(nameFormat("Həmidova Mədinə"));
// console.log(nameFormat("Nərgiz"));


// 13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın
// function isAllUpperCase(str) {
//     return str === str.toUpperCase();
// }
// console.log(isAllUpperCase("HELLO"));
// console.log(isAllUpperCase("Hello"));


// 14. Funksiya yazın.Cümlə alacaq parametr olaraq.Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq
// function ilkBesHerf(sentence) {
//     return sentence.slice(0, 5);
// }
// document.write(ilkBesHerf("medine oyun oynama"), "<br/>");
// document.write(ilkBesHerf("jet academynin baliglari"), "<br/>");
// document.write(ilkBesHerf("nergiz"), "<br/>");
// document.write(ilkBesHerf("M"));


// 15. Funksiya yazın.Parametr alsın.Sözün içərisində nəqədər boşluq varsa hamsı - işarəsi olsun