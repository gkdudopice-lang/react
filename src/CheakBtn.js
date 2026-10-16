import { useState } from "react";

const CheckBox = () => {
  const cars = ["그랜저", "싼타페", "제네시스", "코나", "투싼"];

  // 선택된 값이 여러 개 → 배열 state로 관리
  const [checkedCars, setCheckedCars] = useState([]);

  // 개별 체크 박스
  const onChange = (e) => {
    const { value, checked } = e.target; // 체크 여부 확인 (true / false)

    if (checked) {
      // 체크 -> 기존 베열에 추가
      setCheckedCars([...checkedCars, value]);
    } else {
      setCheckedCars(checkedCars.filter((car) => car !== value));
    }
  };

  // 전체 선택 및 해제
  const isAllChecked = checkedCars.length === cars.length;

  const onChangeAll = (e) => {
    setCheckedCars(e.target.checked ? [...cars] : []);
  };

  return (
    <>
      <h3>체크 박스</h3>
      <label>
        <input type="checkbox" checked={isAllChecked} onChange={onChangeAll} />
        전체 선택
      </label>
      <hr />

      {cars.map((car) => (
        <label key={car} style={{ marginRight: "12px" }}>
          <input
            type="checkbox"
            value={car}
            checked={checkedCars.includes(car)} // 배열에 있으면 체크 상태
            onChange={onChange}
          />
          {car}
        </label>
      ))}
      <p>
        {checkedCars.length > 0
          ? `선택한 차량 (${checkedCars.length}대) : ${checkedCars.join(", ")}`
          : "운전해 보고 싶은 차량을 모두 선택하세요."}
      </p>
    </>
  );
};

export default CheckBox;
