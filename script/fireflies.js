$(document).ready(function () {
    let i = 0;
    let fireflies = setInterval(() => {
        if (i === 15) {
            clearInterval(fireflies);
        }
        jQuery('<div/>', {
            'class': 'firefly',
        }).appendTo('#top');
        i++;
    }, 500);
});