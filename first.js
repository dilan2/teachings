var obj = {
    'new_key': 'new_value',


};


function  First() {
    //this == First


    this.a;


    var b;

    
    var self = this;

    
    new Promise(function(resolve, reject) {
	//this == window;
	var self;
	this.a == undefined;
	this.b == undefined;
    }).then(function(res) {  //res == 5
	// this == window
	self.b = res;
    })
    
}



var obj2 = {
    hello: function(a, b, c) {
	console.log(this.msg); //this == obj2
    },

    msg: 'hello world',

    number: 5
};



obj2.hello(); // console.log('hello world');


var obj3 = {
    msg: 'hello from 3'
};

obj3.hello(); // error

obj2.hello.call(obj3, 1, 2, 3); //console.log('hello from 3');
obj2.hello.apply(obj3, [1,2,3]); //[1,2,3] == hello.arguments
var temp = obj2.hello.bind(obj3);//hello is not fired  //temp == obj2.hello where this == obj3

temp(); //console.log('hello from 3');

obj2.hello.apply(obj3, [1,2,3]) == obj2.hello.bind(obj3)([1,2,3]) == temp([1,2,3]);


function generator() {
    console.log(this.msg);

    function sub_function(a) {
	return a*2;
    }

    return sub_function(this.number);
}



generator(); //console.log('undefined');

generator.call(obj2); //console.log('hello world')





function main(number) {

    var num = number;
    
    return function(x) {
	console.log(number + this.y);
    }
}


console.log(main(5)); // undefined

var new_fun = main(5); //

new_fun(); // NaN

var t = {
    y: 6
};

var last = new_fun.bind(t); // nothing

last(); //console.log(11);





new_fun(2); // function() {console.log(7)};


var sec_func = main(6);

sec_func(4); // function() {console.log(9)};



