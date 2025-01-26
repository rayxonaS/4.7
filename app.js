//if 1
//Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

//let son = +prompt("Son kiriting");
//if (son > 0) {
//console.log(son + 1);
//} else {
//console.log(son - 2);
//}

//if 2
//Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//let manfiy = 0;
//let musbat = 0;
//if (a > 0) {
//musbat++;
//} else {
//  manfiy++;
//}
//if (b > 0) {
//musbat++;
//} else {
// manfiy++;
//}
//if (c > 0) {
//musbat++;
//} else {
//manfiy++;
//}
//console.log("Musbat sonlar:", musbat);
//console.log("Manfiy sonlar:", manfiy);

//if 3
//Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//if (a > b && a > c) {
//console.log(" a soni katta");
//} else if (b > c && b > a) {
//console.log("b soni katta");
//} else {
//console.log(" c soni katta");
//}
//if (a < b && a < c) {
//console.log(" a soni kichik");
//} else if (b < c && b < a) {
//console.log("b soni kichik");
//} else {
// console.log(" c soni kichik");
//}

//if 4
//Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//if (a == b) {
//console.log("tartib raqam:", 3);
//} else if (a == c) {
// console.log("tartib raqam:", 2);
//} else if ( c == b) {
//console.log("tartib raqam:", 1);
//}

//if 5
//x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
//agar x < -2 yoki x > 2 bo’lsa 2 * x
//aks holda -3 * x;

//let x = +prompt("Son kiriting");
//if (x < -2 || x > 2) {
//console.log(2 * x);
//} else {
//console.log(-3 * x);
//}

//if 6
//Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.

//let son = +prompt("Son kiriting");
//if (son > 0 && son % 2 == 0) {
//console.log("musbat juft");
//} else if (son > 0 && son % 2 == 1) {
//console.log("musbat toq");
//}
//if (son < 0 && son % 2 == 0) {
//console.log("manfiy juft");
//} else if (son < 0 && son % 2 == 1) {
//console.log("manfiy toq");
//}
//if (son == 0) {
//console.log("nol");
//}

//if 7
//Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

//let son = +prompt("Son kiriting");
//if (son > 0) {
//console.log(son + 1);
//} else {
//console.log(son);
//}

//if 8
//Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. Agar 0 ga teng bo`lsa, 10 ni //o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

//let son = +prompt("Son kiriting");
//if (son > 0) {
//console.log(son + 1);
//} else if (son == 0) {
//console.log(son + 10);
//} else {
//console.log(son - 2);
//}

//if 9
//Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//counter = 0;
//if (a > 0) {
//counter++;
//}
//if (b > 0) {
//counter++;
//}
//if (c > 0) {
//counter++;
//}
//console.log("Musbat sonlar:", counter);

//if 10
//Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//if (a > b) {
//console.log("a soni katta");
//} else {
//console.log("b soni katta");
//}

//if 11
//Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//if (a > b) {
//console.log("tartib raqami:", 2);
//} else {
//console.log("tartib raqami:", 1);
//}

//if 12
//Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//if (a > b) {
//console.log(a);
//console.log(b);
//} else {
//console.log(b);
//console.log(a);
//}

//if 13
//A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let equal = a;
//if (b > a) {
//a = a;
//b = b;
//} else {
// a = b;
//b = equal;
//}
//console.log(a, b);

//if 14
//A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//if (a == b) {
//a = 0;
//b = 0;
//} else {
//a = b + a;
//b = a;
//}
//console.log(a, b);

//if 15
//A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//if (a == b) {
//a = 0;
//b = 0;
//} else if( a > b) {
//a = a;
//b = a;
//} else {
//a = b;
//b = b;
//}
//console.log(a, b);

//if 16
//Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//if (a > b) {
//console.log(" b soni kichik");
//} else if (b > c) {
//console.log("c soni kichik");
//} else {
// console.log(" a soni kichik");
//}

//if 17
//Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//if (a > b && a < c || a < b && a > c) {
//console.log(" a soni o'rtacha");
//} else if (b > a && b < c || b < a && b > c) {
//console.log("b soni o'rtacha");
//} else {
// console.log(" c soni o'rtacha");
//}

//if 18
//Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//ab = a + b;
//ac = a + c;
//bc = b + c;
//if (ab > ac && ab > bc) {
//console.log("ab yig'indisi katta");
//} else if (ac > ab && ac > bc) {
//console.log("ac yig'indisi katta");
//} else {
//console.log("bc yig'indisi katta");
//}

//if 19
// A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//let A = -a;
//let B = -b;
//let C = -c;
//if (a < b) {
//console.log(a * 2);
//} else {
// console.log(A);
//}
//if (b < c) {
// console.log(b * 2);
//} else {
//console.log(B);
//}
//if (c > b) {
//console.log(c * 2);
//} else {
// console.log(C);
//}

