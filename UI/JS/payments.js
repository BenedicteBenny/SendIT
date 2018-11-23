function getorder(){
	var pick=document.getElementById("pickuplo").value;
	var dest=document.getElementById("Destination").value;
	var wt=document.getElementById("weight").value;
	var ht=document.getElementById("height").value;
	var wd=document.getElementById("width").value;
	var nm=document.getElementById("name").value;
	var lg=document.getElementById("length").value;


//Set parcel delivery price based on the parcel weight 0.10per kg
	var price=0.1*wt;
//check the parcel weight
	if(wt>=100){
		document.getElementById("pickUp").innerHTML=("The package is too heavy to be transported.<br> Please consult other parcel delivery servicesfor more help");

	}
//Display all parcel details
	else{
//Display all parcel details
	document.getElementById("name").innerHTML= name;
	document.getElementById("pickup").innerHTML= pick;
	document.getElementById("des").innerHTML= dest;
	document.getElementById("weight").innerHTML= wt;
	document.getElementById("height").innerHTML= ht;
	document.getElementById("width").innerHTML= wd;
	document.getElementById("length").innerHTML= lg;
	document.getElementById("price").innerHTML= price;
	}
	//validate the parcel order
	if(pick==""||dest==""||wt==""||ht==""||wd==""||vl==""){
		alert("Please enter all parcel details");
		
}
//get the button that sends the parcel order
var btn= document.getElementById("orderBtn");
btn.onclick = function() {
    getorder();
}

