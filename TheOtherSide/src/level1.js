import "kaplay/global";


// tutorial i guess
// cause why tf can't i just have a public scene
export function registerLevel1(){ 
    scene("level1", () => {
        // explain basic movement
        spawnPlayer();
    });

    function spawnPlayer(){
        debug.log("work")
    }
}




