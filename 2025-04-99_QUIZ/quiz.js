// Klasse Frage erstellen
class Frage {
  constructor(frage, optionen, antwort) {
      this.frage = frage;
      this.optionen = optionen;
      this.antwort = antwort;
  }

  // Methode zum Anzeigen der Frage und der Optionen
  anzeigen() {
      console.log(`Frage: ${this.frage}`);
      console.log('Optionen:');
      this.optionen.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
      });
  }

  // Methode zum Prüfen der Antwort
  pruefen(antwort) {
      return this.antwort === antwort;
  }
}

// Den Inhalt der Datei einlesen und in ein Array von Frage-Objekten umwandeln
const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("fragen.json"); // Hier wird die JSON-Datei synchron gelesen
const jsonString = decoder.decode(data); // Dekodieren des Inhalts der Datei
const jsonData = JSON.parse(jsonString); // In ein JavaScript-Objekt umwandeln

// Array mit Frage-Objekten erstellen
const fragen = jsonData.map(item => new Frage(item.frage, item.optionen, item.antwort));

// Beispiel: Jede Frage anzeigen
fragen.forEach((frage, index) => {
  console.log(`Frage ${index + 1}:`);
  frage.anzeigen();
  console.log('---');
});
