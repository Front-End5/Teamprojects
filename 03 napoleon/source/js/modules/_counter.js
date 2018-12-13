// counter from product page
if ($('.js-counter')) {
    const minus = $('.js-minus'),
            plus = $('.js-plus'),
            count = $('.js-count');
    
    console.log(minus, plus, count);

    let curentCount = $(count).val();
    if (parseInt(curentCount) == 1) {
        $(minus).addClass('is-disabled');
    }
    else {
        $(minus).removeClass('is-disabled');
    }
    
    $(plus).on('click',function(){
        let curentCount = $(count).val();
        console.log(curentCount);
        $(count).val(parseInt(curentCount) + 1);
        $(count).change();
    });
    $(minus).on('click',function(){
        let curentCount = $(count).val();
        console.log(curentCount);
        if (parseInt(curentCount) > 1) {
            $(count).val(parseInt(curentCount) - 1);
        }
        $(count).change();
    });

    $(count).on('change', function () {
        console.log('count changed');
        let curentCount = $(count).val();
        if (parseInt(curentCount) == 1) {
            $(minus).addClass('is-disabled');
        }
        else {
            $(minus).removeClass('is-disabled');
        }
    })
}