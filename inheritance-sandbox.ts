class Report {
	data: Array<string>;
	
	constructor(data: Array<string>) {
		this.data = data;
	}
	
	run() {
		this.data.forEach(function(line) {
			console.log(line);
		});
	}
}

var r: Report = new Report(['First line', 'Second line']);
r.run();


class TabbedReport extends Report {
	headers: Array<string>;
	
	constructor(headers: string[], values: string[]) {
		super(values);
		this.headers = headers;
	}
	
	run() {
		console.log(this.headers);
		super.run();
	}
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
var tr: TabbedReport = new TabbedReport(headers, data);
tr.run();


function pad(s: any, len: number, pad: string): string {
	s = s + '';
	var spaces = (len + 1) - s.length;
	return s + Array(spaces).join(pad);
}

console.log(pad('sample string', 15, '<>'));


class FormattedReport extends Report {
	headers: string[];
	values: any[][];
	
	constructor(headers: string[], values: any[][]) {
		var lengths: number[] = headers.map((header: string, i: number) => {
			var maxLength: number = header.length;
			values.forEach((value: any[]) => {
				var valueLength: number = (value[i] + '').length;
				if (valueLength > maxLength) {
					maxLength = valueLength;
				}
			});
			return maxLength;
		});
		
		var data: Array<string> = [];
		
		data.push(
			headers
				.map((h, i) => pad(h, lengths[i], ' '))
				.join(" ")
		);
		
		data.push(
			headers
				.map((h, i) => pad('', lengths[i], '-'))
				.join(" ")
		);
		
		values.map(row => {
			data.push(
				row
					.map((v, i) => pad(v, lengths[i], ' '))
					.join(" ")
			);
		});
		
		super(data);
	}
}


var headers: string[] = ['Name', 'Gender', 'Age'];
var values = [
  ['Alice Green', 'Female', 55],
  ['Paul Pfifer', 'Male', 26],
  ['Louis Blakenship', 'Male', 44]
];

var fr: FormattedReport = new FormattedReport(headers, values);
fr.run();