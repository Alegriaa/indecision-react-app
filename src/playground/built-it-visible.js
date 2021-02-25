class VisibilityToggle extends React.Component {
    // maintain the behavior through props
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };

    }
    handleToggleVisibility(){
       this.setState((prevState) => {
           return {
               // flip the value
               visibility: !prevState.visibility
           };
       });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            {/* if visibility show details */}
            {this.state.visibility &&(
                <div>
                <p>Show some details here for everyone</p>
                </div>
    
            )}
            </div>
        );

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// state
// visibilitytoggle - render, constructor, handletogglevisiblity
// visibility -> false


// const appRoot = document.getElementById('app');


// let visibility = false;
// const toggleVisibility = () => {
//     // flips current visibility value
//     visibility = !visibility;
//     renderVisibility();
// };

// const renderVisibility = () => {
    // const visTemplate = (
    //     <div>
    //     <h1>Visibility Toggle</h1>
    //     <button onClick = {toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
    //     {/* if visibility show details */}
    //     {visibility &&(
    //         <div>
    //         <p>Show some details here for everyone</p>
    //         </div>

    //     )}
    //     </div>
    // );
    

// ReactDOM.render(visTemplate, appRoot);
// };

// renderVisibility();