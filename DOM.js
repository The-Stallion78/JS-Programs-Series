                        // DOM (Document Object Model)

/*

The DOM is a W3C (World Wide Web Consortium) standard.
"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

document.getElementById("demo")
document.getElementsByClassName("demo")
document.getElementsByTagName("demo")

The easiest way to get the content of an element is by using the "innerHTML" property.
document.getElementById("demo").innerHTML = "Anything"

If you want to access any element in an HTML page, you always start with accessing the document object.

document.createElement(element)	        Create an HTML element
document.removeChild(element)	        Remove an HTML element
document.appendChild(element)	        Add an HTML element
document.replaceChild(new, old)	        Replace an HTML element
document.write(text)	        Write into the HTML output stream

document.getElementById(id)	        Find an element by element id
document.getElementsByTagName(name)	        Find elements by tag name
document.getElementsByClassName(name)	        Find elements by class name



*/