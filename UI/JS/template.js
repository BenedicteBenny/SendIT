// Get the modal
var modal = document.getElementById("orderModal");

//Get parcel data 
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

	
//validate the parcel order
	if(pick=="" || dest=="" || wt=="" || ht=="" || wd=="" || nm=="" || lg==""){
		alert("Please enter all parcel details");
		modal.style.display = "none";
	}	
//Display all parcel details
	else{
		console("it is working");
		document.getElementById("name").innerHTML= nm;
		document.getElementById("pickup").innerHTML= pick;
		document.getElementById("des").innerHTML= dest;
		document.getElementById("weight").innerHTML= wt;
		document.getElementById("height").innerHTML= ht;
		document.getElementById("width").innerHTML= wd;
		document.getElementById("length").innerHTML= lg;
		document.getElementById("price").innerHTML= price;
		
	}

//
}
//Display the parcel data in the modal

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    getorder();

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//use cancel to come back to parcel order

	var cacel=document.getElementById("modal-cancel");
	cacel.onclick=function(){
		modal.style.display=none;	
	}

