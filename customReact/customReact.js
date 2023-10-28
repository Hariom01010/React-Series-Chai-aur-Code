function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("targer",reactElement.props.target)
    */

    for (const prop in reactElement.props) {
        if(prop === "children"){
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }


    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click Me to visit google"
}


const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)