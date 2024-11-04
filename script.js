function setActive(element) {
    // Xóa class 'active' khỏi tất cả các phần tử li
    var elements = document.getElementsByClassName("muc-luc");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }

    // Thêm class 'active' vào phần tử vừa được click
    element.classList.add("active");

    // Tìm và scroll đến phần nội dung tương ứng (nếu cần)
    var targetId = element.textContent.replace(/\s+/g, '-').toLowerCase();
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo(0, targetElement.offsetTop);
    }
}