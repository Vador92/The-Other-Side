import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({});
loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
import { registerLevel1 } from "./level1";


scene("mainmenu", () => {
    const title = add([
        text("The Other Side"),
        anchor("center"),
        pos(center()),
        

    ])
    const button = add([
        rect(150, 40),
        anchor("center"),
        area(),
        pos(width()/2, height()/2 + 100),
        "play"
    ])
    //cause why tf does this work lmao
    onClick("play", () => {
        registerLevel1();
        go("level1");
    });
});


go("mainmenu");