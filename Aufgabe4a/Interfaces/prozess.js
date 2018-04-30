var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", refresh2);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let select = document.getElementById("select");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            studiengang: select.value,
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        console.log(studi.studiengang);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.studiengang;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
    function refresh2(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let inputs = document.getElementsByTagName("input");
        let matrikel = inputs[6].value;
        console.log(matrikel);
        let studi = L04_Interfaces.studiHomoAssoc[matrikel];
        console.log(studi);
        if (typeof studi === "undefined") {
            output.value = "No student found.";
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.studiengang;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
        console.group("Simple Array");
        console.log(L04_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L04_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//Ende namespace 
//# sourceMappingURL=prozess.js.map