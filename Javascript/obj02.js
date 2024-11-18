//obj02.js 2024-11-18

let scores = [10, 30, 50, 40];

//for 반복문

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for (String item : stringArr)

for(let i in scores){
    console.log(i+ ' ' + scores[i]);
}

//for of
//item value score
for(let item of scores){ // for(String item : stringArr)
    console.log(item);
}

//forEach
scores.forEach( (item, index)=>{
    console.log(item + ' ' + index);
});