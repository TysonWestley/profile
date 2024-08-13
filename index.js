window.addEventListener("load", () => {
    document.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            document.querySelector(".header").classList.add('change-background');
        } else {
            document.querySelector(".header").classList.remove('change-background');
        }
    });
    
})