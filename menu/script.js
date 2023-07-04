function schoolList(){
	document.getElementById('school-list').classList.toggle('show');
}

window.onclick = function(event){
	if(!event.target.matches('.school')){
		if(document.getElementById('school-list').classList.contains('show')){
			document.getElementById('school-list').classList.remove('show');
		}
	}
}