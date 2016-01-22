function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
        var transition = document.querySelector('.social-icon');
        transition.addEventListener('mouseenter', function() {
            transition.setAttribute('class', 'color');
        });
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

