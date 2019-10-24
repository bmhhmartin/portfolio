function check(){
	var name= document.getElementById('sname');	
	var email= document.getElementById('semail');
	var user= document.getElementById('username');	
	var pass= document.getElementById('password');	
	
	if(name.value==''){
		document.getElementById('name_error').innerHTML='Please Enter Your Name!';
		name.focus();
		return false;
	}else{
		document.getElementById('name_error').innerHTML='';
		}

	if(user.value==''){
		document.getElementById('username_error').innerHTML='Please Enter Subject!';
		user.focus();
		return false;
	}else{
		document.getElementById('username_error').innerHTML='';
	}
	
	if(email.value==''){
		document.getElementById('email_error').innerHTML='Please Enter Your Email Address!';
		email.focus();
		return false;
	}else{
		document.getElementById('email_error').innerHTML='';
	}
	
	
	
	if(pass.value==''){
		document.getElementById('pass_error').innerHTML='Please Type Your Message';
		pass.focus();
		return false;
	}else{
		document.getElementById('pass_error').innerHTML='';
	}
}