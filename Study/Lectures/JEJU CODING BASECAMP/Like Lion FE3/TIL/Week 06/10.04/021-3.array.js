let 과일 = ["사과", "수박", "복숭아", "딸기", "바나나"];
console.log(과일[1]);

let 꺼낸과일 = 과일.pop();    //  맨 마지막 요소를 뺌
console.log(과일);

과일.push("멜론");
console.log(과일);  // [ '사과', '수박', '복숭아', '딸기', '멜론' ]

과일.push(꺼낸과일);
console.log(과일);  // [ '사과', '수박', '복숭아', '딸기', '멜론', '바나나' ]