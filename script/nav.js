const hidePrevious = () => {
    return new Promise((resolve, reject) =>  {
        $('.menu-links').hide();
        $('.page-block').fadeOut(1000);
        resolve();
    });
};

const showNext = (page) => {
    setTimeout(() => {
        $('#' + page).css("display", "flex").hide().fadeIn(1000);
    }, 1000);
};

const navigate = () => {
    $('.nav-link').click(function (link) {
        link.preventDefault();
        let id = $(this).attr('id');
        hidePrevious().then(() => showNext(id.slice(0, -5)));
    });
};

$(document).ready(function () {
    let menu = $('.menu-links');

    $('#open-nav').click(function () {
        $(menu).fadeIn(500);
    });

    $('#close-nav').click(function () {
        $('.menu-links').hide();
    });

    navigate();
});