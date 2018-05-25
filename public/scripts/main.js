window.onload = function (ev) {
    var scene = document.getElementById('scene');
    var smallCarrots = document.getElementById('small-carrots');
    var camera = document.getElementById('camera');
    var cursor = document.getElementById('cursor');
    var carrot = document.getElementById('carrot');
    var knife = document.getElementById('knife');
    var cuttingboard = document.getElementById('cuttingboard');
    var dartBoard = document.getElementById('DartBoard');

    carrot.addEventListener('click', function () {
        var animation = document.getElementById('pick_up_carrot');

        carrot.setAttribute('position', '0.147, -0.153, -0.6');
        carrot.setAttribute('scale', '0.05 0.05 0.05');
        carrot.setAttribute('rotation', '20 0 30');
        carrot.classList.remove('clickable');
        cuttingboard.classList.add("clickable");
        camera.appendChild(carrot);
    });

    cuttingboard.addEventListener('click', function () {
        if (carrot.parentNode === camera){
            document.getElementById('put_down').components.sound.playSound();
            cuttingboard.appendChild(carrot);
            carrot.setAttribute('scale', '5 0.1 0.1');
            carrot.setAttribute('rotation' , '0 -90 90');
            carrot.setAttribute('position', '0 3.20 0');
            cuttingboard.classList.remove('clickable');
            knife.classList.add('clickable');
        }

        if (knife.parentNode === camera){
            knife.setAttribute('scale', '0.03 0.03 0.03');
            knife.setAttribute('position', '0.25 3.4 4.2');
            knife.setAttribute('rotation', '-60  -90 0');
            knife.classList.remove('clickable');

            scene.appendChild(knife);

            scene.setAttribute('do-something-once-loaded', '');

                var animation = document.getElementById("cut_animation_move");
                var animation2 = document.getElementById("cut_animation_cut");
                var animation3 = document.getElementById("cut_animation_back");

                animation.addEventListener('animationend', function () {
                    document.getElementById('cutting_carrot').components.sound.playSound();
                    animation2.addEventListener('animationend', function () {
                        carrot.parentNode.removeChild(carrot);
                        cuttingboard.appendChild(smallCarrots);
                        smallCarrots.setAttribute('visible' , 'true');

                        animation3.addEventListener('animationend', function () {
                            camera.appendChild(knife);
                            knife.setAttribute('position', '0.147, -0.153, -0.6');
                            knife.setAttribute('scale', '0.05 0.05 0.05');
                            knife.setAttribute('rotation', '-30 5 0');
                        });
                        knife.emit('back')
                    });
                    knife.emit('cut');
                });

                setTimeout(function () {
                    knife.emit('move');
                }, 10);
        }
    });


    knife.addEventListener('click', function () {
        document.getElementById("pick_up").components.sound.playSound();
        camera.appendChild(knife);
        knife.setAttribute('position', '0.147, -0.153, -0.6');
        knife.setAttribute('scale', '0.05 0.05 0.05');
        knife.setAttribute('rotation', '-30 5 0');
        cuttingboard.classList.add("clickable");
        // dartBoard.classList.add("clickable");
        // console.log('hallo')
    });

    // dartBoard.addEventListener('click', function () {
    //     if(document.getElementById('knife').parentNode === document.getElementById('camera')){
    //         var knife = document.getElementById('knife');
    //         camera.removeChild(knife);
    //         dartBoard.appendChild(knife);
    //         dartBoard.classList.remove('clickable');
    //         cuttingboard.classList.remove('clickable')
    //     }
    // });

};

