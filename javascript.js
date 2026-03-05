
const track = document.getElementById('slider-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const images = document.querySelectorAll('.slide-image');

let currentIndex = 0;
const totalImages = images.length;

// スライド更新
function updateSlide() {
    const slideWidth = 100 * currentIndex;
    track.style.transform = `translateX(-${slideWidth}%)`;
}

// 次へ
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
});

// 前へ
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
});

// 3秒ごとに自動スライド
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
}, 3000);

   function sendForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("msg").value.trim();
      const result = document.getElementById("result");

      if (!name || !email || !msg) {
        result.style.color = "red";
        result.textContent = "すべての項目を入力してください。";
        return;
      }

      result.style.color = "green";
      result.textContent = "送信が完了しました！";
    }

    