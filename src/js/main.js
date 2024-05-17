$(document).ready(function () {
 const app = {
    event: () => {
        $('.hamburger').click(function () {
           $('.nav-menu-mobile').toggleClass('active');
           $('.hamburger').toggleClass('active');
        })
    },
    init: function () {
        this.event();
    }
 }
 app.init();
});