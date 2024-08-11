- As developers face challenges with DOM manipulation with very long code and even we have libraries like jQuery and all but it is also hard to maintain and it is a complex to maintain code.

- Now for front-end development React.js or vue.js is introduced to deal with it and react compiler transform code into html,css and javascript.

DOM - In react, we have real DOM and virtual DOM.

1. Virtual DOM - The Virtual DOM is a in-memory representation of Real DOM and it is lightweight copy of real DOM.

- When you do changes in react component state then a new virtual DOM is created and it represent the updated state.

- React compare the new virtual DOM with old virtual DOM and find the difference called diffing.

2. Real DOM - The real DOM is the actual browser Document Object mode,which represent the structure of HTML document

- When react determine to update the real dom based on the virtual dom diffing process, it updates the react dom with necessary changes.

- Manipulating the react DOM is expensive, so react try to minimize direct interaction with it.

Some React Jargon things - 

- State :- An object that represent the current state of the app. It represents the dynamic things in your app.

- Components :- Components is like a block of code which is reusable.

- Re-rendering - It is a refreshing the screen of your browser.

In react when the state change react automatically re-render the component to reflet that change.

* React Props - Props are used to pass data from parent component to child component.

- In functional Component, props are received as an arguments to the function.

function myComponent(props){

}

- Props are read-only, a child component cannot be modified the props it receive from parent 

- Props allows you to customize behaviour and appearence of a component.

//ParentComponent.js

import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
    return <ChildComponent message="Hello from Parent Component!!!">
}

//ChildComponent.js

import React from 'react';

function ChildComponent(props){
    return <p>{props.message}</p>
}

export default ChildComponent;