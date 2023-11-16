import React from "react";

export default function List({calcdata, setCalcData,setShowAlert}) {

  // 삭제
    const clickDelete = (id) => {
      let newCalcData = calcdata.filter(data => data.id !== id)
        setCalcData(newCalcData);
    
      // alert 창 표시
        setShowAlert({
          show: true,
          message: "지출 내역이 삭제되었습니다."
        });
      // 1초 후에 alert 창 숨기기
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
    }

  // 수정 기능
    // const clickEdit = (index) => {
    //   setEditIndex(index);
    //   setTitleValue(calcdata[index].title);
    //   setCostValue(calcdata[index].price);
    // }

    // const saveEdit = () => {
    //   if (editIndex !== null) {
    //     setCalcData((prev) =>
    //       prev.map((data, index) =>
    //         index === editIndex
    //           ? { ...data, title: titlevalue, price: costvalue }
    //           : data
    //       )
    //     );

    //     // alert 창 표시
    //     setShowAlert({
    //       show: true,
    //       message: "지출 내역이 수정되었습니다."
    //     });
    //     // 1초 후에 alert 창 숨기기
    //     setTimeout(() => {
    //       setShowAlert(false);
    //     }, 1000);

    //     setEditIndex(null);
    //     setTitleValue("");
    //     setCostValue("");
    //   }
    // };


  return (
    // 리스트
        <div className="contents-middle">
            {calcdata.map((data, /*index*/) => (
                <div className="list" key={data.id}>

                <div className="right">{data.title}</div>
                <div className="middle">{data.price}</div>
                <div className="left">
                    <button className="editBtn" /*onClick={() => clickEdit(index)}*/ > 수정 </button>
                    <button className="deleteBtn" onClick={() => clickDelete(data.id)} > 삭제 </button>
                </div>
 
            </div>
            ))}
        </div>  
    )
}
