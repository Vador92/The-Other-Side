import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

// kaplay engine
const k = kaplay({

});

const gravity =  1600;
const player_speed = 240;
const projectile_speed = 300;

// set gravity
setGravity(gravity);

loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");

// global variables
var level = 1;
var score = 0;

const black = color(0,0,0);
const gray = color(125,125,125);

scene("lobby", ({level, score})=>{
    debug.log(`Level: ${level}. Score: ${score}.`);
    const player = add([
        sprite("bean"),
        anchor("bot"),
        pos(center()), 
        body({isStatic: false}),
        area(),
        "player",
        "friendly", 
        {
            dir: RIGHT,
            dead: false,
            speed: player_speed
        }
    ]);

    const ground = add([
        rect(width(), 50),
        pos(0, height() - 50),
        anchor("topleft"),
        area(),
        outline(3),
        color(100,100,0),
        "ground",
        body({isStatic: true})
    ]);

    onKeyDown(["a", "left"], ()=>{
        player.move(-player_speed, 0)
    })
    onKeyDown(["d", "right"], ()=>{
        player.move(player_speed, 0)
    })
    // space makes more sense for abilities or something
    onKeyPress(["w"], ()=>{
        if(player.isGrounded()){
            player.jump()
        }
    })

    onMousePress(()=> {
        player.add([
            circle(20,20),
            pos(player),
            move(mousePos(), projectile_speed),
            area()
        ])
    })
})


scene("start", ()=> {
    const title = add([
        text("The Other Side", {
            size: 80
        }),
        black,
        anchor("center"),
        opacity(1),
        fadeIn(3),
        pos(width()/2, height() / 2 - 50)
    ])
    const startnow = make([
        text("Press any key to start.", {
            size: 27
        }),
        black,
        anchor("center"),
        opacity(1),
        fadeIn(5),
        pos(width()/2, height()/2 + 50)
    ])

    wait(2, ()=> {
        add(startnow)
    });

    onKeyPress(()=> {
        go("lobby", {level, score});
    })

    
})


go("start", {level, score});

