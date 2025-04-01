// State
// 1.APPLICATION STATE;
const state = {
    guthaben: 0,
    fahrpreis: 0,
    ziel: null,
    anzahlPersonen: 1,
    einnahmen: 0,
    textAusgabe: "Bitte wählen Sie Ihr Ziel!",
};
const zieleUndPreise = {
    Bregenz: 90,
    Eisenstadt: 13,
    Graz: 40,
    Innsbruck: 80,
    Klagenfurt: 60,
    Linz: 40,
    Salzburg: 60,
    "St. Pölten": 15,
};
// 2.STATE ACCESSORS / MUTATORS FN'S
function state_fahrgaeste(anzahl) {
    state.anzahlPersonen = anzahl;
    state.fahrpreis = zieleUndPreise[state.ziel] * anzahl;
    state_calculate_textAusgabe();
}
function state_change_ziel(ziel) {
    const einzelpreis = zieleUndPreise[ziel];
    state.ziel = ziel;
    state.fahrpreis = einzelpreis * state.anzahlPersonen;
    state_calculate_textAusgabe();
}
function state_einwerfen(betrag) {
    state.guthaben += betrag;
    state_calculate_textAusgabe();
}
function state_calculate_textAusgabe() {
    if (!state.ziel) {
        state.textAusgabe = "Bitte wählen Sie Ihr Ziel!";
        return;
    }
    const noch_nötig = state.fahrpreis - state.guthaben;
    if (noch_nötig > 0) {
        state.textAusgabe =
            `Ziel: ${state.ziel}\nBitte werfen Sie noch ${noch_nötig}€ ein!`;
    } else {
        state.textAusgabe =
            `Drücken Sie auf "Ticket kaufen"\num Ihr Ticket zu erhalten!`;
    }
}

// 3.DOM Node Refs
const einwerfenInput = document.getElementById("einwerfenBetrag");
const einwerfenButton = document.getElementById("einwerfenButton");
const zielSelect = document.getElementById("ziel");
const anzahlPersonenInput = document.getElementById("anzahlPersonen");
const fahrpreisSpan = document.getElementById("fahrpreis");
const guthabenSpan = document.getElementById("guthaben");
const ticketAusgabeTextarea = document.getElementById("ticketAusgabe");
const einnahmenSpan = document.getElementById("einnahmen");
const ticketKaufen = document.getElementById("ticketKaufen");
const resetBtn = document.getElementById("reset");

// 4. dom node creation
// 5.RENDER FN
function render() {
    ticketAusgabeTextarea.textContent = state.textAusgabe;
    guthabenSpan.textContent = state.guthaben;
    fahrpreisSpan.textContent = state.fahrpreis;
    einnahmenSpan.textContent = state.einnahmen;
    fahrpreisSpan.textContent = state.fahrpreis;
}
// These functions will render the application state to the DOM
// IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re - render of the UI;

// 6.EVENT HANDLERS
// These functions handle user interaction e.g.button clicks, key presses etc.
// These functions will call the state mutators and then call the render function
//     The naming convention for the event handlers is on < Event >
//         Here we will create a functions that will handle e.g.a "click" event on a button.
function onEinwurf() {
    const geld = einwerfenInput.valueAsNumber;
    if (isNaN(geld) || geld <= 0) {
        state.textAusgabe = "Bitte geben Sie einen gültigen Betrag ein!";
    } else {
        state_einwerfen(geld);
    }
    render();
}
function onZielSelect() {
    state_change_ziel(zielSelect.value);
    render();
}
function onTicketKaufen() {
    if (!state.ziel) {
        state.ausgabe = "Bitte wählen Sie ein Ziel!";
    } else if (state.guthaben < state.fahrpreis) {
        state.ausgabe = "Nicht genug Guthaben!";
    } else {
        const restgeld = state.guthaben - state.fahrpreis;
        state.einnahmen += state.fahrpreis;
        state.guthaben = 0;

        state.textAusgabe = `=== Fahrkarte nach ${state.ziel} ===\n` +
            `Einzelpreis: ${zieleUndPreise[state.ziel]} €\n` +
            `Anzahl der Fahrgäste: ${state.anzahlPersonen}\n` +
            `Summe: ${state.fahrpreis} €\n` +
            `Gegeben: ${state.fahrpreis + restgeld} €\n` +
            `Restgeld: ${restgeld} €\n` +
            `============================`;
    }
    render();
}
function onAnzahlChange() {
    const fahrgaeste = anzahlPersonenInput.value;
    state_fahrgaeste(fahrgaeste);
    render();
}
function onReset() {
    state.guthaben = 0,
        state.fahrpreis = 0,
        state.ziel = null,
        state.anzahlPersonen = 1,
        state.textAusgabe = "Bitte wählen Sie Ihr Ziel!";
    einwerfenInput.value = "";
    zielSelect.value = "Zielwahl:";
    anzahlPersonenInput.value = 1;
    render();
}
// 7.INIT BINDINGS
// These are the initial bindings of the event handlers, i.e.register the handlers of Pt. 6 with the DOM Node Refs of;
// Pt. 3;
einwerfenInput.addEventListener("keyup", (e) => {
    if (e.key != "Enter") {
        return;
    }
    onEinwurf();
});
einwerfenButton.addEventListener("click", () => {
    onEinwurf();
});
zielSelect.addEventListener("change", onZielSelect);
anzahlPersonenInput.addEventListener("change", onAnzahlChange);
ticketKaufen.addEventListener("click", onTicketKaufen);
resetBtn.addEventListener("click", onReset);

// 8.INITIAL RENDER
// Here will call the render function (Pt. 5) to render the initial state of the application;
const options = Object.keys(zieleUndPreise); // Array
options.unshift("Zielwahl:"); // String vorne anfügen
zielSelect.innerHTML = options
    .map((e) => `<option value="${e}">${e}</option>`)
    .join("\n");
render();
