let brands=["bmw","mercedes","audi","honda","fiat","subaru"];

//dizi kaç elmanlı
console.log(brands.length);

//dizinin ilk ve son elamanı
console.log(brands[brands.length-1]);
console.log(brands[0]);

//unshift dizinin başına elman ekler
brands.unshift("toyat");
//push dizinin sonuna elamen eklr
brands.push("renault");
console.log(brands);

//splice dizinin herhangi bir elemanını siler
brands.splice(brands.indexOf("renault"),1);
brands.splice(brands.indexOf("toyat"),1);
console.log(brands);
function fnUpperCase(val){
    return val.toUpperCase();
}

//map() , dizinin her elemanı için, parametre 
//olarak verilen fonksiyonu çağırır 
//ve oluşan sonuçlarla da yeni bir dizi oluşturur.
var capitalizeArray=brands.map((yy) => {
    yy+=" brand";
    return yy.toUpperCase();
});
console.log(capitalizeArray);

// join() metodu bir array içerisinde yer alan bütün elemanları birleştirerek string bir ifade olarak geri döndürür.
//  (veya array benzeri bir obje olarak) Elemanlar varsayılan olarak virgül ile ayıracı ile ayrılır.
//   İsteğe bağlı olarak elementleri birbirinden ayırmak için farklı ayıraçlar da kullanılabilir

console.log(brands.join());
console.log(brands.join(''));
console.log(brands.join('-'));

// includes() metodu bir dizinin belirli bir elemanı içerip içermediğini belirler, 
// içeriyorsa true içermiyorsa false değeri döndürür. 
// Aranan öğenin bulunup bulunmadığını belirlemek için sameValueZero algoritmasını kullanır.
//t-includes içermek,içerir,kapsamak
console.log(brands.includes("bmw"));
console.log(brands.includes("fiat"));
console.log(brands.includes("tofaş"));

// reduce() fonksiyonu, data dizisinin her bir elemanı kadar reducer fonksiyonunu çağırır. 
// Bu işlemin sonucunu kümülatif olarak hesaplar.
// Yapılan her işlemin sonucu bir sonraki fonksiyon çağırımına ilk parametre olarak aktarılır.
let numbers=[1,2,3,4,5];
var total=numbers.reduce((a,b)=> a+b);
console.log(total);
var multiplication=numbers.reduce((a,b)=> a*b);
console.log(multiplication);

// some() fonksiyonu, herhangi bir dizide yer alan elemanlardan 
// en az bir tanesinin sağlanan koşulu geçip geçmediğini kontrol eder.

var isThreeBigger=numbers.some((el)=> el>3);
console.log(isThreeBigger);

//concat() metodu eklendigi dizi ile parametre olarak aldığı dizi(leri) birleştirerek yeni bir dizi döndürür.
var margeArray=numbers.concat(brands);
console.log(margeArray);