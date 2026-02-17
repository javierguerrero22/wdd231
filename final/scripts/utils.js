// Funciones de utilidad para Local Storage
export function saveLastChord(chordName, displayElement) {
    localStorage.setItem("last-chord-ls", chordName);
    if (chordName && displayElement) {
        displayElement.textContent = `Last practiced: ${chordName}`;
    }
}

export function displayLastChord(displayElement) {
    const savedChord = localStorage.getItem("last-chord-ls");
    if (savedChord && displayElement) {
        displayElement.textContent = `Last practiced: ${savedChord}`;
    }
}