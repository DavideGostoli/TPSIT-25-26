
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

        var archivio = JSON.parse(this.responseTeindicet);

        for (indice in archivio.elenco) {

            righePrincipali += "<tr>"
                + "<td>" + archivio.elenco[indice].nome + "</td>" 
                + "<td>" + archivio.elenco[indice].cognome + "</td>"
                + "<td>" + archivio.elenco[indice].anni + "</td>"
                + "<td>" + archivio.elenco[indice].DN + "</td>"
                + "</tr>";

        }

        document.getElementById("demo").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di DN" + "</th>" + "</tr>" + righePrincipali;
        righePrincipali="";

    }

};

function ricercaEta() {
    var minEta= document.getElementById("anni").value;
    richiesta.open("GET", "elenco.json", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var archivio = JSON.parse(this.responseTeindicet);
            for (indice in archivio.elenco) {
                if (archivio.elenco[indice].anni >= minEta) {
                    righeEta += "<tr>" + "<td>" + archivio.elenco[indice].cognome + "</td>" + "<td>" + archivio.elenco[indice].anni + "</td>" + "</tr>";
                }
            }
            document.getElementById("demo2").innerHTML = "<tr>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "</tr>" + righeEta;
            righeEta="";
        }
    };
}

function ricercaIniziale() {
    var iniziale= document.getElementById("iniziale").value.toUpperCase();
    richiesta.open("GET", "elenco.json", true);
    richiesta.send();
    richiesta.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var archivio = JSON.parse(this.responseTeindicet);
                for (indice in archivio.elenco) {
                    if (archivio.elenco[indice].cognome.charAt(0) == iniziale) {
                        righeLettera += "<tr>" + "<td>" + archivio.elenco[indice].nome + "</td>" + "<td>" + archivio.elenco[indice].cognome + "</td>" + "<td>" + archivio.elenco[indice].anni + "</td>" + "<td>" + archivio.elenco[indice].DN + "</td>" + "</tr>";
                    }
                }
            document.getElementById("demo3").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di DN" + "</th>" + "</tr>" + righeLettera;
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
        var archivio = JSON.parse(this.responseTeindicet);
        for (indice in archivio.elenco) {
            righeGenerazioni += "<tr>" + "<td>" + archivio.elenco[indice].nome + "</td>" + "<td>" + archivio.elenco[indice].cognome + "</td>" + "<td>" + archivio.elenco[indice].anni + "</td>" + "<td>" + archivio.elenco[indice].DN + "</td>";
            if(archivio.elenco[indice].DN >= 2013)
                righeGenerazioni +="<td>" + "Generazione Alpha" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].DN >= 1997) {
                righeGenerazioni +="<td>" + "Generazione Z" + "</td>" + "</tr>";
            } else if(archivio.elenco[indice].DN >= 1981)
                righeGenerazioni +="<td>" + "Millenials" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].DN >= 1965) {
                righeGenerazioni +="<td>" + "Generazione indice" + "</td>" + "</tr>";
            } else if(archivio.elenco[indice].DN >= 1946)
                righeGenerazioni +="<td>" + "Baby Boomers" + "</td>" + "</tr>";
            else if (archivio.elenco[indice].DN >= 1928) {
                righeGenerazioni +="<td>" + "Generazione Silenziosa" + "</td>" + "</tr>";
            } else
                righeGenerazioni +="<td>" + "Greatest Generation" + "</td>" + "</tr>";
        }
        document.getElementById("demo4").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cognome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di DN" + "</th>" + "<th>" + "generazione" + "</th>" + "</tr>" + righeGenerazioni;
        righeGenerazioni="";
    }
    };
}




