import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined

    };
            // some validation
        handleAddOption = (e) => {

            e.preventDefault();
            // use trim() to clean up any whitespace
            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);
            // state for component

            this.setState(() => ({ error }));

            if (!error) {
                // input wiped if input is valid 
                e.target.elements.option.value = '';
            }
        };
        
        render(){
        return (
        <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
           <form className="add-option" onSubmit = {this.handleAddOption}>
           <input className="add-option__input" type="text" name="option" />
           <button className="button">Add Option</button>
           </form>
        </div>
        );
    }
}