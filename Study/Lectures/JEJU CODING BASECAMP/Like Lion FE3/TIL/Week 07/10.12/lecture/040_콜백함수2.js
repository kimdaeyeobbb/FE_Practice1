

let arr1 = [10, 20, 30, 40, 50]
arr1.map(제곱)  // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨 
arr1.map(x => x ** 2)  // (5) [100, 400, 900, 1600, 2500] (화살표 함수 사용)\

/* 호이스팅 */
function 제곱(x) {
    return x ** 2
}     