let input = document.getElementById("bundeslandInfo"); 
let results = document.getElementById("bundeslandInfoErgebnis")


function check(event){
    event.preventDefault();

    let badenwuerttemberg = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
    let bayern = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
    let berlin = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
    let brandenburg = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
    let bremen = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
    let hamburg = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
    let hessen = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
    let mecklenburg = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
    let niedersachsen = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
    let nrw = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
    let rheinland = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
    let saarland = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
    let sachsen = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
    let sachsenAnhalt = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
    let schleswig = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
    let thueringen = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
    let notDefined = "Ein solches Bundesland gibt es in Deutschland nicht";

    switch (input.value) {
        case "Baden-Württemberg": {
           results.innerHTML = badenwuerttemberg;
           break;
        }
        case "Bayern": {
            results.innerHTML = bayern;
            break;
        }
        case "Berlin": {
            results.innerHTML = berlin;
            break;
        }
        case "Brandenburg": {
            results.innerHTML = brandenburg;
            break;
        }
        case "Bremen": {
            results.innerHTML = bremen;
            break;
        }
        case "Hamburg": {
            results.innerHTML = hamburg;
            break;
        }
        case "Hessen": {
            results.innerHTML = hessen;
            break;
        }
        case "Mecklenburg-Vorpommern": {
            results.innerHTML = mecklenburg;
            break;
        }
        case "Niedersachsen": {
            results.innerHTML = niedersachsen;
            break;
        }
        case "Nordrhein-Westfalen": {
            results.innerHTML = nrw;
            break;
        }
        case "Rheinland-Pfalz": {
            results.innerHTML = rheinland;
            break;
        }
        case "Saarland": {
            results.innerHTML = saarland;
            break;
        }
        case "Sachsen": {
            results.innerHTML = sachsen;
            break;
        }
        case "Sachsen-Anhalt": {
            results.innerHTML = sachsenAnhalt;
            break;
        }
        case "Schleswig-Holstein": {
            results.innerHTML = schleswig;
            break;
        }
        case "Thüringen": {
            results.innerHTML = thueringen;
            break;
        }
        default: {
            results.innerHTML = notDefined;
            break;
        }
    }     

    

}