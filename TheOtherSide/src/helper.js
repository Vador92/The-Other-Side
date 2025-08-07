// for structures (e.g.)
export function spawnRect(width, height, color, tags, posx, posy){
    const newRect = add([
        pos(posx, posy),
        rect(width, height),
        outline(2),
        area(),
        color,
        tags
    ])
    return newRect;
}



// player
export function spawnPlayer(){
        const player = add([
            sprite("bean"),

        ])
}