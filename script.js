// อาเรย์ของชื่อหนังและภาพปกหนัง
const movies = [
  { title: "The Exorcist", image: "/immg/H12.jpg" },
  { title: "The Shining", image: "/immg/The_shining.jpg" },
  { title: "Ju-On: The Grudge", image: "/immg/images.jfif" },
  { title: "Ringu", image: "/immg/H13.jpg" },
  { title: "Hereditary", image: "/immg/H18.jpg" },
  { title: "The Conjuring", image: "/immg/H19.jpg" },
  { title: "Insidious", image: "" },
  { title: "The Others", image: "" },
  { title: "A Tale of Two Sisters", image: "" },
  { title: "Paranormal Activity", image: "" },
  { title: "The Sixth Sense", image: "" },
  { title: "1408", image: "" },
  { title: "Silent Hill", image: "" },
  { title: "Mama", image: "" },
  { title: "The Witch", image: "" },
  { title: "Annabelle", image: "" },
  { title: "Train to Busan", image: "" },
  { title: "It", image: "" },
  { title: "The Babadook", image: "" },
  { title: "REC", image: "" },
  { title: "The Ring", image: "" },
  { title: "Sinister", image: "" },
  { title: "Poltergeist", image: "" },
  { title: "The Blair Witch Project", image: "" },
  { title: "Drag Me to Hell", image: "" },
  { title: "Oculus", image: "" },
  { title: "The Autopsy of Jane Doe", image: "" },
  { title: "Host", image: "" },
  { title: "The Texas Chainsaw Massacre", image: "" },
];

// ฟังก์ชันสำหรับการสุ่มหนัง
function generateMovies() {
  // รับค่าจำนวนหนังที่ต้องการสุ่มจาก input
  const numMovies = parseInt(document.getElementById("numMovies").value, 10);
  const movieListElement = document.getElementById("movieList");

  // เคลียร์รายการหนังที่แสดงก่อนหน้า
  movieListElement.innerHTML = "";

  // ตรวจสอบว่าจำนวนที่ป้อนมาถูกต้อง
  if ( numMovies > 5) {
    alert("กรุณาป้อนจำนวนที่ถูกต้อง (1 - 5)");
    return;
}

  // สุ่มหนังโดยใช้ Set เพื่อป้องกันไม่ให้เกิดการซ้ำ
  const selectedMovies = new Set();
  while (selectedMovies.size < numMovies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      selectedMovies.add(movies[randomIndex]);
  }

  // แสดงรายการหนังที่สุ่มได้
  selectedMovies.forEach(movie => {
      const listItem = document.createElement("li");
      listItem.classList.add("movie-item");

      const movieImage = document.createElement("img");
      movieImage.src = movie.image || "/immg/default.jpg"; // ใช้ URL ของภาพหนัง หรือภาพเริ่มต้นหากไม่มีภาพ
      movieImage.alt = movie.title;

      const movieTitle = document.createElement("span");
      movieTitle.textContent = movie.title;

      listItem.appendChild(movieImage);
      listItem.appendChild(movieTitle);
      movieListElement.appendChild(listItem);
  });
}

// ฟังก์ชันเพื่อสุ่มอาเรย์
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // สลับตำแหน่ง
  }
  return arr;
}
