var gateRedirects = {
		"/prototype-js/test.html"	:	"https://www.military.com/newmembers/military-discounts",		
		"/discounts/beta"	:	"https://www.military.com/newmembers/military-discounts",
		"/discounts"	:	"https://www.military.com/newmembers/lb-discounts",
		"/money"		:	"https://www.military.com/newmembers/lb-pcs",
		"/benefits"	:	"https://www.military.com/newmembers/lb-disability-compensation",
		"/veteran-jobs":	"https://www.military.com/newmembers/lb-job-fairs",
		"/pcs-guide"	:	"https://www.military.com/newmembers/pcs-guide",
		"/va-loan-guide":	"https://www.military.com/newmembers/va-loan-guide",
		"/benefits/military-pay/charts/proposed-pay-charts.html"	:	"https://www.military.com/newmembers/lb-proposed-pay-charts"
};

var curUrl=window.location.pathname;
var gateUrl=gateRedirects[curUrl];

if((window.location.search.indexOf("thrive_category=")>=0)){
	console.log(curUrl);
}

while(curUrl && !gateUrl){
	curUrl=curUrl.substr(0, curUrl.lastIndexOf("/"));
	gateUrl=gateRedirects[curUrl];
}


console.log(gateUrl);
