function calcul() {
    var redouanEssoubai;
  
   
    let a = parseFloat(document.getElementById("inpout").querySelector("input").value); // Mortgage amount
    let b = parseFloat(document.getElementById("inputt").querySelector("input").value); // Mortgage term
    let c = parseFloat(document.getElementById("hinput").querySelector("input").value); // Interest rate
  
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    redouanEssoubai = (a * b * (1 + b)) / (((1 + b)** c) - 1);

    document.getElementById("hpp").innerHTML = `<h1 style="color: orange;"> RESULT</h1><p style="color: orange;">${redouanEssoubai}</p>`;
  }