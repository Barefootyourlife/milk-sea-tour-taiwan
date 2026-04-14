function toggleAddon() {
  const box = document.getElementById("addonContent");

  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}


function sendToLine() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('bookingDate').value;
  const people = document.getElementById('people').value;
  const plan = document.getElementById('plan').value;

  const addonCheckboxes = document.querySelectorAll('#addon input[type="checkbox"]');

  let addonList = [];
  let total = 0;

  addonCheckboxes.forEach(item => {
    if (item.checked) {
      addonList.push(item.value);
      total += parseInt(item.dataset.price);
    }
  });

  const addon = addonList.length > 0 ? addonList.join('、') : '無';
  const note = document.getElementById('note').value;

  const message = `我要預約海上行程👇
姓名：${name}
日期：${date}
人數：${people}
行程：${plan}
加購項目：${addon}
加購總價：$${total}
備註：${note}`;

  document.getElementById("orderCard").style.display = "block";
  document.getElementById("orderText").innerText = message;
}


// 🔥 複製 + 跳LINE
function copyText() {
  const text = document.getElementById("orderText").innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert("已複製！即將前往LINE✨");

    window.open("https://line.me/R/ti/p/@759xdtkz", "_blank");
  });
}