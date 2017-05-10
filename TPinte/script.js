


 
function bouton() {
	var papa = document.getElementById("parent").classList;

	if (papa.contains("parent")) {			
			papa.remove("parent");
			papa.add("none");


	
	}	else 	{
			papa.remove("none");
			papa.add("parent");

	}
}