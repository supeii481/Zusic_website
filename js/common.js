// 淡入
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px', 
        threshold: 0.35
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
$("button.btn_modal").on("click",function(){
    $("#lightbox").removeClass("none");
});
$("button.btn_modal_close").on("click",function(){
    $("#lightbox").addClass("none");
});
$("#lightbox").on("click",function(){
    $(this).addClass("none");
});
$("#lightbox > article").on("click", function(e){
    e.stopPropagation();
});