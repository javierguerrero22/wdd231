const artistBtn = document.getElementById('artistBtn');
const artistInput = document.getElementById('artistInput');
const artistResults = document.getElementById('artist-results');

async function getArtistData() {
    const artist = artistInput.value.trim();
    if (!artist) return;

    artistResults.innerHTML = "<p class='warning'>Loading artist data...</p>";

    try {
        const response = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(artist)}`);
        const data = await response.json();

        if (data.artists) {
            displayArtist(data.artists[0]);
        } else {
            artistResults.innerHTML = "<p class='warning'>Artist not found.</p>";
        }
    } catch (error) {
        console.error("Error:", error);
        artistResults.innerHTML = "<p class='warning'>Service temporary unavailable.</p>";
    }
}

function displayArtist(artist) {
    artistResults.innerHTML = `
        <article class="card">
            <img src="${artist.strArtistThumb}" alt="${artist.strArtist}" style="width:100%; border-radius:8px;">
            <h2>${artist.strArtist}</h2>
            <p><strong>Genre:</strong> ${artist.strGenre}</p>
            <p><strong>Origin:</strong> ${artist.strCountry}</p>
            <p style="font-size: 0.9rem; margin-top:10px;">${artist.strBiographyEN}</p>
        </article>
    `;
}

artistBtn.addEventListener('click', getArtistData);
artistInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getArtistData();
    }
});