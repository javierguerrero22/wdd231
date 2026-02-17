async function getWeeklyRiff() {
    const riffContainer = document.querySelector('#riff-weekly');
    if (!riffContainer) return;

    try {
        
        const responseJSON = await fetch('data/riffs.json');
        const riffs = await responseJSON.json();

     
        const now = new Date();
        const oneJan = new Date(now.getFullYear(), 0, 1);
        const weekNumber = Math.ceil((((now - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);

        
        const selectedRiff = riffs[weekNumber % riffs.length];

        
        const proxy = "https://corsproxy.io/?";
        const apiUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(selectedRiff.artist)}`;
        
        const apiResponse = await fetch(proxy + apiUrl);
        const apiData = await apiResponse.json();

        
        const artistImage = (apiData.artists && apiData.artists[0]) 
            ? apiData.artists[0].strArtistThumb 
            : "https://picsum.photos/400/300?guitar";

        
        riffContainer.innerHTML = `
            <div class="riff-content">
                <p class="label-red">WEEKLY RIFF CHALLENGE</p>
                <h3>${selectedRiff.song}</h3>
                <p>Artist: <strong>${selectedRiff.artist}</strong></p>
                <p>Search for the tabs of this riff and master the fretboard this week!</p>
                <a href="https://www.google.com/search?q=${selectedRiff.artist}+${selectedRiff.song}+tabs" 
                   target="_blank" class="cta-button">Find Tabs Now</a>
            </div>
            <div class="riff-image">
                <img src="${artistImage}" alt="${selectedRiff.artist}" loading="lazy">
            </div>
        `;
        console.log("Desafío semanal cargado exitosamente");

    } catch (error) {
        console.error("Error al cargar el riff semanal:", error);
    }
}

getWeeklyRiff();

