function checkname(name, s)
{
	var dp=/[A-Za-z]{3,20}/;
	
	if(dp.test(name))
	{
		document.getElementById(s).innerHTML="";
	}
	else
	{
		document.getElementById(s).innerHTML="Enter valid data";
	}
}
function capname(name, event)
{
	var keynum;
	var keychar;
	var numcheck;
	keynum = event.keyCode;
	keychar = String.fromCharCode(keynum);
	var numcheck=/[A-Za-z]/

	if(numcheck.test(keychar) && document.getElementById(name).value.length < 20)
	{
		document.getElementById(name).value+=keychar.toUpperCase();
	}
	return false;
}

function checkuserId(name,s)
{


	var dp=/[A-Za-z0-9@$^&*]{3,20}/
	if(dp.test(name))
	{
		document.getElementById(s).innerHTML="";
	}
	else
	{
		document.getElementById(s).innerHTML="Enter valid username";
	}
}

function checkpass(name,s)
{

	if (name.length>7 && name.length< 20)
	{
			document.getElementById(s).innerHTML="";
		
		if(!name.match(/[A-Z]/))
		{
			document.getElementById(s).innerHTML="Field should contain atleast one capital letter";		
			return;
		}
		else
		{
			document.getElementById(s).innerHTML="";
		}
		if(!name.match(/[a-z]/))
		{
			document.getElementById(s).innerHTML="Field should contain atleast one small letter";		
			return;
		}
		else
		{
			document.getElementById(s).innerHTML="";
		}
		if(!name.match(/[0-9]/))
		{
			document.getElementById(s).innerHTML="Field should contain atleast one digit";		
			return;
		}
		else
		{
			document.getElementById(s).innerHTML="";
		}
		if(!name.match(/\W/))
		{
			document.getElementById(s).innerHTML="Field should contain atleast one special character";		
			return;
		}
		else
		{
			document.getElementById(s).innerHTML="";
		}
	}
	else
	{
		document.getElementById(s).innerHTML="Field length should be at least 8 character";
	}
}

function checkmob(name,s)
{

	var dp=/[0-9]{10}/
	if(dp.test(name))
	{
		document.getElementById(s).innerHTML="";
	}
	else
	{
		document.getElementById(s).innerHTML="Enter valid Mobile number";
	}
}
function capmob1(name, event)
{
	var keynum;
	var keychar;
	var numcheck;
	keynum = event.keyCode;
	keychar = String.fromCharCode(keynum);

	var numcheck=/[0-9]/
	
	var x= document.getElementById(name);
	if(numcheck.test(keychar) && x.value.length <10)
	{
		x.value+=keychar;
	}
	return false;
}
function checkEmail(name, s) {
	// body...
	var dp=/^[A-Za-z0-9-_.+%]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/
	alert(name);
	alert(dp.test(name))
	if(dp.test(name))
	{
		document.getElementById(s).innerHTML="";
	}
	else
	{
		document.getElementById(s).innerHTML="Enter valid email";
	}
}
function checkpin(name, s) {

	var dp=/[0-9]{6}/
	if(dp.test(name))
	{
		document.getElementById(s).innerHTML="";
	}
	else
	{
		document.getElementById(s).innerHTML="Enter valid PIN Code";
	}
}
function copyAddr(val) {
	// body...
	var p = document.getElementById("add");
	var p1 = document.getElementById("add1");
	var c = document.getElementById("city");
	var c1 = document.getElementById("city1");
	var l = document.getElementById("land");
	var l1 = document.getElementById("land1");
	var s = document.getElementById("state");
	var s1 = document.getElementById("state1");
	var pi = document.getElementById("pin");
	var pi1 = document.getElementById("pin2");
	if (val)
	{
		p1.value = p.value;
		p1.disabled=true ;
		c1.value = c.value;
		c1.disabled=true ;
		l1.value = l.value;
		l1.disabled=true ;
		s1.value = s.value;
		s1.disabled=true ;
		pi1.value = pi.value;
		pi1.disabled=true ;
	}
	else
	{
		p1.disabled=false ;
		c1.disabled=false ;
		l1.disabled=false ;
		s1.disabled=false ;
		pi1.disabled=false ;
		p1.value =""
		c1.value ="" 
		l1.value =""
		s1.value =""
		pi1.value =""
	}
}
function checkme(chk, price, qty, amt) {
	// body...
	var q = document.getElementById(qty);
	var p = document.getElementById(price);
	var a = document.getElementById(amt);
	if (chk)
	{
		q.disabled=false;

		q.value=1; 

		mul(price, qty, amt);


	}
	else
	{
		var a1 = q.value;
		var a2 = p.innerHTML;
		q.disabled=true;
		q.value="";
		a.innerHTML="";
		total(-1*a1*a2);
	}

}
function mul(price, qty, amt) {
	// body...
	var q = document.getElementById(qty);
	var p = document.getElementById(price);
	var a = document.getElementById(amt);

	a.innerHTML=q.value*p.innerHTML;
	total(a.innerHTML);

}
function total(val) 
{
	var sum = 0;
	var arr = document.getElementsByName("amt");
	
	for(let i=0; i<arr.length; i++)
	{
		sum += parseInt(arr[i].innerHTML || 0);
	}
	document.getElementById("total-amt").innerHTML = sum;
}