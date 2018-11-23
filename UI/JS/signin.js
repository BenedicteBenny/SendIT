var count= 2;
function validate()
{
	var em = document.login.email.value;
	var pw = document.login.password.value;
	var valid= false;
	var emailArray =["benedicte@gmail.com", "beneza@gmail.com"];
	var pwArray = ["12345","54321"];
	for(var i=0 ;i< emailArray.length;i++)
	{
		if((em == emailArray[i]) && (pw == pwArray[i]))
		{
			valid = true;
			break;
		}
	}
	if(valid)
	{
		alert("You are successfully logged in");
		window.location ="https://www.youtube.com/watch?v=rkn9uf8qb7w";
		return false;
	}
	var again= " tries";
	if(count==1)
	{
		again="Try again";
	}
	if(count>=1)
	{
		alert("Wrong password or email")
		count--;
	}
	else{
		alert("You are now blocked");
		document.login.email.disabled = true;
		document.login.password.disabled = true;
		return false;
	}

}