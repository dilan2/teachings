/*
'/get_reviews' // return array of reviews  GET
'/get_faq' // return array of faq GET

'/order' // add order POST



ajax(url, method, data); 
*/




function api_generator(method, url) {

    var method = method;
    var url = url;

    return function() {
	ajax(url, method, this.data);
	this.show_data();
    }
}

var get_reviews = api_generator('GET', '/get_reviews');
var order = api_generator('POST', '/order');


get_reviews(data);





function generate_from_type(type) {
    var type = type;


    function Test() {
	this.method = function() {
	    console.log(this.data);
	}
    }
    

    return function() {
	this['ajax_' + type](this.data);

	var res = new Test();

	return Test;
	return res.mehod.call(this);
    }
}



var iii = new generate_from_type('json')();

var h = iii.bind(new FormGenerator('POST', order));

var x = generate_from_type('json');
var y = generate_from_type('yml');
x();
y();


var callback = generate_from_type(json);

function Test(arg,  callback) {
    callback(arg);
    generate_from_type('json')(arg);
    
}


function FormGenerator(form, link_to_order_func) {
    this.data = form.querSelectorAll('INPUT');

    this.msg = 'My message';
    
    this.send = link_to_order_func.bind(this);

    this.test = function() {
	console.log(this);
    }


    this.show_data = function() {
	console.log(this.data);
    }

    this.ajax_json = function() {
	ajax()
    }
}


var form_1 = new FormGenerator(document.getElementById('form1'), order);


var form_2 = new FormGenerator(document.getElementById('form2'));

form_1.test();

form_2.test();

form_1.send();// SENDING DATA...



