//func03.js  2024-11-18

function fff(){
    console.log(1);
    console.log(2);
    //return;
    console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = () => { // 화살표 함수 arrow
    console.log(4);
    console.log(5);
    return 6;
}

console.log(af());

const af2 = ()=>1+2+3+4;

//  () => 7;
//  () => { return 7; }

console.log(af2());


// function scope1(){
//     let x = 10;
// }
// // console.log(x);

// if(true){
//     let y = 300;
// }

// console.log(y);

let z= 300;

if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
}

scope2();

/*
for(){
    if(){

    }
}
*/

{       //scope 영역
    let qqq = 100;
}

// console.log(qqq);


ccc = 3000;
var ccc;

// dd = 30;
// let dd;
// console.log(dd);

console.log(ccc);

check();
function check(){ //호이스팅 선언부를 위로 올려줌
    console.log('check');
}
check();


(function(){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();


// oneuse();