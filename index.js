
const password=document.getElementById('password');
const toggle=document.getElementById('toggle');
var state = false;

function showHide(){
	if (password.type==='password'){
		password.setAttribute('type','text');
		toggle.classList.add('hide')

		}
	else{
		password.setAttribute('type','password');
		toggle.classList.add('show')
	}
}

