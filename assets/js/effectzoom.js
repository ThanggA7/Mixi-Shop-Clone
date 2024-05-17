var mirro = document.querySelector("#mirro");
var img = document.querySelector("#image");
var check__mirro = document.querySelector("#check__mirro");

mirro.style.backgroundImage = `url(${img.src})`;

img.addEventListener("mouseenter", function () {
  mirro.style.display = "block";
});

img.addEventListener("mouseleave", function () {
  mirro.style.display = "none";
});

img.addEventListener("mousemove", function (e) {
  let rect = this.getBoundingClientRect();
  let mwibX = e.clientX - rect.left;
  let mwibY = e.clientY - rect.top;

  let w = rect.width;
  let h = rect.height;

  let pMbX = (mwibX / w) * 100;
  let pMbY = (mwibY / h) * 100;

  mirro.style.backgroundPosition = `${pMbX}% ${pMbY}%`;

  let scale = 2;
  mirro.style.backgroundSize = `${w * scale}px ${h * scale}px`;

  mirro.style.top = `${e.clientY - mirro.offsetHeight / 2}px`;
  mirro.style.left = `${e.clientX - mirro.offsetWidth / 2}px`;

  console.log(`${pMbX}% ${pMbY}%`);
});

check__mirro.addEventListener("mousemove", function (e) {
  if (mirro.style.display === "block") {
    mirro.style.top = `${e.clientY - mirro.offsetHeight / 2}px`;
    mirro.style.left = `${e.clientX - mirro.offsetWidth / 2}px`;
  }
});
