function getConfirmation(){
    var answer = confirm ("Kliknij OK jeżeli zgadzasz się na udostępnienie nam swojej lokalizacji. " +
                          "Pomoże to nam pokazać Ci zwierzaki szukające domu najbliżej Ciebie. " +
                          "Klikając CANCEL zobaczysz potrzebujące zwierzaki w całym Krakowie")
    if (!answer)
        window.location="http://www.google.com/"
}

// if (answer)
//     alert ("Woo Hoo! So am I.")
// else
//     alert ("Darn. Well, keep trying then.")