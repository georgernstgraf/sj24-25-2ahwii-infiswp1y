// Klasse Frage erstellen
import { fragen } from "./fragen.js"; // Importiere die Fragen aus der JSON-Datei
globalThis.fragen = fragen; // Globales Array für die Fragen
class Frage {
    constructor(frage, optionen, antwort) {
        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }

    // Methode zum Anzeigen der Frage und der Optionen
    anzeigen() {
        console.log(`Frage: ${this.frage}`);
        console.log("Optionen:");
        this.optionen.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    // Methode zum Prüfen der Antwort
    pruefen(antwort) {
        return this.antwort === antwort;
    }
}

const fragenObjekte = fragen.map((e) =>
    new Frage(e.frage, e.optionen, e.antwort)
);

// Beispiel: Jede Frage anzeigen
fragenObjekte.forEach((frage, index) => {
    console.log(`Frage ${index + 1}:`);
    frage.anzeigen();
    console.log("---");
});
