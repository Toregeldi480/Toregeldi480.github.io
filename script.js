const colors = ["#f71184", "#d11ed4", "#6912db", "#2e5ae8", "#1fcbed", "#11f0ad", "#0fdb61", "#32ed11", "#98f711", "#e8f711", "#ffc821", "#f5890f", "#f75211"];
i = 0;

function color() {
    document.querySelector(".ak47").style.color = colors[i];
    i++;
    if(i == colors.length) {
        i = 0;
    }
}

setInterval(color, 200);

const music = new Audio("./moon-crystals.mp3");
music.play();
music.loop();
