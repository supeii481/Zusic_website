//登入密碼眼睛
document.addEventListener('DOMContentLoaded', function() {
    // 獲取密碼輸入框元素
    const passwordInput = document.getElementById('user-password');
    // 獲取眼睛圖示元素
    const toggleIcon = document.querySelector('.toggle-password'); // 根據你新增的 class 或原有的 i 元素

    // 檢查元素是否存在，確保程式碼不會出錯
    if (passwordInput && toggleIcon) {
        // 監聽眼睛圖示的點擊事件
        toggleIcon.addEventListener('click', function() {
            // 判斷密碼輸入框的當前類型
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

            // 1. **切換輸入框類型 (切換顯示/隱藏)**
            passwordInput.setAttribute('type', type);

            // 2. **切換眼睛圖示 (切換斜線/無斜線)**
            // 使用 .toggle() 方法來切換 class，這是最簡潔的方式
            this.classList.toggle('fa-eye'); // 眼睛打開
            this.classList.toggle('fa-eye-slash'); // 眼睛關閉 (有斜線)
        });
    }
});

// 購物車alert
// 1. 取得按鈕元素
const cartBtn = document.getElementById('cart_icon');

// 2. 為按鈕添加點擊事件監聽器 (Event Listener)
cartBtn.addEventListener('click', function () {
    // 3. 點擊後執行 alert 函式
    alert('請先加入商品~');
});

//點小圖秀大圖
function showLarge(e) {
    document.getElementById("large").src = e.target.src;
}

function init() {
    let images = document.querySelectorAll(".else_img", ".color");//()裡要放css selector的寫法
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);

//
// 圖片路徑映射表：將顏色名稱對應到實際的圖片檔名
const colorImageMap = {
    "black": "../img/rent_inside/piano1.png",
    "white": "https://postimg.cc/QVZRmShF",
    "transparent": "/img/rent_inside/piano3.png"
    // 請根據您的實際圖片路徑調整這裡
};


// 點擊小圖 (else_img 內) 換大圖的函式
function showSmallImage(e) {
    // 確保點擊的目標是 <img> 元素
    if (e.target.tagName === 'IMG') {
        document.getElementById("large").src = e.target.src;
    }
}

// 點擊顏色方塊換大圖的函式
function showColorImage(e) {
    const largeImage = document.getElementById("large");
    const clickedButton = e.target;

    // 確保點擊的目標是 <button> 元素
    if (clickedButton.tagName === 'BUTTON') {
        const colorName = clickedButton.title;

        if (colorName && colorImageMap[colorName]) {
            // 從映射表中取得對應的圖片路徑
            largeImage.src = colorImageMap[colorName];

            // 可選：為被選中的顏色按鈕添加選中樣式
            highlightSelectedColor(clickedButton);
        }
    }
}

// 輔助函式：處理選中樣式
function highlightSelectedColor(selectedButton) {
    // 移除所有顏色按鈕的選中樣式
    const colorButtons = document.querySelectorAll('.choose_color .color button');
    colorButtons.forEach(btn => btn.classList.remove('selected'));

    // 為當前點擊的按鈕添加選中樣式
    selectedButton.classList.add('selected');
}


function init() {
    // 1. 處理點擊小圖換大圖的事件
    const elseImgDiv = document.querySelector(".else_img");
    if (elseImgDiv) {
        // 使用事件委託，監聽整個 else_img 容器的點擊事件
        elseImgDiv.addEventListener('click', showSmallImage);
    }

    // 2. 處理點擊顏色方塊換大圖的事件 (新的部分)
    const colorDiv = document.querySelector(".choose_color .color");
    if (colorDiv) {
        // 使用事件委託，監聽整個 color 容器的點擊事件
        colorDiv.addEventListener('click', showColorImage);
    }
}

window.addEventListener("load", init, false);
//
// 淡入
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    //定義當元素進入行為
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 進入視窗：觸發淡入效果
                entry.target.classList.add('is-visible');
                //一旦淡入，就停止觀察該元素
                observer.unobserve(entry.target);
            }
        });
    };
    //執行
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

//燈箱//
$(".user_icon").on("click", function () {
    $("#lightbox").removeClass("none");
});
$(".user_icon_close").on("click", function () {
    $("#lightbox").addClass("none");
});
$("#lightbox").on("click", function () {
    $(this).addClass("none");
});
$("#lightbox > article").on("click", function (e) {
    e.stopPropagation();
});