const flexOptions = ["row", "row-reverse", "column", "colum-reverse"];
const justifyOptions = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
const alignOptions = ["flex-start", "flex-end", "center", "stretch", "baseline"];

document.body.onload = addElement;

function addElement() {
    // create a new div element
    const newOption = document.createElement("option");

    // and give it some content
    const newContent = (string) => {document.createTextNode(string)};

    // add the text node to the newly created div
    newOption.appendChild(newContent (flexOptions[0]));

    // add the newly created element and its content into the DOM
    const flexSelector = document.getElementById("select-flex-direction");
    document.body.insertBefore(newOption, flexSelector);
}
