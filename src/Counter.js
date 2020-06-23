import React, {Component} from 'react';

class Counter extends Component{
    // constructor(props){
    //   super(props);
    //   this.state={
    //       number: 0,
    //       fixedNumber: 0
    //   };  
    // }
    state ={
        number: 0,
        fixedNumber:0
    };
    // render(){
    //     const{number ,fixedNumber} = this.state; //statr를 조회할 때는 this.state로 조회합니다. 
    //     return(
    //         <div>
    //             <h1>{number}</h1>
    //             <h2>바뀌지않는 값:{fixedNumber}</h2>
    //             <button
    //             //onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
    //             onClick={() =>{
    //                 //this.setSate를 사용하여 state에 새로운 값을 넣을 수 있습니다.
    //                 this.setState({number: number + 1, fixedNumber: fixedNumber + 2});
    //             }
    //             }> + 1

    //             </button>
    //         </div>
    //     );
    // }
    render(){
        const{number ,fixedNumber} = this.state; //statr를 조회할 때는 this.state로 조회합니다. 
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button
                    // onClick={() =>{
                    //     this.setState(prevState => {
                    //         return{
                    //             number: prevState.number + 1
                    //         };
                    //         });
                    //         // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    //         //아래 코드는 함수에서 바로 객체를 반환한는 의미 입니다.
                    //         this.setState(prevState => ({
                    //             number: prevState.number +1 
                    //         }));
                    // }} 
                    onClick = {() =>{
                        this.setState(
                            {
                                number: number +1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                    
                    
                    >
                    +1
                    
                </button> 
                
            </div>
        );
    }
}

export default Counter;