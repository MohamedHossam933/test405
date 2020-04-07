var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "admin"
	},
	{ // Object @ 1 index
		username: "Admin",
		password: "Admin"
	},
	{ // Object @ 2 index
		username: "ADMIN",
		password: "ADMIN"
	}

]

function getInfo() 
{
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) 
	{
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) 
		{
            // console.log(username + " is logged in!!!")
            window.location.href = "home.html";
			// stop the function if this is found to be true
			return
		}
	}
	alert ("incorrect username or password")
}

function digits(allowcomma, allownegative)
{
	var e = event || window.event;  // get event object
    var key = e.keyCode // get key cross-browser


    if(key==8 || key==46 || key == 9 || key==17 || key==91 || key==18 || 
        key==116 || key==89 || key==67 || key==88 || key==35 || key==36) //back, delete tab, ctrl, win, alt, f5, paste, copy, cut, home, end
        return true;

    if(key == 109 && allownegative)
        return true;

    if(key == 190 && allowcomma)
        return true;

    if(key>=37 && key<=40) //arrows
        return true;

    if(key>=48 && key<=57) // top key
        return true;

    if(key>=96 && key<=105) //num key
        return true;
    console.log('Not allowed key pressed '+key);

    if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
}
