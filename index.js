// const root = document.getElementById("root");
// let heading = document.createElement("h1");
// heading.innerHTML = "Hello world";
// root.appendChild(heading);

// create in react
// div -> div -> h1

let heading = React.createElement(
  "h2",
  { id: "heading", style: { color: "red" } },
  "Hi from React"
);
console.log(heading); // This an javascript (react) object
//!createElement takes 3 arguments 1st is the element 2nd object is the attributes we give and third is what we want to write inside the tag.
// let root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
//!  it takes the element which we want to make the root.
// root.render(heading); //! it converts the  heading (object) into h2 element that html understands
// console.log(root.render(heading));

let parentEle = React.createElement("div", { id: "parent-div" }, [
  React.createElement("div", { id: "child-div" }, [
    React.createElement(
      "h1",
      { id: "heading", style: { color: "red" } },
      "Hi from React nested"
    ),
    React.createElement(
      "h3",
      { id: "heading", style: { color: "red" } },
      "Hi from React nested 2"
    ),
  ]),
  React.createElement("div", { id: "child-div-2" }, [
    React.createElement(
      "h1",
      { id: "heading", style: { color: "red" } },
      "Hi from React nested (2nd child)"
    ),
    React.createElement(
      "h3",
      { id: "heading", style: { color: "red" } },
      "Hi from React nested 2 (2nd child)"
    ),
  ]),
]);

//! We can see that how complex this code is ---> so this is why JSX exists.
console.log(parentEle);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentEle);
