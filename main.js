onload = () => {
  document.body.classList.remove("container");

  // بعد ما الوردات تطلع (5 ثواني)
  setTimeout(() => {
    const btn = document.getElementById("msgBtn");
    btn.style.display = "block";
    btn.classList.add("show");
  }, 5000);

  // عند الضغط → انتقال إلى صفحة الرسالة
  document.getElementById("msgBtn").onclick = () => {
    window.location.href = "love letter.html";
  };

  document.getElementById("msgBtn").onclick = () => {
  window.location.href = "love letter.html";
};

};
