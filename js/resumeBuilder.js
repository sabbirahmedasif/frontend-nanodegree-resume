
//////////// REPLACE,APPEND//////////////////
/*$("#main").append(["Asif"]);

var aswesomeThoughts=" I am awesome";

var funThoughts=aswesomeThoughts.replace("awesome","fun");

$("#main").append([funThoughts]);*/

// var skills=["a","b","c"];
// $("#main").append(skills.length);



/////////cool header bar /////////////////


/*var formattedName=HTMLheaderName.replace("%data%","Sabbir Ahmed");


var formattedRole=HTMLheaderRole.replace("%data%","Average joe Software Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/





///obbject access///


/*bio.gender="male";
bio["city"]="Dhaka";

//$("#main").append(bio.gender);


var work={};
var education={};
work.position="developer";
work.employer="ibm";
education["school"]="uOttawa";

$("#main").append(work["employer"]);
$("#main").append(education.school);*/


///////////////OBJECTS///////////////////////


var bio={
	"name":"James",
	"role":"Web Dev",
	"age":32,
	"contacts":{
		"mobile":"2342342",
		"email":"bla@cla.com",
		"github":"sabbirahmedasif",
		"twitter":"sabbirahmedasif"
	},
	"WelcomeMessage":"welcome",
	"skills":["a","b","c"],
	"bioPic":"images/SabbirAhmed.jpg"
};

var education={
	"schools":[
		{
			"name":"uOttawa",
			"city":"ottawa",
			"degree":"MS",
			"majors":"CS",
			"dates":"2013",
			"url":"www.uOttawa.ca"

		},
		{
			"name":"St.Joseph",
			"city":"Dhaka",
			"degree":"BSc",
			"majors":"EEE",
			"dates":"2003",
			"url":""
		},

	],
	"onlineCourses":[
		{
			"title":"JS",
			"school":"online",
			"dates":2014,
			"url":"online"
		}
	]
}

var work={
	"jobs":[
		{
			"employer":"Therap",
			"title":"QA",
			"dates":"Dec 2010-Dec2011",
			"description":"sdfsdfsdf"
		},
		{	
			"employer":"IBM",
			"title":"DEV",
			"dates":"Feb 2014-Pres",
			"description":"sdfsdfsdf"

		}
	]
}

var projects={
	"projects":[
		{
			"title":"proj 1",
			"dates":"2015",
			"description":"werwer",
			"images":["111","222"]
		}
	]
}




