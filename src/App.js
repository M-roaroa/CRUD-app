import React, {useState} from "react";
import "./App.css";
import List from "./component/List";
import InputField from "./component/InputField";


export default function App() {
  //함수들은 여기에
  const [calcdata, setCalcData] = useState([
    {
            id : "1",
            title : "식비",
            price : "5000"
          }
  ]);
  const [titlevalue, setTitleValue] = useState("");
  const [costvalue, setCostValue] = useState("");
  // const [editIndex, setEditIndex] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show : false,
    message : ""
  });

  // 목록 전체 삭제 
  const clickListDelete = () => {
    let newList = [];
    setCalcData(newList);

    // alert 창 표시
    setShowAlert({
      show: true,
      message: "지출 내역이 모두 삭제되었습니다."
    });
    // 1초 후에 alert 창 숨기기
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }

  // 총 지출
  const calculateTotalExpense = () => {
    const total = calcdata.reduce((acc, item) => acc + parseInt(item.price), 0);
    return total;
  };

    return(
      <div className="container">
        <div className="calculatorBlock"> 
          {/* alert */}
          {showAlert.show && <alert className="alert">{showAlert.message}</alert>}

          <div className="title">
            <h1>예산 계산기</h1>
          </div>
          
          {/* 입력란 */} 
          <div className="contents">
            <InputField 
            titlevalue={titlevalue} 
            setTitleValue={setTitleValue} 
            costvalue={costvalue} 
            setCostValue={setCostValue} 
            setShowAlert={setShowAlert}
            setCalcData={setCalcData}/>
           
            {/* 리스트 */} 
            <List calcdata={calcdata} setCalcData={setCalcData} setShowAlert={setShowAlert}/>

            {/* 목록 전체 지우기 버튼 */} 
            <button className="listdeleteBtn" onClick={() => clickListDelete()}>목록 지우기</button>
          </div>
          
          {/* 지출 합계 */} 
          <div className="total">
            <h2>총 지출: {calculateTotalExpense()}원 </h2>
          </div>
        </div>
      </div>
    );
}