document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.querySelector("form");
  const submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const boothSize = document.getElementById("boothSize").value;
    const numChairs = document.getElementById("numChairs").value;

    if (!companyName.trim()) {
      alert("กรุณากรอกชื่อบริษัท");
    } else if (!contactName.trim()) {
      alert("กรุณากรอกชื่อผู้ติดต่อ");
    } else if (!contactNumber.trim()) {
      alert("กรุณากรอกเบอร์ผู้ติดต่อ");
    } else if (!boothSize) {
      alert("กรุณาเลือกขนาดบูธ");
    } else if (!numChairs) {
      alert("กรุณาใส่จำนวนเก้าอี้");
    } else if (isNaN(numChairs) || numChairs < 1 || numChairs > 10) {
      alert("กรุณากรอกจำนวนเก้าอี้อย่างน้อย 1 ตัว เเละขอได้มากสุด 10 ตัว");
    } else {
      registrationForm.submit();
      alert("ระบบได้รับข้อมูลเรียบร้อยแล้ว");
    }
  });
});
