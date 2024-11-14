const movies = [
  { title: "The Exorcist", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/immg/H12.jpg?raw=true?raw=true" },
  { title: "The Shining", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/immg/The_shining.jpg?raw=true" },
  { title: "Ju-On: The Grudge", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/immg/images.jfif?raw=true" },
  { title: "Ringu", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/immg/H13.jpg?raw=true" },
  { title: "Hereditary", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/immg/H18.jpg?raw=true" },
  { title: "The Conjuring", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/HorrorMovie/The%20Conjuring.png?raw=true" },
  { title: "Insidious", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Insidious%20L.jpg?raw=true" },
  { title: "The Others", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Others%20L.jpg?raw=true" },
  { title: "A Tale of Two Sisters", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/A%20Tale%20of%20Two%20Sisters%20L.jpg?raw=true" },
  { title: "Paranormal Activity", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Paranormal%20Activity%20L.jpg?raw=true" },
  { title: "The Sixth Sense", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Sixth%20Sense%20L.jpg?raw=true" },
  { title: "1408", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/1408%20(2007)%20L.jpg?raw=true" },
  { title: "Silent Hill", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Silent%20Hill%20L.jpg?raw=true" },
  { title: "Mama", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Mama%20(2013)%20L.jpg?raw=true" },
  { title: "The Witch", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Witch%20(2015)%20L.jpg?raw=true" },
  { title: "Annabelle", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Annabelle%20L.jpg?raw=true" },
  { title: "Train to Busan", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Train%20to%20Busan%20L.jpg?raw=true" },
  { title: "It", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/It%20L.jpg?raw=true?raw=true" },
  { title: "REC", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/REC%20(2007)%20L.jpg?raw=true" },
  { title: "The Ring", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Ring%20(2002)%20L.jpg?raw=true" },
  { title: "Sinister", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Sinister%20L.jpg?raw=true" },
  { title: "Poltergeist", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Poltergeist%20L.jpg?raw=true" },
  { title: "The Blair Witch Project", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Blair%20Witch%20Project%20L.jpg?raw=true" },
  { title: "Drag Me to Hell", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Drag%20Me%20to%20Hell%20L.jpg?raw=true" },
  { title: "The Autopsy of Jane Doe", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/The%20Autopsy%20of%20Jane%20Doe%20L.jpg?raw=true" },
  { title: "Host", image: "https://github.com/KornFlexGIT/Horrortoday/blob/main/NewH/Host%20L.jfif?raw=true" },

];


function generateMovies() {
  const numMovies = parseInt(document.getElementById("numMovies").value, 10);
  const movieListElement = document.getElementById("movieList");
  movieListElement.innerHTML = "";

  if ( numMovies > 5) {
    alert("กรุณาป้อนจำนวนที่ถูกต้อง (1 - 5)");
    return;
}

  const selectedMovies = new Set();
  while (selectedMovies.size < numMovies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      selectedMovies.add(movies[randomIndex]);
  }

  selectedMovies.forEach(movie => {
      const listItem = document.createElement("li");
      listItem.classList.add("movie-item");

      const movieImage = document.createElement("img");
      movieImage.src = movie.image || "/immg/default.jpg?raw=true"; 
      movieImage.alt = movie.title;

      const movieTitle = document.createElement("span");
      movieTitle.textContent = movie.title;

      listItem.appendChild(movieImage);
      listItem.appendChild(movieTitle);
      movieListElement.appendChild(listItem);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
