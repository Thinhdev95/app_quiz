$(document).ready(function () {
 const app = {
    event: () => {
        $('.hamburger').click(function () {
           $('.nav-menu-mobile').toggleClass('active');
           $('.hamburger').toggleClass('active');
        })
        // Số lượng lớp cần tạo
        var numberOfClasses = 5;

        // Tạo sự kiện click cho mỗi lớp có tên .collapsible-general-{i}
        for (var i = 1; i <= numberOfClasses; i++) {
            // Sử dụng IIFE (Immediately Invoked Function Expression) để bảo toàn giá trị của i
            (function(index) {
                // Tạo sự kiện click cho lớp cụ thể
                $('.collapsible-general-' + index).click(function () {
                    // Thêm hoặc xoá lớp 'hidden' từ tất cả các phần tử có lớp 'content-general'
                    $('.content-general-'+ index).toggleClass('hidden');

                    // Thêm hoặc xoá lớp 'rotate' từ tất cả các phần tử có lớp 'MuiSvgIcon-root'
                    $('.MuiSvgIcon-' + index).toggleClass('rotate');

                    // Thực hiện một hành động khác sau khi nhấp vào '.collapsible-general-{i}'
                    // Ví dụ: alert("Bạn đã nhấp vào '.collapsible-general-" + index + "'");
                    // Hoặc thực hiện một hành động khác theo ý của bạn
                    // Ví dụ: $('.other-element').toggleClass('active');
                });
            })(i); // Truyền giá trị của i vào hàm IIFE
        }
    },
    init: function () {
        this.event();
    }
 }
 app.init();
});