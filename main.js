// velger button fra HTML og gir den klikk-funksjon
document.querySelector('#button').addEventListener("click", function(){
    var listItems = ["jul", "frukt", "middag", "bil", "sommer", "vinter", "vår", "høst", "ski",
                     "fjell", "bursdag", "skog", "familie", "sport", "kjøkken", "barnehage", "kunst", 
                     "bryllup", "eventyr", "krig", "kjærlighet", "musikk", "Norge", "Europa", "Afrika",
                     "Asia", "Australia", "USA", "kropp", "klima", "miljø", "dyr", "bondegård", "helse",
                     "sosiale medier", "barn", "voksne", "familie", "fengsel", "fisk", "skole", "idrett",
                     "tog", "konge", "dronning", "rus", "alkohol", "havet", "språk", "påske", "17.mai",
                     "nyttårsaften", "trafikk", "teknologi", "kristendom"];

    // velger random fra listen 
    var item = listItems[Math.floor(Math.random()*listItems.length)];

    document.querySelector('#list-item').innerHTML = item;
});