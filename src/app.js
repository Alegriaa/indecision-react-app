
// extend to give us the features from React
// with React components you most define render()
// uppercase first letter is how React differentiates a html element and a react component 
// passing data when we init a component, that data is called props
class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision';
        const subtitle = "Your life in a computers hands";
        const options = ["Item One", "Item Two", "Item three"]
        return (
            <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action />
            <Options options = {options}/>
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
            <button> What Should I Do ?</button>
            </div>
        );
    }
}


// addOption 
class AddOption extends React.Component {
    render(){
        return (
            <div>
            <p>AddOption here</p>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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