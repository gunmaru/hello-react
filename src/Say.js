import React,{useState} from 'react';

const Say = () =>{
    const [message, setMessage] =useState('');  //useState 배열의 첫번째는 현재상태이고, 두번째는 현재상태를 변화하는 함수 입니다.
    const onClickEnter = () => setMessage('안녕하세요!'); //setTex함수 호출 값의 형태는 자유입니다.
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] =useState('black');


    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
    <h1 style={{color}}>{message}</h1>
        
        <button style={{color:'red'}} onClick={() => setColor('red')}>빨간색</button>
        <button style={{color:'green'}} onClick={() => setColor('green')}>초록색</button>
        <button style={{color:'blue'}} onClick={()=> setColor('blue')}>파란색</button>
        </div>
    );

};

export default Say;