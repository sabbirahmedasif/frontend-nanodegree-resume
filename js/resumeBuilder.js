
//////////// REPLACE,APPEND//////////////////
/*$("#main").append(["Asif"]);

var aswesomeThoughts=" I am awesome";

var funThoughts=aswesomeThoughts.replace("awesome","fun");

$("#main").append([funThoughts]);*/

// var skills=["a","b","c"];
// $("#main").append(skills.length);


///////////////OBJECTS///////////////////////
var bio={
	"name":"James",
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

bio.gender="male";
bio["city"]="Dhaka";

//$("#main").append(bio.gender);


var work={};
var education={};
work.position="developer";
work.employer="ibm";
education["school"]="uOttawa";

$("#main").append(work["employer"]);
$("#main").append(education.school);


/*var formattedName=HTMLheaderName.replace("%data%","Sabbir Ahmed");


var formattedRole=HTMLheaderRole.replace("%data%","Average joe Software Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/