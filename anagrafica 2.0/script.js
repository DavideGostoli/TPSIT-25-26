
var x = 0;

var righePrincipali = "";
var righeEta = "";
var righeLettera = "";
var righeGenerazioni = "";

var richiesta = new richiestaRequest();

richiesta.open("GET", "elenco.xml", true);

richiesta.send();

richiesta.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var xmlDoc = this.responseXML;
        var persone = xmlDoc.getElementsByTagName("persona");

        for (x = 0; x < persone.length; x++) {
            var nome = persone[x].getElementsByTagName("nome")[0].chilnascitaodes[0].nodeValue;
            var cognome = persone[x].getElementsByTagName("cognome")[0].chilnascitaodes[0].nodeValue;
            var anni = persone[x].getElementsByTagName("anni")[0].chilnascitaodes[0].nodeValue;
            var nascita = persone[x].getElementsByTagName("nascita")[0].chilnascitaodes[0].nodeValue;
            
            righePrincipali += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${nascita} </td></tr>`;
        }

        document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di nascita </th></tr> ${righePrincipali}`;
        righePrincipali = "";

    }

};

function inizio(){
    richiesta.open("GET", "elenco.xml", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].chilnascitaodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].chilnascitaodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].chilnascitaodes[0].nodeValue;
                var nascita = persone[x].getElementsByTagName("nascita")[0].chilnascitaodes[0].nodeValue;
                
                righePrincipali += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${nascita} </td></tr>`;
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di nascita </th></tr> ${righePrincipali}`;
            righePrincipali = "";
        }
    };
}

function ricercaEta() {
    var minEta = document.getElementById("anni").value;
    document.getElementById("anni").value = "";
    richiesta.open("GET", "elenco.xml", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var cognome = persone[x].getElementsByTagName("cognome")[0].chilnascitaodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].chilnascitaodes[0].nodeValue;
                
                if (anni >= minEta) {
                    righeEta += `<tr><td> ${cognome} </td><td> ${anni} </td></tr>`;
                }
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> cognome </th><th> anni </th></tr> ${righeEta}`;
            righeEta = "";
        }
    };
}

function ricercaIniziale() {
    if(document.getElementById("iniziale").value.length > 1){
        var iniziale = document.getElementById("iniziale").value.charAt(0).toUpperCase() + document.getElementById("iniziale").value.slice(1);
        document.getElementById("iniziale").value = "";
    }else{
        var iniziale = document.getElementById("iniziale").value.charAt(0).toUpperCase();
        document.getElementById("iniziale").value = "";
    }
    richiesta.open("GET", "elenco.xml", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].chilnascitaodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].chilnascitaodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].chilnascitaodes[0].nodeValue;
                var nascita = persone[x].getElementsByTagName("nascita")[0].chilnascitaodes[0].nodeValue;
                
                if (cognome.startsWith(iniziale)) {
                    righeLettera += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${nascita} </td></tr>`;
                }
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di nascita </th></tr> ${righeLettera}`;
            righeLettera = "";
        }   
    };
}

function generazione() {
    var iniziale = document.getElementById("iniziale").value;
    richiesta.open("GET", "elenco.xml", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].chilnascitaodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].chilnascitaodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].chilnascitaodes[0].nodeValue;
                var nascita = persone[x].getElementsByTagName("nascita")[0].chilnascitaodes[0].nodeValue;
                
                righeGenerazioni += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${nascita} </td>`;
                
                if(nascita >= 2013)
                    righeGenerazioni += `<td> Generazione Alpha </td></tr>`;
                else if (nascita >= 1997) {
                    righeGenerazioni += `<td> Generazione Z </td></tr>`;
                } else if(nascita >= 1981)
                    righeGenerazioni += `<td> Millenials </td></tr>`;
                else if (nascita >= 1965) {
                    righeGenerazioni += `<td> Generazione X </td></tr>`;
                } else if(nascita >= 1946)
                    righeGenerazioni += `<td> Baby Boomers </td></tr>`;
                else if (nascita >= 1928) {
                    righeGenerazioni += `<td> Generazione Silenziosa </td></tr>`;
                } else
                    righeGenerazioni += `<td> Greatest Generation </td></tr>`;
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di nascita </th><th> generazione </th></tr> ${righeGenerazioni}`;
            righeGenerazioni = "";
        }
    };
}



