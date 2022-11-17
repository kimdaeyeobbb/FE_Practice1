// 문제 input창 3개 만들어서 자기소개하는 기능 만들기
// input1-이름, inpu2-성별, input3- 나이, button-자기소개, return- 제 이름은 Danny입니다. 저는 남자이고요. 나이는 10살입니다.
//
import { useState, useRef } from "react";

export default function App() {
  const 이름 = useRef(null);
  const 성별 = useRef(null);
  const 나이 = useRef(null);
  const [자기소개, set자기소개] = useState("");

  const handle자기소개 = (e) => {
    // set자기소개(이름.current.value + 성별.current.value + 나이.current.value);
    set자기소개(
      ` 
      제 이름은 ${이름.current.value} 
      제 성별은 ${성별.current.value} 
      제 나이는 ${나이.current.value}`
    );
  };

  return (
    <div>
      <input type="text" ref={이름} />
      <input type="text" ref={성별} />
      <input type="text" ref={나이} />
      <button onClick={handle자기소개}>자기소개</button>
      {자기소개}
    </div>
  );
}
