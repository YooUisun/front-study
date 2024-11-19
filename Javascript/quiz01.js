// 모닝퀴즈 2024-11-19

// 아래 요구조건에 알맞는 함수를 작성하세요.
// 작성된 함수를 다양한 입력값으로 호출하고 그 결과를 출력하는 코드를 작성하세요.

// ※Javascript 에서 함수를 작성하는 여러가지 방식으로 다양하게 작성해보기

// 함수명 : getMealByTime
// 매개변수 : 현재 시간
// ※단, 시간은 0시~24시 기준으로 사용
// ex) 오후 2시 -> 14시
// 반환값 : 해당 시간에 해야하는 식사 구분

// *위 함수는 매개변수 있음, return 값 있음.

// 매개변수 시간별 조건에 따른 반환 값.

// 6시~10시 : 아침
// 11시~14시 : 점심
// 17시~20시 : 저녁
// 21시~23시 : 야식
// 위에 해당하지 않는 시간 : 금식

//------------------------------------------------------------
// 1번째 방법.

// function getMealByTime(time){

// }

// 2번째 방법

// const getmealByTime = function(time){

// } 

// 3번째 방법.

// const getMealByTime = function func(time){

// }

// 4번째 방법

// const getMealByTime = (time)=> {

// }

//선언하는 방법은 4개나 있다.
//------------------------------------------------------------

function getMealByTime(time) {
    if (typeof time !== 'number' || time < 0 || time > 24) {
        return "다시 입력해주세요";
    }
 
    if (time >= 6 && time <= 10) {
        return "아침";
    } else if (time >= 11 && time <= 14) {
        return "점심";
    } else if (time >= 17 && time <= 20) {
        return "저녁";
    } else if (time >= 21 && time <= 23) {
        return "야식";
    } else {
        return "금식";
    }
}
console.log(getMealByTime(5));  // 금식
console.log(getMealByTime(8));  // 아침
console.log(getMealByTime(13)); // 점심
console.log(getMealByTime(16)); // 금식
console.log(getMealByTime(19)); // 저녁
console.log(getMealByTime(22)); // 야식
console.log(getMealByTime(2));  // 금식





let arr1 = [10, '20', 30];
let arr2 = [10, '20', 30];
let arr3 = [10, 20, 30];
let arr4 = ['10', '20', '30'];

const compareArr = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i] == arr2[i]); // 요소가 같은지 비교
    }
};

console.log('비교 1');
compareArr(arr1, arr2);
console.log('비교 2');
compareArr(arr1, arr3);
console.log('비교 3');
compareArr(arr3, arr4);
console.log('비교 4');
compareArr(arr2, arr4);



const personInfo = {
    name: "홍길동",
    age: 25,
    phone: "010-1234-5678",
    engName: "John Smith",
    nickname: " 복습마왕 "
};

console.log('변경 전');
console.log(personInfo);

// 변환 작업
// personInfo.phone = personInfo.phone.split('-');         // 전화번호를 배열로 변환
// personInfo.engName = personInfo.engName.toUpperCase(); // 영어 이름을 대문자로 변환
// personInfo.nickname = personInfo.nickname.trim();     // 별칭의 공백 제거

//------------------------------------------------------------------
//이렇게 변환을 할 수도 있음.
// personInfo.phone = ["010", "1234", "5678"];
// personInfo.engName = "JOHN SMITH";
// personInfo.nickname = "복습마왕";
//----------------------------------------------------------------------
personInfo.phone = personInfo.phone.split("-");
// personInfo.phone = [personInfo.phone.substring(0,3), personInfo.phone.substring(4,8), personInfo.phone.substring(9,13)];
personInfo.engName = personInfo.engName.toUpperCase();
personInfo.nickname = personInfo.nickname.trim();
//trim 공백제거 함수

console.log('변경 후');
console.log(personInfo);
