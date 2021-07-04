console.log(this); // function에 속하지 않은 this는 Global 아님. -> Empty Object나옴

// function에 들어있는 this는 global임
function a () {
    console.log(this === global);
}

a(); // true