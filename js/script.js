// header function for every page

function header() {
    const burger = document.querySelector('.burger'),
          change = document.querySelectorAll('.header__change'),
          overlay = document.querySelector('.page-overlay'),
          body = document.querySelector('body'),
          links = document.querySelectorAll('.menu__links');

    function toggle(){
        overlay.classList.toggle('show');
        burger.classList.toggle('show');
        body.classList.toggle('stop-scroll');
    }

    function removeMenu() {
        overlay.classList.remove('show');
        body.classList.remove('stop-scroll');
        burger.classList.remove('show');
        change.forEach(item => {
            item.classList.toggle('show')
        }) 
    }

    burger.addEventListener('click', () => {
        toggle();
    })

    burger.addEventListener('click', () => {
        change.forEach(item => {
            item.classList.toggle('show')
        })
    });

    links.forEach(item => {
        item.addEventListener('click', removeMenu)
    })
}

// accordion function for forex and footer

function accordionSlide(clickedItem, itemToShow) {
    document.querySelectorAll(clickedItem).forEach((item) => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;

            if(content.style.maxHeight) {
                document.querySelectorAll(itemToShow).forEach(element => {
                    element.style.maxHeight = null
                })

                document.querySelectorAll(clickedItem).forEach(item => {
                    item.classList.remove('active');
                })
            } else {
                document.querySelectorAll(itemToShow).forEach(element => {
                    element.style.maxHeight = null
                })
                content.style.maxHeight = content.scrollHeight + 'px'

                document.querySelectorAll(clickedItem).forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                content.addEventListener('click', () => {
                    item.classList.remove('active');
                })
            }
        })
    })

    document.querySelectorAll(itemToShow).forEach(item => {
        item.addEventListener('click', () => {
            if(item.style.maxHeight) {
                item.style.maxHeight = null
            }
        })
    })
}

// main page call

(function () {
   let check = document.querySelector('.checkLoginMain')
    if(!check) return

    header()


/// forex accordion on main page call
    let checkForex = document.querySelector('.forex__tab-title')
    if(checkForex){
        accordionSlide('.forex__tab-title', '.forex__tab-content');
        accordionSlide('.about__title', '.about__column');
    } else if(!checkForex) {
        accordionSlide('.about__title', '.about__column');
    }
})();

//second
