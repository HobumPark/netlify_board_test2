
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  useEffect(()=>{
    console.log('useEffect')
    getData()
  },[])

  const getData=async()=>{
    //axios.defaults.baseURL = 'http://mytest.cafe24app.com';
    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['widthCredentials'] = true
    const result=await axios.get('/board')
    console.log(result)
  }

  const getData2=async()=>{
    const result=await axios.get('/board/2')
    console.log(result)
  }

  return (
    <div className="App">
        <button onClick={getData}>요청</button>
        <button onClick={getData2}>요청</button>
    </div>
  );
}

export default App;
