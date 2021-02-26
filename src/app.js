
const obj = {
    name: "Vikam",
    getName() {

        return this.name;
        

    }
};
// use bind(); methods on functions to bind 'this' 
// bind the object 
const getName = obj.getName.bind(obj);
console.log(obj.getName());



// extend to give us the features from React
// with React components you most define render()
// uppercase first letter is how React differentiates a html element and a react component 
// passing data when we init a component, that data is called props
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        // binding the handles to this component instance
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Item One", "Item Two", "Item Three!"]
        };
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                // empty the options array
                options: []
            };
            
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }


    render () {
        const title = 'Indecision';
        const subtitle = "Your life in a computers hands";
        // const options = ["Item One", "Item Two", "Item three"]
        return (
            <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action 
            hasOptions = {this.state.options.length > 0 }
            // passing function down as a prop
            handlePick = {this.handlePick}
            />
            <Options 
            options = {this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            
            />
            <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
       return (<div> 
       <h1>{this.props.title}</h1>
       <h2>{this.props.subtitle}</h2>
       
       </div>
       );
    }

}

class Action extends React.Component {
    render(){
        return (
            <div>
            <button 
            // calls the prop that we set up above
            onClick = {this.props.handlePick}
            disabled={!this.props.hasOptions}
            >
            
            What Should I Do ?
            </button>
            </div>
        );
    }
}


// addOption 
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim;
        if(option){
            alert(option);
        }

    }
    render(){
        return (
            <div>
           <form onSubmit = {this.handleAddOption}>
           <input type="text" name="option" />
           <button>Add Option</button>
           </form>
            </div>
        );
    }
}

class Options extends React.Component {
    // // basic override of constructor for react components 
    // constructor(props) {
    //     super(props);
    //     // wherever we call hanleRemoveAll(); the context is correct
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);

    // }
    // handleRemoveAll(){
    //     alert("removeall")
    // }

    render() {
        
        return (
            <div>
            <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
            {
                this.props.options.map((option) => <Option key ={option} optionText ={option} />)
            }
           <Option />

            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
            {this.props.optionText}
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));