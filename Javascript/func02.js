//

function arrForEach( func ){
    let arr = [10, 20,30,40];
    
    for(let i in arr) {
        //i :index 배열기준에서 접근 key
        //arr[i] : 내부에 있는 데이터 (value)
        func(arr[i], i);
    }
}


const innerFunc = (item, index)=>{
    console.log(item + " " + index);
}

// innerFunc(10, 10);
arrForEach(innerFunc);

arrForEach( (a,b) => {
    console.log(a + "-----" + b);
});

const cb = ()=> {
    console.log('callback 함수');
}

cb();

const outCallback = (cb)=> {
    console.log('out callback 실행하거 다 하고');
    cb();
}

//setTimeout( 함수, 시간 ) : 일정시간 이후 함수가 실행이 된다.
//시간이 ms 단위 1000 -> 1초임

setTimeout(
    ()=> {

        console.log('함수실행')
        outCallback(cb);
    }
    ,
    2000
);
//위에 코드는 1초 있다가 저 '함수실행' 을 해라 라는 뜻임.

cb();