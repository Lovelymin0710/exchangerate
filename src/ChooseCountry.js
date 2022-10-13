import { useState, useEffect} from 'react';

function ChooseCountry() {
    const [DropValue,setDropValue] = useState("한국");
    const onChangeDropValue = (e) => {
        setDropValue(e.target.value);
        console.log('무엇을 선택하셨습니까?');
        console.log(e.target.value);
    }

    return (
        <>
        <select value={DropValue} onChange={onChangeDropValue}>
            <option selected value="한국" >한국(KRW)</option>
            <option value="필리핀">필리핀(PHP)</option>
            <option value="일본">일본(JPY)</option>            
        </select>
        </>
    );
  }

  export default ChooseCountry;