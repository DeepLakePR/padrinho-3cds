$(() => {

    var active = false;

    const yes = $('#yes');
    const no = $('#no');

    no.click(() => {

        let vTop = Math.floor(Math.random() * ($(window).height() - 200)) + 1;
        let vLeft = Math.floor(Math.random() * ($(window).width() - 400)) + 1

        if (!active) {
            active = true;

            no.detach().appendTo('body');

            no.css({
                'position': 'absolute',
                'top': vTop + 'px',
                'left': vLeft + 'px'
            })
            $('i').css('left', '48%');

        }

    });

    no.on('mouseover', () => {

        let vTop = Math.floor(Math.random() * ($(window).height() - 200)) + 1;
        let vLeft = Math.floor(Math.random() * ($(window).width() - 400)) + 1

        if (active) {
            no.css({
                'position': 'absolute',
                'top': vTop + 'px',
                'left': vLeft + 'px'
            })
        }
    });

    yes.click(()=>{

        yes.detach().appendTo('body');

        yes.css({
            'position': 'absolute',
            'background': 'rgba(0, 210, 0, 1)',
            'border-radius': '0',
        })

        yes.animate({
            'width': '100%',
            'height': '100%',
            'font-size': '100px'
        }, 5000, ()=>{

            window.open('https://www.youtube.com/watch?v=HR4ZxjGQGYY');
            window.open('https://vm.tiktok.com/ZMkvkbLRL/');
            window.open('https://www.youtube.com/watch?v=FJZIl0JPmgs');
            window.open(' https://www.youtube.com/watch?v=o9zEziMKAkQ');
        
        });

    });

});
