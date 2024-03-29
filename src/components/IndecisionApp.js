import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';
import User from './User.js';
import OptionModal from './OptionModal'

/// --------------------------------------------------------
// extend to give us the features from React
// with React components you most define render()
// uppercase first letter is how React differentiates a html element and a react component 
// passing data when we init a component, that data is called props

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    };
    // method that is passed down multiple layers 
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // we are overriding a value, no need for prevState here 
        this.setState(() => ({ selectedOption: option}));
    };

    handleAddOption = (option) => {
        // for a empty array
        if(!option){
            return 'Please Enter a Valid Value';
            // indexOf to see if we already have this option in the array
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    // Manual Binding Below:

    // constructor(props){
    //     super(props);
    //     // binding the handles to this component instance
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);

    
    // }

    // lifecycles in class based components
    componentDidMount() {
        // exception handling of input
        try {
            const json = localStorage.getItem('options');
            // parsing json data
            const options = JSON.parse(json);
    
            if(options){
            this.setState(() => ({ options }));
            }

        } catch(e){
            // do nothing
        }
        
    }
    // allows us to see when the data has changed
    // when components data change 
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        console.log('saving data!');
        }
    
    }

    // when a component goes away
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }


  
        
    render () {
    
        const subtitle = "Your life in a computers hands";
        // const options = ["Item One", "Item Two", "Item three"]
        return (
            <div>
            <Header subtitle = {subtitle}/>
            <div className="container">

            <Action 
            hasOptions = {this.state.options.length > 0 }
            // passing function down as a prop
            handlePick = {this.handlePick}
            />
            <div className="widget">
            <Options 
            options = {this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
    
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
            
            />
            </div>
            

            
            </div>
            
            <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
            </div>
        );
    }
}

export default IndecisionApp;


// since we are using local storage 

// IndecisionApp.defaultProps = {
//     options: []

// };
