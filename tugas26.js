// Periksalah apakah Infinity atau Not Infinity dari deret bilangan 
// 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 

function arrayInfinity(){
    let angka = isFinite([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);
    let angkaArray = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  angkaArray.forEach(element => {
    if (angka === true){
        console.log(`angka ${element} YES infinity`)
    }else{
        console.log(`angka ${element} NOT infinity`)
    }
  });

}
arrayInfinity()