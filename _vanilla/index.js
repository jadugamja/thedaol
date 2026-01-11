(function () {
  emailjs.init("0k4mBVWlEAe80V-y-");
})();

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const spinnerTemplate = document.getElementById("spinner-template");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 새로고침 방지

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const title = contactForm.title.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !title || !message) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 로딩 상태 표시
    const prevBtnContent = submitBtn.innerText;
    submitBtn.innerHTML = "";
    submitBtn.appendChild(spinnerTemplate.content.cloneNode(true));
    submitBtn.disabled = true;

    // 폼 데이터 전송
    emailjs
      .sendForm("service_tawstp9", "template_bvsjspo", this)
      .then(
        function () {
          alert("문의가 성공적으로 발송되었습니다!");
          contactForm.reset();
        },
        function (error) {
          alert("전송 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
      )
      .finally(function () {
        // 버튼 상태 원상복구
        submitBtn.innerText = prevBtnContent;
        submitBtn.disabled = false;
      });
  });
});
