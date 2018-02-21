var fullName: string = 'Nate Murray';
console.log(fullName);

var age: number = 36;
console.log(age);

var married: boolean = true;
console.log(married);

var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
console.log(jobs);
var jobs: string[] = ['Apple', 'Dell', 'HP'];
console.log(jobs);

var chickens: Array<number> = [1, 2, 3];
console.log(chickens);
var chickens: number[] = [4, 5, 6];
console.log(chickens);


enum Role {Employee, Manager, Admin};
var role1: Role = Role.Employee;
var role2: Role = Role.Manager;
var role3: Role = Role.Admin;
console.log(Role);
console.log('Roles: ', Role[0], ',', Role[1], 'and', Role[2]);
console.log(role1);
console.log(role2);
console.log(role3);

enum UncanonicalRole {Employee = 3, Manager, Admin};
var role11: UncanonicalRole = UncanonicalRole.Employee;
var role12: UncanonicalRole = UncanonicalRole.Manager;
var role13: UncanonicalRole = UncanonicalRole.Admin;
console.log(UncanonicalRole);
console.log('Uncanonical Roles: ', UncanonicalRole[3], ',', UncanonicalRole[4], 'and', UncanonicalRole[5]);
console.log(role11);
console.log(role12);
console.log(role13);

enum UnorderedRole {Employee = 3, Manager = 5, Admin = 7};
var role21: UnorderedRole = UnorderedRole.Employee;
var role22: UnorderedRole = UnorderedRole.Manager;
var role23: UnorderedRole = UnorderedRole.Admin;
console.log(UnorderedRole);
console.log('Unordered Roles: ', UnorderedRole[3], ',', UnorderedRole[5], 'and', UnorderedRole[7]);
console.log(role21);
console.log(role22);
console.log(role23);


var something: any = 'as string';
console.log(something);
something = 1;
console.log(something);
something = [1, 2, 3];
console.log(something);

function print(text: string): void {
	console.log(text);
}

print('this is the text for printing');