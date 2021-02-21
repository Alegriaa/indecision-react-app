
// extend to give us the features from React
// with React components you most define render()
// uppercase first letter is how React differentiates a html element and a react component 
class Header extends React.Component {
    render() {
       return (<div> 
       <h1>Indecision</h1>
       <h2>Your life in the hands of a computer</h2>
       
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

// Options class
class Options extends React.Component {
    render() {
        return (
            <div>
            <p> Options component here</p>

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

const jsx = (
    <div>
    <h1> Title </h1>

    <Header />
    <Action />
    <Options />
    <AddOption />
    
    </div>

);


ReactDOM.render(jsx, document.getElementById('app'));