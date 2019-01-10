//var hello;
//console.log(hello);
//hello = "world";
console.log(hello); //result: undefined                              
var hello = 'world';  

//COMPARE THE TWO FUNCTIONS BELOW
var needle = 'haystack';
test(); // test is a function
function test(){
	var needle = 'magnet';
	console.log(needle); // "magnet"
}

magicalUnicorns(); //Type error: magicalUnicorns is not a defined function, because it is a variable
var magicalUnicorns = function(){
  console.log("Will it blend?");
}

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); //"super cool"

var food = 'chicken';
console.log(food); //"chicken"
eat();
function eat(){
	food = 'half-chicken'; //"half-chicken"
	console.log(food);
	var food = 'gone';
}
//eat()

mean(); //type error: mean is not a function
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);


console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
	genre = "rock"; 
	console.log(genre); //rock
	var genre = "r&b";
	console.log(genre); //r&b
}
//rewind();
console.log(genre); //disco


dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo); //seattle
	var dojo = "burbank";
	console.log(dojo); //burbank
}
//learn();
console.log(dojo); //san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0)); //type error: dojo is a constant, so can't be reassigned
function makeDojo(name, students){
        const dojo = {};
    dojo.name = name;
        dojo.students = students;
    if(dojo.students > 50){
      dojo.hiring = true;
    }
        else if(dojo.students <= 0){
        dojo = "closed for now"; //error
        }
    return dojo;
}
//console.log(makeDojo("Chicago", 65)); //hiring: true, name: Chicago, students: 65