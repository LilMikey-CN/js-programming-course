// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for(each of dairy) {
        console.log(each);
    }
}


// Task 2
function birdCan() {

    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for(each of Object.keys(bird)) {
        console.log(`${each}: ${bird[each]}`);
    }
}

function animalCan() {
    const animal = {canJump: true};
    const ani = Object.create(animal);
    ani.canFly = true;
    ani.hasFeathers = true;
    for(const each in ani) {
        console.log(`${each}: ${ani[each]}`);
    }
}












