// entry -> output


// https://webpack.js.org/concepts/

const path = require('path');

module.exports = {
    // where it should start. executed by default
    entry: "./src/app.js",
    output: {
        // join function to connec the absolute path
        path: path.join(__dirname, 'public'),
        // all the scripts into this bundle
        filename: 'bundle.js'
    }

};