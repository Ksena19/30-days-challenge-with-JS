
var people = ['Ksena, Shukh', 'Lady, Millen', 'Oksi, Shark', 'Bohdan, Fly', 'David, Creed', 
    'Sofia, Hreyts'];

var inventors = [

    { first: 'Jack', last: 'London', year: 1990, passed: 2018 }, 
    { first: 'David', last: 'Hreits', year: 1908, passed: 2000 }, 
    { first: 'Patric', last: 'Men' , year: 1899, passed: 2001 }, 
    { first: 'William', last: 'Rich', year: 1834, passed: 2002 }, 
    { first: 'Peter', last: 'Maxwel', year: 1901, passed: 2003 }, 
    { first: 'Derec', last: 'Richmond', year: 1900, passed: 2004 }, 

];


// show f, l names if year >= 1890
const nine = inventors.filter((inventors) => inventors.year >= 1890 ? true : false );
// show inventory first and last names using map();
const fullName = inventors.map((inventors) => inventors.first + ' ' + inventors.last);
//sort  by birthdate from older to younger
const birthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1 );
// total years reduce();
const totals = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year));
//
const oldest = inventors.sort(function(a, b){
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;

});
// sort alphabet.-ly by last name
var people =  ['ksena', 'fim', 'gr', 'rer'];
const lastName = people.sort((firstOne, nextOne) => firstOne > nextOne ? -1 : 1);
//sum up the instances of the items in array
var arr = ['car', 'honey', 'book', 'truck', 'apple', 'apple', 'watermelon', 'barbell', 'book', 'book', 
'honey', 'barbell', 'barbell'];
const filtInst = arr.reduce(function(object, item) {
	if(!object[item]) {
		object[item] = 0;
	}
	  object[item]++;
	  return object;
}, {});