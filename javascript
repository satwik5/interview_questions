-----------what is javascript?
JavaScript is OOP scripting language, it runs only on browser 
JS code are all in a form of text.

^^^JavaScript is a lightweight, interpreted programming language with object-oriented capabilities
^^^It is designed for network centric applications
^^^It is an open and cross platform scripting language
^^^The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.

----------- data types in javascript
string
number
boolean
undefined
null
object
symbol

----------- case sensitive ?
Yes, JavaScript is case sensitive, theArray and thearray is different variables.
keywords, function names, variables and any other identifiers.

------------- advantages of javascript
Less server interaction --You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.
Immediate feedback to the visitors --They don’t have to wait for a page reload to see if they have forgotten to enter something.
Increased interactivity --You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.
Richer interfaces --You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.

------------ object in JavaScript
JavaScript supports Object concept very well. You can create an object using the object literal as follows
var emp = {name: "Daniel",age: 23};
in other words i can say like key value pairs.

------------ array in JavaScript
array is like having group of elements, starting with index 0
var arr=[0,1,4,9]; var arr2=['abc', 3, 45, true]  -- array literal method
var arr = new Array(0,1,4,9);   --constructor method

    c = ['foo', 'bar'],           // these are the same
    d = new Array('foo', 'bar'),  // c and d are arrays with 2 strings

    // these are different:
    e = [3],             // e.length == 1, e[0] == 3
    f = new Array(3);   // f.length == 3, f[0] == undefined, f = new Array(3).fill(1)--> f[0] == 1
	
--------------prototype in JavaScript
In JavaScript, every function and object has a property named prototype by default
Prototype Inheritance: In JavaScript, a prototype can be used to add properties and methods to a constructor function.
Changing Prototype: If a prototype value is changed, then all the new objects will have the changed property value. 
					All the previously created objects will have the previous value.
JavaScript Prototype Chaining: If an object tries to access the same property that is in the constructor function and the prototype object,
					the object takes the property from the constructor function if not then it will go for prototype value.


--------------What is a name function in JavaScript & how to define it?
Name fucntion is JS is nothing but a normal function, it can defined using function keyword.

------------- anonymous function in javascript
An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.
	let show = function () {
		console.log('Anonymous function');
	};
	show();
We often use anonymous functions as arguments of other functions. For example:
	setTimeout(function () {
		console.log('Execute later after 1 second')
	}, 1000);
	
If you want to create a function and execute it immediately after declaration, you can use the anonymous function like this:
	(function() {
		console.log('IIFE');
	})();  -->() calls the fucntion ,
		   -->(person) let person = {firstName: 'John',lastName: 'Doe'} pass (person) to handle values 
--------------ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:
let show = () => console.log('Anonymous function');
let add = (a, b)  => a + b;  


------------- Can you assign an anonymous function to a variable and pass it as an argument to another function?
Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.


------------- Closure in JavaScript
function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`

Closures are useful whenever you need private state associated with a function. 
JavaScript does not have a private field syntax. Closures meet this need.

------------- Bubbling and Capturing
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, 
when an event occurs in an element inside another element, and both elements have registered a handle for that event. 
The event propagation mode determines in which order the elements receive the event.
By Default it will be in Bubble phase (i.e by default capture false)
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', capture, true);  // to perform in capture mode true
    divs[i].addEventListener('click', bubble, false);	// to perform in bubble mode false
}

-------------- bind, call, apply
The bind() method creates a new function with the this value provided to it. 
While the call() method immediately executes a function with the given this value. 
Similarly to the call() method, apply() immediately executes the function with the given this value but, 
	it accepts its arguments as an array.
	
^^bind()
	function greeting(mobile) {
	  console.log(`${this.firstName} says hi!`)
	}

	const john = {
	  firstName: 'John',
	  lastName: 'Doe',
	  age: 20
	};
	const johnGreeting = greeting.bind(john, 9988776677);
	johnGreeting();// output John says hi!

^^call()
	function greeting(mobile) {
	  console.log(`${this.firstName} says hi!`)
	}

	const john = {
	  firstName: 'John',
	  lastName: 'Doe',
	  age: 20
	};
	greeting.call(john, 9988009988); // output John says hi!

^^apply()
	function printName(...args) {
	  console.log(`Name: ${this.firstName} ${this.lastName}, Age:${args[0]} Country: ${args[1]}`);
	}

	student = {
	  firstName: 'Taslan',
	  lastName: 'Graham'
	};

	const age = 24;
	const country = "Jamaica";
	printName.apply(student, [age, country]); // Name: Taslan Graham, Age:24 Country: Jamaica
	
---------------- slice substring substr
slice (start, end)
substring(start, end)
substr(start, length)

slice and substr accepts negative indecies which takes in reverse direction


-----------------------------------------------------
var str= 'this is sunday and this funday';

function findMax(input){
	var arr= input.split(' ');
  
return arr.sort((a,b)=>
arr.filter(val=>val===a).length - arr.filter(val=>val===b).length
).pop();
}

console.log(findMax(str))
