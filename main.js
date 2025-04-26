const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Ẩn tất cả nội dung
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    // Hiện nội dung đúng theo tab được bấm
    document.getElementById(targetTab).classList.remove('hidden');
  });
});

// Mặc định show tab đầu tiên
document.getElementById('salaryTab').classList.remove('hidden');





// Form tính lương
const salaryForm = document.getElementById("salaryForm");
const dailySalaryInput = document.getElementById("dailySalary");
const workingDaysInput = document.getElementById("workingDays");
const salaryResultDiv = document.getElementById("salaryResult");

// Xử lý submit tính lương
salaryForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const dailySalary = Number(dailySalaryInput.value);
  const workingDays = Number(workingDaysInput.value);

  const totalSalary = dailySalary * workingDays;

  salaryResultDiv.textContent = `💰 Tổng lương của bạn là: ${totalSalary.toLocaleString()} VNĐ`;
});

// Form tính điểm trung bình
const averageForm = document.getElementById("averageForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const averageResultDiv = document.getElementById("averageResult");

// Xử lý submit tính điểm trung bình
averageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const a = Number(num1.value);
  const b = Number(num2.value);
  const c = Number(num3.value);
  const d = Number(num4.value);
  const e = Number(num5.value);

  const average = (a + b + c + d + e) / 5;

  averageResultDiv.textContent = `🎯 Điểm trung bình là: ${average}`;
});


// Form Quy đổi tiền tệ
const currencyForm = document.getElementById("currencyForm");
const usdRateInput = document.getElementById("usdRateInput");
const usdAmountInput = document.getElementById("usdAmountInput");
const currencyResult = document.getElementById("currencyResult");

// Xử lý sự kiện submit form
currencyForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Đầu vào
  let usdRate = Number(usdRateInput.value);
  const usdAmount = Number(usdAmountInput.value);

  // Nếu người dùng không nhập giá USD thì mặc định lấy 23,500
  if (!usdRate) {
    usdRate = 23500;
  }

  // Xử lý
  const totalVND = usdRate * usdAmount;

  // Đầu ra: format số tiền VNĐ cho đẹp
  const formattedVND = new Intl.NumberFormat('vi-VN').format(totalVND);

  currencyResult.textContent = `💵 Tổng tiền nhận được: ${formattedVND} VNĐ`;
});


// Form tính chu vi và diện tích
const rectangleForm = document.getElementById("rectangleForm");
const lengthInput = document.getElementById("lengthInput");
const widthInput = document.getElementById("widthInput");
const rectangleResult = document.getElementById("rectangleResult");

// Xử lý sự kiện submit form
rectangleForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Đầu vào
  const length = Number(lengthInput.value);
  const width = Number(widthInput.value);

  // Xử lý
  const perimeter = (length + width) * 2;
  const area = length * width;

  // Đầu ra
  rectangleResult.innerHTML = `
    📏 Chu vi: <span class="font-bold">${perimeter} m</span> <br>
    📐 Diện tích: <span class="font-bold">${area} m²</span>
  `;
});


// Form tính tổng 2 ký số
const twoDigitForm = document.getElementById("twoDigitForm");
const twoDigitInput = document.getElementById("twoDigitInput");
const twoDigitResult = document.getElementById("twoDigitResult");

// Xử lý sự kiện submit form
twoDigitForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Đầu vào
  const number = Number(twoDigitInput.value);

  // Validate: Phải là số có 2 chữ số
  if (number < 10 || number > 99) {
    twoDigitResult.textContent = "⚠️ Vui lòng nhập số có 2 chữ số (từ 10 đến 99).";
    return;
  }

  // Xử lý
  const tens = Math.floor(number / 10); // Hàng chục
  const units = number % 10;            // Hàng đơn vị
  const sum = tens + units;

  // Đầu ra
  twoDigitResult.textContent = `➕ Tổng 2 chữ số là: ${sum}`;
});
