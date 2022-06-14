/*
hoisting : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
var로 선언한 변수 : 호이스팅시 undefined로 변수 초기화
let, const로 선언한 변수 : 호이스팅시 변수를 초기화하지 않음

호이스팅 : 변수의 선언과 초기화를 분리한 다음, 선언만 코드의 최상단으로 옮기는 것
따라서 변수를 정의하는 코드보다 사용하는 코드가 앞서 등장할 수 있다.
다만 선언과 초기화를 함께 수행하는 경우, 선언 코드까지 실행해야 변수가 초기화된 상태가 된다.

*/

/* JS는 함수의 코드를 실행하기 전에 함수 선언에 대한 메모리부터 할당한다.
덕분에 함수를 호출하는 코드를 함수 선언보다 앞서 배치할 수 있다. */
// 비교군1 : 일반적 코드 작성
function catName(name) {
  console.log('제 고양이 이름은 ' + name + '입니다.');
}

catName('호랑이');

// 비교군2: 함수 선언전에 호출을 먼저하는 경우
// 함수 호출이 함수 자체보다 앞서 존재하나, 정상적으로 동작함
callName2('사자');

function callName2(name) {
  console.log('제 고양이 이름은 ' + name + '입니다.');
}
