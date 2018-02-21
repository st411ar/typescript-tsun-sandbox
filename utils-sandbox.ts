var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach(function(line) {
	console.log(line);
});
data.forEach(line => console.log(line));

var evens: number[] = [2, 4, 6, 8];
var odds: number[] = evens.map(n => n - 1);
console.log(evens);
console.log(odds);

data.forEach(line => console.log(line.toUpperCase()));
data.forEach(line => {
	console.log(line.toUpperCase());
});

var nate = {
	name: "Nate",
	guitars: ["Gibson", "Martin", "Taylor"],
	printGuitars: function() {
		var self = this;
		this.guitars.forEach(function(g) {
			console.log(self.name + " plays a " + g);
		});
	}
};

nate.printGuitars();

var nate2 = {
	name: "Nate",
	guitars: ["Gibson", "Martin", "Taylor"],
	printGuitars: function() {
		this.guitars.forEach(g => console.log(this.name + " plays a " + g));
	}
};

nate2.printGuitars();


var firstName = "Nate";
var lastName = "Murray";
var greeting = `Hello ${firstName} ${lastName}`;
console.log(greeting);

var template = `
<div>
	<h1>Hello</h1>
	<p>This is a great website</p>
</div>
`;
console.log(template);