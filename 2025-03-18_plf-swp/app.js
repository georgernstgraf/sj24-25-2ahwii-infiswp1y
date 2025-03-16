// State
const state = {};
// 1.APPLICATION STATE;
// 2.STATE ACCESSORS / MUTATORS FN'S
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

// 5.RENDER FN
function render() {
    ticketAusgabeTextarea.textContent = "TODO";
    guthabenSpan.textContent = "TODO";
    fahrpreisSpan.textContent = "TODO";
    einnahmenSpan.textContent = "TODO";
    fahrpreisSpan.textContent = "TODO";
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
    try {
        "TODO";
        einwerfenInput.value = "";
    } catch (err) {
        "TODO";
    } finally {
        render();
    }
}
function onZielSelect() {
    "TODO";
    render();
}
function onTicketKaufen() {
    try {
        "TODO";
    } catch (e) {
        "TODO";
    } finally {
        render();
    }
}
function onAnzahlChange() {
    const x = new Date();
    console.log(
        `onAnzahlChange fired ${x.getUTCMinutes()}:${x.getUTCSeconds()}:${x.getUTCMilliseconds()}`,
    );
    try {
        "TODO";
    } catch (e) {
        "TODO";
    } finally {
        render();
    }
}
function onReset() {
    "TODO";
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
zielSelect.innerHTML = Object.keys(zieleUndPreise)
    .map((e) => `<option value="${e}">${e}</option>`)
    .join("\n");
render();
