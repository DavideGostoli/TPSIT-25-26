

var indice = 0;

var righePrincipali = "";
var righeEta = "";
var righeLettera = "";
var righeGenerazioni = "";

var richiesta = new richiestaRequest();

richiesta.open("GET", "elenco.json", true);

richiesta.send();

richiesta.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var archivio = JSON.parse(this.responseText);

        for (indice in archivio.elenco) {

            richePrinicipali += "<tr>" 
                + "<td>" + archivio.elenco[indice].nome + "</td>" 
                + "<td>" + archivio.elenco[indice].cognome + "</td>" 
                + "<td>" + archivio.elenco[indice].anni + "</td>"
                + "<td>" + archivio.elenco[indice].nascita + "</td>" + "</tr>";

        }

        document.getElementById("tabPrincipale").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "</tr>" + righePrincipali;
        righePrincipali="";

    }

};

function ricercaEta() {
    var min= document.getElementById("anni").value;
    richiesta.open("GET", "elenco.json", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var archivio = JSON.parse(this.responseText);
            for (indice in archivio.elenco) {
                if (archivio.elenco[indice].anni >= min) {
                    righeEta += "<tr>" 
                        + "<td>" + archivio.elenco[indice].cognome + "</td>" 
                        + "<td>" + archivio.elenco[indice].anni + "</td>" + "</tr>";
                }
            }
            document.getElementById("tabEta").innerHTML = "<tr>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "</tr>" + righeEta;
            righeEta="";
        }
    };
}

function ricercaIniziale() {
    var lettera= document.getElementById("lettera").value.toUpperCase();
    richiesta.open("GET", "elenco.json", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var archivio = JSON.parse(this.responseText);
                for (indice in archivio.elenco) {
                    if (archivio.elenco[indice].cognome.charAt(0) == lettera) {
                        righeLettera += "<tr>" 
                            + "<td>" + archivio.elenco[indice].nome + "</td>"
                            + "<td>" + archivio.elenco[indice].cognome + "</td>" 
                            + "<td>" + archivio.elenco[indice].anni + "</td>" +
                            "<td>" + archivio.elenco[indice].nascita + "</td>" + "</tr>";
                    }
                }
            document.getElementById("tabIniziale").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "</tr>" + righeLettera;
            righeLettera="";
        }   
    };
}

function generazione() {
    var iniziale= document.getElementById("iniziale").value;
    richiesta.open("GET", "elenco.json", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        var archivio = JSON.parse(this.responseText);
        for (indice in archivio.elenco) {
            righeGenerazioni += "<tr>" 
                + "<td>" + archivio.elenco[indice].nome + "</td>" 
                + "<td>" + archivio.elenco[indice].cognome + "</td>" 
                + "<td>" + archivio.elenco[indice].anni + "</td>" 
                + "<td>" + archivio.elenco[indice].nascita + "</td>";
            
            if(archivio.elenco[indice].nascita >= 2013)
                righeGenerazioni +="<td>" + "Generazione Alpha" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].nascita >= 1997) {
                righeGenerazioni +="<td>" + "Generazione Z" + "</td>" + "</tr>";
            } else if(archivio.elenco[indice].nascita >= 1981)
                righeGenerazioni +="<td>" + "Millenials" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].nascita >= 1965) {
                righeGenerazioni +="<td>" + "Generazione indice" + "</td>" + "</tr>";
            } else if(archivio.elenco[indice].nascita >= 1946)
                righeGenerazioni +="<td>" + "Baby Boomers" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].nascita >= 1928) {
                righeGenerazioni +="<td>" + "Generazione Silenziosa" + "</td>" + "</tr>";
            } else
                righeGenerazioni +="<td>" + "Greatest Generation" + "</td>" + "</tr>";
        }
        document.getElementById("tabGenerazioni").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "<th>" + "generazione" + "</th>" + "</tr>" + righeGenerazioni;
        righeGenerazioni="";
    }
    };
}
