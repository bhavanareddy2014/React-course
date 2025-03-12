import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>Hello Nested Element</h1>
 * <h2>Hello H2 Tag</h2>
 * </div>
 * <div id=child2>
 * <h1>Hello Nested Element</h1>
 *  <h2>Hello H2 Tag</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div", {id:"child"},
            [React.createElement("h1",{},"I am H1 tag"),
            React.createElement("h2",{},"I am H2 tag")]
        ),
        React.createElement("div", {id:"child2"},
            [React.createElement("h1",{},"I am bhavana"),
            React.createElement("h2",{},"I am H2 tag")]
        )
    ]
)

const heading = React.createElement("h1", {className:"heading"}, "Hello From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);

// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "heading",
//         "children": "Hello From React"
//     },
//     "_owner": null,
//     "_store": {}
// }

root.render(parent);

// object is where we give attributes {id:heading}
// heading will return an object simple js object
