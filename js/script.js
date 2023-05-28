'use strict';

/*----------іконки переключання мови сайту-----------*/

const itemsLang = document.querySelectorAll('.top-header__lend-item');

document.addEventListener('click', function (event) {
    let activeElement;
    let newTargetElement;

    if (event.target.closest('.top-header__lend-item')) {
        itemsLang.forEach(function(item, index) {
            if (item.classList.contains('_active-lang')) {
                activeElement = index;
            };

            if (item == event.target) {
                newTargetElement = index;
            };
        });
        itemsLang[activeElement].classList.remove('_active-lang');
        itemsLang[newTargetElement].classList.add('_active-lang');
    };
});

/*----------меню бургер-----------*/

const menu = document.querySelector('.menu-header');
const burger = document.querySelector('.header__burger');
const body = document.body;


document.addEventListener('click', function (event) {
    let targetElement = event.target;

    if (targetElement.closest('.header__burger')) {
        menu.classList.toggle('_active');
        burger.classList.toggle('_active');
        body.classList.toggle('_active');
    };
});



/*------------валадація форми (червона рамка)------------*/

const mainForm = document.forms.mainForm;
const InputOne = mainForm.mainInputOne;
const InputTwo = mainForm.mainInputTwo;
const area = mainForm.mainArea;



mainForm.addEventListener('submit', function (event) {

    if (emailTest(InputTwo)) {
        InputTwo.classList.add('_error')
        event.preventDefault();
    };
});

function emailTest(input) { 
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}; 
mainForm.addEventListener('focusout', (event) => {
    InputTwo.classList.remove('_error');
});


/*------------placeholder-----------*/

InputOne.addEventListener('focusin', event => {
    InputOne.placeholder = '';
});
InputOne.addEventListener('focusout', event => {
    InputOne.placeholder = 'Name';
});




InputTwo.addEventListener('focusin', event => {
    InputTwo.placeholder = '';
});
InputTwo.addEventListener('focusout', event => {
    InputTwo.placeholder = 'E-mail or phone number';
});




area.addEventListener('focusin', event => {
    area.placeholder = '';
});
area.addEventListener('focusout', event => {
    area.placeholder = 'Send message';
});





//об'єктам які будуть мати класс _anim-items буде додаватись класс _active
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            //момент старту анімації
            let animFromPoint = window.innerHeight - animItemHeight / animStart;
            //момент старту анімації якщо об'єкт займає весь екран
            if (animItemHeight > window.innerHeight) {
                animFromPoint = window.innerHeight - window.innerHeight / animStart;
            };

            if ((scrollY > animItemOffset - animFromPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active-anim');
            } else {
                //заглушка. якщо об'єкт має класс _anim-on-hide та він не буде повторно анімуватись
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active-anim');
                };
            }; 
        };
        
    };

    //функція (з інтернету) яка вираховує відстань зверху до об'єкта
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
    //щоб на першому екрані була анімація без скроллу
    animOnScroll ();
};












































