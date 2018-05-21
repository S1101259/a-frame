window.onload = function (ev) {
    var smallCarrots = document.getElementById('small-carrots');



    var camera = document.getElementById('camera');
    var cursor = document.getElementById('cursor');
    var carrot = document.getElementById('carrot');
    var knife = document.getElementById('knife');
    var cuttingboard = document.getElementById('cuttingboard');

    carrot.addEventListener('click', function () {
        camera.appendChild(carrot);
        carrot.setAttribute('position', '0.147, -0.153, -0.6');
        carrot.setAttribute('scale', '0.05 0.05 0.05');
        carrot.setAttribute('rotation', '20 0 30');
        cuttingboard.classList.add("clickable")
    });

    cuttingboard.addEventListener('click', function () {
        if (carrot.parentNode === camera){
            cuttingboard.appendChild(carrot);
            carrot.setAttribute('scale', '5 0.1 0.1');
            carrot.setAttribute('rotation' , '0 -90 90');
            carrot.setAttribute('position', '0 2 0');
            cuttingboard.classList.remove('clickable');
            knife.classList.add('clickable');
        }

        if (knife.parentNode === camera){
            carrot.parentNode.removeChild(carrot);
            cuttingboard.appendChild(smallCarrots);
            smallCarrots.setAttribute('visible' , 'true')
        }
    });

    knife.addEventListener('click', function () {
        camera.appendChild(knife);
        knife.setAttribute('position', '0.147, -0.153, -0.6');
        knife.setAttribute('scale', '0.05 0.05 0.05');
        knife.setAttribute('rotation', '-30 5 0');
        cuttingboard.classList.add("clickable")
    })
};