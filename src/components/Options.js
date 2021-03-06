
import React from 'react';
import Option from './Option.js'
const Options = (props) => (
        <div>
            <button 
            // adding modified button scss here
            className="button button--link"
            onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.lnegth === 0  && <p>Please add a option to begin</p>}
            {
                props.options.map((option) => (
                <Option 
                key ={option} 
                optionText ={option} 
                handleDeleteOption ={props.handleDeleteOption}
                />
                ))
            }
         </div>
    );

// tests
export default Options;

// class Options extends React.Component {
//     // // basic override of constructor for react components 
//     // constructor(props) {
//     //     super(props);
//     //     // wherever we call hanleRemoveAll(); the context is correct
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);

//     // }
//     // handleRemoveAll(){
//     //     alert("removeall")
//     // }

//     render() {
        
//         return (
//             <div>
//             <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key ={option} optionText ={option} />)
//             }
//            <Option />

//             </div>
//         );
//     }
// }