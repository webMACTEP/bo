let showed_review = 0;
let review_step = 3;

$(document).ready(function() {
    show_more_review();


    $('.more_reviews').on('click', () => {
        show_more_review();
    });
    $('.review_more').on('click', (e) => {
        let parent = $(e.currentTarget).parent('.review_block_main'),
            text = parent.find('.review_block_text');
        if (text.hasClass('visible')) {
            text.removeClass('visible');
            $(e.currentTarget).html('Читать дальше');
        } else {
            text.addClass('visible');
            $(e.currentTarget).html('Скрыть');
        }
    });

});

function init_reviews() {
    let max_text_h = 107;
    $('.review_block_main').toArray().forEach((i) => {
        let name = i.querySelector('.review_block_head_name_fio');
        if (name && name.innerText && name.innerText.length > 0) {
            i.querySelector('.review_block_head_logo').innerHTML = (name.innerText[0]).toUpperCase();
        }
        let text = i.querySelector('.review_block_text');
        if (text.scrollHeight > max_text_h && !text.parentNode.querySelector('.review_more')) {
            text.parentNode.innerHTML += "<div class='review_more'>Читать дальше</div>";
        }
    });
}

function show_more_review() {
    showed_review += review_step;
    $('.review').each((i) => {
        if (i < showed_review && $('.review')[i]) {
            $('.review')[i].classList.add('review_vis');
        }
    });
    if (showed_review >= $('.review').toArray().length) {
        $('.more_reviews').hide();
    } else {
        $('.more_reviews').show();
    }
    init_reviews();

}