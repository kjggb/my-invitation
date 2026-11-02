
let selectedTime = "";
let selectedDate = "";
let selectedSnack = "";
let selectedLoveAnswer = "";
let savedMessage = "";

function start() {
  document.getElementById("page").innerHTML = `
    <h1>سلام سلام دلقک مورد علاقم 😂❤️</h1>
    <p>بزن روی گزینه بزن بریم که خوشحالت کنم! 😈</p>
    <button onclick="startQuestion()">بزن بریم ❤️</button>
  `;
}

function startQuestion() {
  document.getElementById("page").innerHTML = `
    <h1>میای با هم بریم بیرون؟ ❤️</h1>
    <p>(اگه می‌تونی بزن نمیام 😂)</p>
    <button onclick="yes()">آرههه 😍</button>
    <button id="noBtn">نمیام 😂</button>
    <p id="message"></p>
  `;

  const noBtn = document.getElementById("noBtn");
  let count = 0;

  function runAway() {
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * 65 + 10 + "%";
    noBtn.style.top = Math.random() * 65 + 15 + "%";
  }

  noBtn.onclick = function() {
    count++;
    const messages = [
      "غلط می‌کنی 😂",
      "چقد پرویی آخه 😂",
      "میدونی لجبازم، میامو انتخاب کن 😈❤️"
    ];

    document.getElementById("message").innerText =
      messages[Math.min(count - 1, 2)];

    runAway();
  };

  noBtn.onmouseover = runAway;
  noBtn.ontouchstart = runAway;
}

function yes() {
  document.getElementById("page").innerHTML = `
    <h1>می‌دونستم عه خداته بام بیای! 😍❤️</h1>
    <h2>حالا تاریخ قرارمون! 📅</h2>

    <select id="year">
      <option value="1405">۱۴۰۵</option>
      <option value="1406">۱۴۰۶</option>
    </select>

    <select id="month">
      <option>فروردین</option>
      <option>اردیبهشت</option>
      <option>خرداد</option>
      <option>تیر</option>
      <option>مرداد</option>
      <option>شهریور</option>
      <option>مهر</option>
      <option>آبان</option>
      <option>آذر</option>
      <option>دی</option>
      <option>بهمن</option>
      <option>اسفند</option>
    </select>

    <select id="day"></select>
    <br><br>
    <button onclick="nextStep()">ثبت تاریخ ❤️</button>
  `;

  updateDays();
  document.getElementById("month").onchange = updateDays;
}

function updateDays() {
  const month = document.getElementById("month").selectedIndex;
  const count = month < 6 ? 31 : month < 11 ? 30 : 29;
  const day = document.getElementById("day");

  day.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    day.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

function nextStep() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;

  selectedDate = day + " " + month + " " + year;

  document.getElementById("page").innerHTML = `
    <h1>حالا چه ساعتی بریم؟ ⏰</h1>
    <select id="time">
      <option>۱۰ صبح</option>
      <option>۱۲ ظهر</option>
      <option>۲ بعدازظهر</option>
      <option>۴ عصر</option>
      <option>۶ عصر</option>
      <option>۸ شب</option>
    </select>
    <br><br>
    <button onclick="choosePlace()">ثبت ساعت ❤️</button>
  `;
}

function choosePlace() {
  selectedTime = document.getElementById("time").value;

  document.getElementById("page").innerHTML = `
    <h1>حالا کجا بریم؟ 📍</h1>
    <button onclick="placeMessage()">بیشتر</button>
  `;
}

function placeMessage() {
  document.getElementById("page").innerHTML = `
    <h1>اوسکل مگه جای دیگه‌ای هم داریممم؟ 😂</h1>
    <p>خو بزن رو گلزار ❤️</p>
    <button onclick="snackStep()">گلزار شهدا 🌹</button>
  `;
}

function snackStep() {
  document.getElementById("page").innerHTML = `
    <h1>چی بیارم برات کوفت کنی؟ 😂</h1>
    <button onclick="chooseSnack('لواشک کوچولو')">لواشک کوچولو 🍒</button>
    <button onclick="chooseSnack('شکلات')">شکلات 🍫</button>
    <button id="iceBtn">بستنی تماماً کاکائو 🍦</button>
  `;

  const iceBtn = document.getElementById("iceBtn");
  let count = 0;

  iceBtn.onclick = function() {
    count++;

    const messages = [
      "پول ندارومم 😂",
      "خودت بگیر بیار خو نکبت 😭",
      "یکی از اون دوتا رو انتخاب کن اذیت نده 😂"
    ];

    alert(messages[count - 1]);

    if (count < 3) {
      iceBtn.style.position = "fixed";
      iceBtn.style.left = Math.random() * 65 + 10 + "%";
      iceBtn.style.top = Math.random() * 65 + 15 + "%";
    }
  };
}

function chooseSnack(snack) {
  selectedSnack = snack;

  document.getElementById("page").innerHTML = `
    <h1>حالا دوسم داری؟ 🥺❤️</h1>
    <button onclick="loveAnswer('بله')">الف) بله ❤️</button>
    <button onclick="loveAnswer('گزینه الف')">ب) گزینه الف 😂</button>
    <button onclick="loveAnswer('گزینه الف و ب')">ج) گزینه الف و ب 😎</button>
  `;
}

function loveAnswer(answer) {
  selectedLoveAnswer = answer;

  document.getElementById("page").innerHTML = `
    <h1>حالا هرچی تو دلته رو بم بگو 🥺❤️</h1>
    <textarea id="heartMessage" rows="5"
      placeholder="اینجا برام بنویس جوجو... ❤️"
      style="width:90%; max-width:400px; box-sizing:border-box;"></textarea>
    <br><br>
    <button onclick="showFinal()">ثبت حرفای دلم ❤️</button>
  `;
}

function showFinal() {
  const message = document.getElementById("heartMessage").value.trim();
  savedMessage = message || "هیچی نگفتی که! 😂❤️";

  document.getElementById("page").innerHTML = `
    <h1>پس قرارمااا! 🎉❤️</h1>
    <p>ساعت: ${selectedTime}</p>
    <p>تاریخ: ${selectedDate}</p>
    <p>مکان: گلزار شهدا 🌹</p>
    <p>خوراکی: ${selectedSnack}</p>
    <p>جواب دوست داشتن: ${selectedLoveAnswer}</p>
    <h3>حرفای تو به من: 💌</h3>
    <p id="finalMessage"></p>
    <button onclick="sendAnswers()">ارسال جواب‌ها 💌</button>
    <h2>میبینمت جوجو ❤️</h2>
  `;

  document.getElementById("finalMessage").textContent = savedMessage;
}

function sendAnswers() {
  const form = document.createElement("form");

  form.action = "https://formsubmit.co/q35905285@gmail.com";
  form.method = "POST";
  form.target = "_blank";

  const answers = {
    "تاریخ": selectedDate,
    "ساعت": selectedTime,
    "مکان": "گلزار شهدا",
    "خوراکی": selectedSnack,
    "جواب دوست داشتن": selectedLoveAnswer,
    "پیام": savedMessage,
    "_subject": "جواب‌های دعوت‌نامه ❤️"
  };

  for (const [name, value] of Object.entries(answers)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
  form.remove();
}
