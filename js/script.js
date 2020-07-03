        let burger_btn =  document.querySelector('.burger_btn');
        let mobile_nav = document.querySelector('.mobile_nav');
        let close_nav = document.querySelector('.close_nav');
        let showvar = 0;

        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });

        var swiper2 = new Swiper('.swiper-container-blog-images', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });

        burger_btn.addEventListener('click', () => {
            mobile_nav.classList.add('show');
            close_nav.classList.add('show');
            showvar = 1;
        });

        close_nav.addEventListener('click', () => {
            mobile_nav.classList.remove('show');
            close_nav.classList.remove('show');
            showvar = 0;
        });

        window.addEventListener('resize', () => {
            if(window.innerWidth <= 768){
                if(showvar == 1){
                    mobile_nav.classList.remove('hidden');
                    close_nav.classList.remove('hidden');
                }
            }else{
                if(showvar == 1){
                    mobile_nav.classList.add('hidden');
                    close_nav.classList.add('hidden');
                }
            }

        })

        function mySlider() {
            const prev  = document.querySelector('.prev');
            const next = document.querySelector('.next');
            const track = document.querySelector('.track');
            let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
            let itemWidth = document.querySelector('.team_flex_item').offsetWidth;
            let index = 0;
            let maxindex = 2; 
            if(window.innerWidth <= 800){
                maxindex = 2; 
            }else if(window.innerWidth <= 1221 && window.innerWidth >= 800){
                maxindex = 1; 
            }else if(window.innerWidth >= 1221){
                maxindex = 0; 
                next.classList.add('hide');
                prev.classList.remove('show');
                track.style.transform = `translateX(-${0}px)`;
            }

            window.addEventListener('resize', () => {
            carouselWidth = document.querySelector('.carousel-container').offsetWidth;
            itemWidth = document.querySelector('.team_flex_item').offsetWidth;
            if(window.innerWidth <= 800){
                maxindex = 2;
                next.classList.remove('hide');
                if (index >= maxindex ) {
                    next.classList.add('hide');
                }
                if(index != 0){
                    track.style.transform = `translateX(-${index * itemWidth + 15}px)`;
                }else{
                    track.style.transform = `translateX(-${index * itemWidth}px)`;
                }
            }else if(window.innerWidth <= 1221 && window.innerWidth >= 800){
                maxindex = 1; 
                next.classList.remove('hide');
                if (index >= maxindex ) {
                    next.classList.add('hide');
                }
                if(index != 0){
                    if(index == 2){
                        index = 1;
                    }
                    track.style.transform = `translateX(-${index * itemWidth + 15}px)`;
                }else{
                    track.style.transform = `translateX(-${index * itemWidth}px)`;
                }
            }else if(window.innerWidth >= 1221){
                index = 0;
                maxindex = 0; 
                next.classList.add('hide');
                prev.classList.remove('show');
                track.style.transform = `translateX(-${0}px)`;
            }

            });

            next.addEventListener('click', () => {
            index++;
            prev.classList.add('show');
            track.style.transform = `translateX(-${index * itemWidth + 15}px)`;
            if (index >= maxindex ) {
                next.classList.add('hide');
            }
            });

            prev.addEventListener('click', () => {
            index--;
            next.classList.remove('hide');
            if (index === 0) {
                prev.classList.remove('show');
            }
            if(index != 0){
            track.style.transform = `translateX(-${index * itemWidth + 15}px)`;
            }else{
                track.style.transform = `translateX(-${index * itemWidth }px)`;
            }
            });
        }
        mySlider();