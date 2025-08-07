import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    background: [0,0,0]
});
loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
loadFont("gfont", "fonts/gfont.otf");

const myfont = "gfont"

const black = color(0,0,0);
const red = color(255,0,0);
const green = color (0,255,0);
const white = color(255,255,255);

scene("mainmenu", () => {
    const title = add([
        text("The Other Side", {
            size: 86,
            font: myfont,
        }),
        green,
        anchor("center"),
        pos(width()/2, height()/2 - 50)
    ]);

    const startMessage = add([
        text("Press any button to start.", {
            font: myfont,
        }),
        white,
        anchor("center"),
        pos(width()/2, height()/2 + 50)
    ]);

});

go("mainmenu");