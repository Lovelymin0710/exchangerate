import './App.css';
import React, {useEffect, useState} from "react"
import ChooseCountry from './ChooseCountry';

function App() {
  const country = [
    { id: "KRW", value: "한국(KRW)" },
    { id: "PHP", value: "필리핀(PHP)" },
    { id: "JPY", value: "일본(JPY)" }
  ];

  // useEffect(()=> {
  //   function getApiData() {

  //     const myHeaders = new Headers();
  //     myHeaders.append("apikey", "API 정보 입력");
    
  //     const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };
    
  //   fetch("api-주소", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(`result.quotes : ${JSON.stringify(result.quotes)}`)
  //       setCountryarray(result.quotes)
  //     })
  //     .catch(error => console.log('error 발생 api 못불러옴!!!!!!!!!!!!!!!!!!!!!!!', error));    
  //   }

  //   getApiData()
  // },[])

  return (
    <div className="App">
      <header>
      <h1>환율 계산기</h1>
      </header>
      <h2>송금국가 : 미국(USD)</h2>
      <h2>수취국가: &nbsp; <ChooseCountry /> </h2>
      <h2>환율 : </h2>
      
    </div>
  );
}

export default App;
