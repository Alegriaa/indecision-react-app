const appRoot = document.getElementById('app');


let visibility = false;
const toggleVisibility = () => {
    // flips current visibility value
    visibility = !visibility;
    renderVisibility();
};

const renderVisibility = () => {
    const visTemplate = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
        {/* if visibility show details */}
        {visibility &&(
            <div>
            <p>Show some details here for everyone</p>
            </div>

        )}
        </div>
    );
    

ReactDOM.render(visTemplate, appRoot);
};

renderVisibility();