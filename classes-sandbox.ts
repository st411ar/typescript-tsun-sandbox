class Vehicle {}
var v = new Vehicle();

class Person {
	first_name: string;
	last_name: string;
	age: number;
	
	greet() {
		console.log("Hello", this.first_name);
	}
}

var p: Person;
p = new Person();
p.first_name = 'Felipe';
p.greet();

var p1: Person = new Person();
p1.first_name = 'Felipe';
p1.greet();


class AdvancedPerson {
	first_name: string;
	last_name: string;
	age: number;
	
	greet() {
		console.log("Hello", this.first_name);
	}
	
	ageInYears(years: number): number {
		return this.age + years;
	}
}

var p2: AdvancedPerson = new AdvancedPerson();
p2.age = 6;
console.log(p2.ageInYears(12));


class AdvancedVehicle {
	constructor() {}
}
var v1 = new AdvancedVehicle();


class ParamPerson {
	first_name: string;
	last_name: string;
	age: number;
	
	constructor(
			first_name: string, 
			last_name: string, 
			age: number
	) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
	}
	
	greet() {
		console.log("Hello", this.first_name);
	}
	
	ageInYears(years: number): number {
		return this.age + years;
	}
}

var p3: ParamPerson = new ParamPerson('Felipe', 'Coury', 36);
p.greet();