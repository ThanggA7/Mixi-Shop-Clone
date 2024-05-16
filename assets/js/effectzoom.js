var mirro = document.querySelector("#mirro");
var img = document.querySelector("#image");
var check__mirro = document.querySelector("#check__mirro");

// Đặt hình ảnh nền cho kính lúp
mirro.style.backgroundImage = `url(${img.src})`;

// Hiển thị mirro khi di chuột vào img
img.addEventListener("mouseenter", function () {
  mirro.style.display = "block";
});

// Ẩn mirro khi rời khỏi img
img.addEventListener("mouseleave", function () {
  mirro.style.display = "none";
});

check__mirro.addEventListener("mousemove", function (e) {
  // Chỉ di chuyển mirro nếu nó đang được hiển thị
  if (mirro.style.display === "block") {
    mirro.style.top = `${e.clientY}px`;
    mirro.style.left = `${e.clientX}px`;
  }
});

img.addEventListener("mousemove", function (e) {
  let w = this.offsetWidth;
  let h = this.offsetHeight;

  let mwibX = e.pageX - this.offsetLeft;
  let mwibY = e.pageY - this.offsetTop;

  let pMbX = (mwibX / w) * 100;
  let pMbY = (mwibY / h) * 100;

  mirro.style.backgroundPosition = `${pMbX}% ${pMbY}%`;

  let scale = 2; // Tăng tỷ lệ phóng to
  mirro.style.backgroundSize = `${w * scale}px ${h * scale}px`;

  console.log(`${pMbX}% ${pMbY}%`);
});
