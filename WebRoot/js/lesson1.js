//https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

//JS object
var person={name:"abc", age:18};

//2) runtime functions
  var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y); //will output 1undefined since function f(){} is not defined outside (it's in if statement scope)
  
  var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
  console.log(k); // output 1function
  
  
 //3) Drawback of true private method: they are memory inefficient as new copy is created
  
  var Employee= function(name, salary){
	  this.name=name || ""; //public
	  this.salary=salary || 0;
	  var increaseSalary=function(){ //private method
		  this.salary+=100;
	  }	  
	  this.displaySalary=function(){ //public method
		  increaseSalary();
		  console.log(this.salary);
	  }
  }
  var emp1 = new Employee("John",3000);
  
//4)  make this work console.log(mul(4)(3)(4)); // output : 48
 
  function mul(x){
	  return function(y){
		  return function(z){
			  return x*y*z;
		  };
	  };
  }
  console.log(mul(4)(3)(4));
  
//4) To empty array
  var arrayList = ['a','b','c','d','e','f']; // Created array 
  arrayList.length=0; //don't use arrayList=[], it just assign empty array reference
  
// to check if object is array
  if(Array.isArray(arrayList)){} // in modern browsers
  //if($.isArray(arrayList)){} //in jquery
  
// 8) delete operator is used to delete properties from non-local objects. 
  delete person.name;
  console.log(person.name); //will print undefined
  
//13) when delete operator is used to delete array element, it just put 'undefined', array length stays same
  var trees = ["xyz","xxxx","test","ryan","apple"];
  delete trees[3];    
  console.log(trees.length); //will print 5
  
//addition operator
  var bar = true;
  console.log(bar + 0);   //1
  console.log(bar + "xyz");  //truexyz
  console.log(bar + true);  //2
  
// Function definition can only have one name
  var foo = function bar(){ return 12; };//no error, but function name changed from bar to foo
  //typeof bar();  //there's no bar() function anymore, will throw error
  
// 17) Runtime function vs parsetime function. Parsetime function can be called even before its definition
  var foo = function(){ }; //runtime 
  function bar(){ }; //parsetime

//18 function hoisting: JS interpreter looks ahead to find all variable declaration and hoist them at top of functions
  
//19
  var salary = "1000$";
  function hoist() {
      console.log("Original salary was " + salary); //undefined
      var salary = "5000$";//note that we are redeclaring salary here(instead of just salary). Because of hoisting, var salary is moved at top of function
      console.log("My New Salary " + salary);
 };
 hoist();
 //gets converted to
 function hoist() {
	 var salary=undefined;
	 console.log("Original salary was " + salary); //undefined
     salary = "5000$";//note that we are redeclaring salary here. Because of hoisting, var salary is moved at top of function
     console.log("My New Salary " + salary);
 }

//https://www.toptal.com/javascript/interview-questions
 
(function(){var a =b=  3;})();//is actually interpreted as b=3 and var a=b; here b becomes global variable

//significance of wrapping code in function call?
// It provides private namespace for your library and avoid potential clashes with other library. It also provides shorter alias (jquery $)
(function($){})(jQuery);

//event loop: Browser has event loop and places each event function in a queue. Here logging 3 event is placed in queue first and executed as soon as possible. 
//output order: 1,4,3,2
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

//arguments object: JS provide acces to arguments which can be used as arguments.length==2 (to check length)
//also, JS doesn't require arguments to match. It just ignores extra parameters if supplied as undefined.

//avoid stackoverflow in below recursive code
//var list = readHugeList();
var nextListItem = function() {
    var item = list.pop();
    if (item) {
        //nextListItem();
    }
};
//use setTimeout so that event loop handles each call instead of call stack, essentially bfs
var nextListItem = function() {
    var item = list.pop();
    if (item) {
    	//setTimeout(nextListItem, 0);
    }
};

//another setTimeout
for(var i=0;i<10;i++){
	setTimeout(function() {
		console.log(i);
	}, 100)
}

//The operator === evaluates to true if both operands are of same type and same value whereas == operator coerces operand to become same type and then compare.






  
  
 
  
  