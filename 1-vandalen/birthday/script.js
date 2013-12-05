"use strict";

window.onload = function(){

	
	var birthday = function(date)
    {
        var time = new Date();
        var inputTime = new Date(date.replace(/(\d{4})\.(\d{2})\.(\d{2})/, '3-2-1'));
        inputTime.setFullYear(time.getFullYear());
        
        if (isNaN(inputTime))
        {
            throw new Error("Ange ett datum i formatet MM-DD-YYYY");
        }
        
        if (inputTime .getTime() < time.getTime())
        {
            inputTime.setFullYear(time.getFullYear()+1);
        }
        if (time.getHours() > 12)
        {
            return Math.round((inputTime.getTime() - time.getTime())/(1000*60*60*24) +1);
        }
        else
        {
            return Math.round((inputTime.getTime() - time.getTime())/(1000*60*60*24));
        } 
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};