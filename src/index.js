import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import reportWebVitals from './reportWebVitals';

import Newclass from './comp/componenst2'

function Feader (){

  const var1 ="sindha"
  const var2 =`What is your name ${var1}`
  return (
  <h3 style={{color:"red"}}>{var2}</h3>
  );
}

function Header (value){
  console.log(value)
  const{args1} = value
  console.log("Timber"+styles.color)

  const retval =`ok ${args1} ok`;
  return (
  <h3 className={styles.Timber} >Header {retval}</h3>
  );
}

function Final (){
  const data = {type:"tamil" , colour:"black"}
  const [color,setcolor]=useState('green')
  return (
    <>
    <Feader class="Timber"/>
    <Header args1={'data'}/>
    <Newclass args={data}/>
    <h1>{color}</h1>
    <button title='click' onClick={()=> {setcolor('red')}}>colour</button>
    </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Final/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

