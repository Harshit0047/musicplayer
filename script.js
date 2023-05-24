const audioPlayer = document.getElementById("audio-player");
const fileInput = document.querySelector("#file-input input[type=file]");
const songList = document.getElementById("song-list");
const songs = [];

function addSongs() {
  const fileList = fileInput.files;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    const fileName = file.name;
    songs.push(file);

    const listItem = document.createElement("li");
    listItem.textContent = fileName;

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download";
    downloadButton.addEventListener("click", function () {
      downloadSong(i);
    });

    listItem.appendChild(downloadButton);
    listItem.addEventListener("click", function () {
      playMusic(i);
    });

    songList.appendChild(listItem);
  }
}

function playMusic(index) {
  if (index >= 0 && index < songs.length) {
    const file = songs[index];
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.play();
  }
}

function downloadSong(index) {
  if (index >= 0 && index < songs.length) {
    const file = songs[index];
    const url = URL.createObjectURL(file);

    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();

    URL.revokeObjectURL(url);
  }
}
