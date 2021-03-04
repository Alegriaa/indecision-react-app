import React from 'react';

export default class AddOption extends React.Component {
        constructor(props) {
                super(props);
                this.handleAddOption = this.handleAddOption.bind(this);
                this.state = {
                    error: undefined
                };
            }
            // some validation
        handleAddOption(e) {

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
        }
        render(){
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
           <form onSubmit = {this.handleAddOption}>
           <input type="text" name="option" />
           <button>Add Option</button>
           </form>
        </div>
        );
    }
}