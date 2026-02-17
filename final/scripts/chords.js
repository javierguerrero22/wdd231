
const searchBtn = document.getElementById('searchBtn');
const chordInput = document.getElementById('chordInput');
const resultsContainer = document.getElementById('chord-results');


async function getChordData() {
    const userInput = chordInput.value.trim();
    
    if (!userInput) {
        resultsContainer.innerHTML = "<p class='warning'>Please enter a chord name (e.g., C, Am, G5).</p>";
        return;
    }

    resultsContainer.innerHTML = "<p class='warning'>Searching RiffMaster Database...</p>";

    try {
        
        const response = await fetch('data/chords.json');
        
        if (!response.ok) {
            throw new Error("Could not load the chord database.");
        }

        const data = await response.json();

        
        const foundChord = data.chords.find(c => 
            c.name.toLowerCase() === userInput.toLowerCase()
        );

        if (foundChord) {
            renderChordCard(foundChord);
        } else {
            resultsContainer.innerHTML = `
                <section class="card" id='chord-card error'>
                    <h2>Chord Not Found</h2>
                    <p>We couldn't find "<strong>${userInput}</strong>".</p>
                    <p>Try basic chords (C, G, D) or extensions like <strong>C5</strong> or <strong>Aadd9</strong>.</p>
                </section>`;
        }

    } catch (error) {
        console.error("Error:", error);
        resultsContainer.innerHTML = "<p class='error'>Service temporarily unavailable. Check if chords.json exists.</p>";
    }
}


function renderChordCard(chord) {
    resultsContainer.innerHTML = `
        <article class="card" id='chord-card'>
            <h2>${chord.full_name}</h2>
            <div class="fret-box">${chord.frets}</div>
            <p class="tuning-info">Strings: E | A | D | G | B | e</p>
            <div class="chord-details">
                <p><strong>Fingering:</strong> ${chord.fingers}</p>
                <p class="hint">Search tip: Try adding '5' for Power Chords or 'add9'.</p>
            </div>
        </article>
    `;
}

searchBtn.addEventListener('click', getChordData);

chordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getChordData();
    }
});