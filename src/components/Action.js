import React from 'react';
// stateless functional component
const Action = (props) => (
        <div>
            <button className="big-button"
            // calls the prop that we set up above
                onClick = {props.handlePick}
                disabled={!props.hasOptions}
                >
                What Should I Do ?
            </button>
        </div>

    );

export default Action;


// class based component 

// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//             <button 
//             // calls the prop that we set up above
//             onClick = {this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
            
//             What Should I Do ?
//             </button>
//             </div>
//         );
//     }
// }
