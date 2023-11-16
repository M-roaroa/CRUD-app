import React from 'react'

export default function InputField({
  setCalcData,
  titlevalue,setTitleValue,
  costvalue, setCostValue,
  /*showAlert*/setShowAlert }) {

   // 지출 항목 입력
   const changeTitle = (e) => {
    setTitleValue(e.target.value);
  } 
  // 비용 입력
  const changeCost = (e) => {
    setCostValue(e.target.value);
  }

  // 제출 기능
  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 지출 데이터
    let newCalc = {
      id : Date.now(),
      title : titlevalue,
      price : costvalue
    }

    // 원래 있던 지출 내역에 새로운 지출 내역 추가
    setCalcData((prev) => [...prev, newCalc]);

    // 입력한 값 넣어주기
    setTitleValue("");
    setCostValue("");

    // alert 창 표시
    setShowAlert({
      show: true,
      message: "지출 내역이 생성되었습니다."
    });
    // 1초 후에 alert 창 숨기기
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }

  return (
  <div>
    <div className="contents-top">
      <div className="spending">
      지출 항목
        <input 
          type="text"
          className="spending-input" 
          placeholder="예) 커피 사기"
          value={titlevalue}
          onChange={changeTitle}
        ></input>
      </div>

      <div className="cost">
      비용
        <input 
          type="text"
          className="cost-input" 
          placeholder=" 얼마를 썼나요?"
          value={costvalue}
          onChange={changeCost}
        ></input>
      </div>
    </div>

    <form style={{ display: "flex" }} onSubmit={handleSubmit} >
      <button className="submit">제출</button>
    </form> 
  </div>
  )
}
