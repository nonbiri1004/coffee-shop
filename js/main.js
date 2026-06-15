// ===== Pagetop 回到頂部按鈕 =====

// 監聽頁面捲動事件
window.addEventListener('scroll', function () {
  var btn = document.getElementById('pagetop'); // 取得按鈕元素

  if (window.scrollY > 300) {
    // 捲動超過 300px 時，顯示按鈕
    btn.style.display = 'flex';
  } else {
    // 未超過 300px 時，隱藏按鈕
    btn.style.display = 'none';
  }
});

// 點擊按鈕後，平滑捲動回頂部
function scrollToTop() {
  window.scrollTo({
    top: 0,          // 目標位置：頂部（0px）
    behavior: 'smooth' // 平滑捲動，不是瞬間跳上去
  });
}

// ===== Loading 載入畫面 =====

// 監聽頁面全部載入完成的事件（圖片、CSS、JS 都載入後才觸發）
window.addEventListener('load', function () {
  var loading = document.getElementById('loading'); // 取得 loading 畫面元素

  loading.style.opacity = '0'; // 先透明度變 0（淡出效果開始）

  // 等淡出動畫跑完（0.5s）後，再把元素完全隱藏
  setTimeout(function () {
    loading.style.display = 'none'; // 完全移除，不佔空間
  }, 500); // 500ms = 0.5秒，配合 CSS transition 時間
});

// ===== 表單驗證 =====

// 監聽表單送出事件
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 阻止表單預設送出行為（避免頁面跳轉）

  // 取得各欄位元素
  var name = document.getElementById('userName');
  var email = document.getElementById('userEmail');
  var message = document.getElementById('userMessage');

  var isValid = true; // 預設表單驗證通過，若有欄位錯誤則改為 false

  // ── 驗證姓名欄位 ──
  if (name.value.trim() === '') {
    // 值為空白，加上錯誤樣式
    name.classList.add('is-invalid');
    isValid = false;
  } else {
    // 有值，移除錯誤樣式，加上成功樣式
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');
  }

  // ── 驗證 Email 欄位 ──
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email 格式的正規表達式
  if (!emailPattern.test(email.value)) {
    // 格式不符，加上錯誤樣式
    email.classList.add('is-invalid');
    isValid = false;
  } else {
    // 格式正確，移除錯誤樣式，加上成功樣式
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
  }

  // ── 驗證訊息欄位 ──
  if (message.value.trim() === '') {
    // 值為空白，加上錯誤樣式
    message.classList.add('is-invalid');
    isValid = false;
  } else {
    // 有值，移除錯誤樣式，加上成功樣式
    message.classList.remove('is-invalid');
    message.classList.add('is-valid');
  }

  // ── 所有欄位驗證通過 ──
  if (isValid) {
    document.getElementById('successMsg').style.display = 'block'; // 顯示送出成功訊息
    this.reset(); // 清空表單所有欄位
  }
});