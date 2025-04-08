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
/**
 * Header
 * logo
 * navItems
 * Body
 * -search
 * -restaurant container
 * -restaurant card
 * Footer
 * -copyright
 */

// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div", {id:"child"},
//             [React.createElement("h1",{},"I am H1 tag"),
//             React.createElement("h2",{},"I am H2 tag")]
//         ),
//         React.createElement("div", {id:"child2"},
//             [React.createElement("h1",{},"I am bhavana"),
//             React.createElement("h2",{},"I am H2 tag")]
//         )
//     ]
// )

// const heading = React.createElement("h1", {className:"heading"}, "Hello From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
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

// root.render(parent);

// object is where we give attributes {id:heading}
// heading will return an object simple js object


// JSX (transpiled before it reaches js) -  parcel - babel
// JSX ===> React.createElement ==>  ReactElement  ==> JS object ==> HTML element (render)


// const jsxHeading =(<h1 className='heading'> 
// Hello from JSX element</h1>);

// React Element

const heading = (
    <h1> 
        React from JSX element
        </h1>
)

// React Components
// Class Based Component - OLD
// Functional Component - NEW

const element = <h2> New element </h2>

const TitleComponent = () => {
    return (
        <div>{element}
         <h1> Title component</h1>
        </div>
   )
}

const data = 1000;

// React Functional Component
 // component composition
const HeaderComponent = () => {
    return (
        <div id="container">
            {data}
            {10 + 10}
            {console.log("hello world")}
            {TitleComponent()}
            <TitleComponent> </TitleComponent>
        <TitleComponent/>
        <h1> React from react component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)
