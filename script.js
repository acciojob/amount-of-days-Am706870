//your JS code here. If required.
function daysOfAYear(n){
	if((n%4==0 && n%400!=0) || (n%100==0)){
		return "366"
	}else{
		return "365"
	}
}
let n = 245
console.log(daysOfAYear(n))
