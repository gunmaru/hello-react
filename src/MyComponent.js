import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({name, children}) =>{
//        return(
//         <div>
//             안녕하세요. 제 이름은 {name} 입니다. <br/>
//             children 값은{children} 입니다.
//         </div>
//     );
    
// };

// MyComponent.defaultProps ={
//     name:'기본이름'
// };

// export default MyComponent; // 다른 파일에서 이 파일을 import할 때, 위에서 선언한 My Component 클래스를 불러오도록한다.

class MyComponent extends Component{
    static defaultProps ={
        name:'기본 이름'
    };
    static propTypes ={
        name: PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    }
    render()
    {
        const{name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요. 제 이름은 {name} 입니다.<br/>
                childern 값은{children} 입니다.<br/>
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}
export default MyComponent