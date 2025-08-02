import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix


const k = kaplay({
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");

setGravity(1600);

const player = add([
    sprite("bean"),
    pos(80,80),
    area(),
    body(),
])

add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({isStatic: true}),
    color(127, 200, 255)
])


onKeyPress("space", () => {
    if(player.isGrounded()){
        player.jump();
    }
})