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