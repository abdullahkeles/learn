var number=15.123456789;
//toplamda üç basamaklı sayı
console.log(number.toPrecision(3));

//ondalık basamağını üç basamka ile sınırla
console.log(number.toFixed(3));

//en yakın sayıya yuvarla
console.log(Math.round(number));

//aşağı yuvarla
console.log(Math.floor(number));

//YUKARI yuvarla
console.log(Math.ceil(number));

// 1,2,10,56,20 en küçük ve büyük
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

//sayı aralığını kullanıcının belirleyeceği rastgele sayı üretin.
var rmin=100;
var rmax=199; ``
console.log(Math.floor(Math.random()*(rmax-rmin)+rmin));