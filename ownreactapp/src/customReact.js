//here we are trying to copy the functioning of react, please keep in mind this is not react
//how react looks at things is that it sees them as object so every html tag is an object
//so we create an A tag in form of an object
const reactAtagElem = {
  type: "a",
  props: {
    href: "https://www.pandiaaman.com",
    target: "_blank",
  },
  text: "Click me to visit my portfolio website",
};

//getting a reference of  root div in the main index.html
let rootContainer = document.getElementById("root");

//now we need a custom render method made by us to show what we want to inject and where we want to inject
customRender(rootContainer, reactAtagElem);

function customRender(rootContainer, reactElement) {
  let domElem = document.createElement(reactElement.type);
  domElem.textContent = reactElement.text;
  // domElem.setAttribute("href", reactElement.props.href);
  // domElem.setAttribute("target", reactElement.props.target);
  for (let prop in reactElement.props) {
    domElem.setAttribute(prop, reactElement.props[prop]);
  }

  rootContainer.appendChild(domElem);
}