//if 20
//A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//let A = -a;
//let B = -b;
//let C = -c;
//if (a !== b) {
//console.log(a * 2);
//} else {
//console.log(A);
//}
//if (b !== c) {
// console.log(b * 2);
//} else {
//console.log(B);
//}
//if (c !== b) {
//console.log(c * 2);
//} else {
//console.log(C);
//}

//if 21
//To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

//let a = +prompt("Son kiriting");
//let b = +prompt("Son kiriting");
//let c = +prompt("Son kiriting");
//let d = +prompt("Son kiriting");
//if (a == b && b == c) {
//console.log("tartib raqam:", 4);
//} else if (a == b && b == d) {
// console.log("tartib raqam:", 3);
//} else if (a == c && c == d) {
//console.log("tartib raqam:", 2);
//} else if (c == b && d == c) {
//console.log("tartib raqam:", 1);
//}

//if 22
//x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
//agar x≤ 0 bo’lsa -x;
//agar 0<x<2; x^2
//agar x≥2 bo’lsa 4

//let x = +prompt("Son kiriting");
//if (x <= 0) {
//console.log(-x);
//}
//if (x > 0 && x < 2) {
//console.log(x ** 2);
//}
//if (x >= 2) {
//console.log(4);
//}

//if 23
//Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

//if 24
//1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

//let son = +prompt("Son kiriting");
//if (son >= 10 && son < 100 && son % 2 == 0) {
//console.log(" ikki xonali juft");
//} else if (son >= 10 && son < 100 && son % 2 == 1) {
// console.log("ikki xonali  toq");
//}
//if (son >= 100 && son <= 999 && son % 2 == 0) {
//console.log("uch xonali  juft");
//} else if (son >= 100 && son <= 999 && son % 2 == 1) {
//console.log("uch xonali  toq");
//}
//if (son >= 1 && son <= 9 && son % 2 == 0) {
//console.log("bir xonali juft");
//} else if (son >= 1 && son <= 9 && son % 2 == 1) {
//console.log("bir xonali toq");
//}

//case 1
//1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)

//const day = +prompt("Son kiriting");

//switch (day) {
//case 1:
//console.log("1-Dushanba");
//break;
//case 2:
//console.log("2-Seshanba");
//break;
//case 3:
//console.log("3-Chorshanba");
///break;
//case 4:
//console.log("4-Payshanba");
//break;
//case 5:
// console.log("5-Juma");
//break;
//case 6:
// console.log("6-Shanba");
//break;
//case 7:
//console.log("7-Yakshanba");
// break;
//default:
//console.log("Unday kun mavjud emas")
//}

//case 2
//A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.

//const operator = prompt("Operator kiriitng");
//const a = +prompt("Son kiriting");
//const b = +prompt("Son kiriting");
//switch (operator) {
//case "+":
//console.log(a + b);
//break;
//case "-":
// console.log(a - b);
// break;
//case "*":
//console.log(a * b);
//break;
//case "/":
// console.log(a / b);
// break;
//default:
//console.log("Unday operator yo'q")
//}

//case 3
//Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

//case 4
//K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

//const K = +prompt("Son kiriting");
//switch (day) {
//case 1:
//console.log("1-yomon");
//break;
//case 2:
//console.log("2-qoniqarsiz");
//break;
//case 3:
//console.log("3-qoniqarli");
///break;
//case 4:
//console.log("4-yaxshi");
//break;
//case 5:
// console.log("5-a'lo");
//break;
//default:
//console.log("Xato")
//}

//case 5
//Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

//const oy = +prompt("Son kiriting");

//switch (oy) {
//case 1:
//case 2:
//case 12:
//console.log("Qish");
//break;
//case 3:
//case 4:
//case 5:
//console.log("Baxor");
//break;
//case 6:
//case 7:
//case 8:
//console.log("Yoz");
//break;
//case 9:
//case 10:
//case 11:
//console.log("Kuz");
//break;
//default:
// console.log("Unday fasl mavjud emas");
//}

//case 6
//Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

//const oy = +prompt("Son kiriting");
//switch (oy) {
//case 1:
//case 3:
//case 5:
//case 7:
//case 8:
//case 10:
//case 12:
//console.log("31 kun");
//break;
//case 4:
//case 6:
//case 9:
//case 11:
// console.log("30 kun");
// break;
//case 2:
//console.log("28 kun yoki 29 kun");
//break;
//default:
//console.log("Unday oy mavjud emas");
///}

//case 7
//Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.
