//Your Code here
let response = window.prompt("Do you head left or right? type left or right");

if(response === 'left'){
    console.log('do something for the left response')

    let response2 = window.prompt("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path? Type follow or continue.");
    if(response2 === 'follow'){

        let response3 = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Type stay or spread the word");

        if (response3==='stay'){ let response4 =window.prompt("You live happily amongst the cats for the rest of your days.");}
        else if (response3==="spread the word"){
            let response4= window.prompt("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.");
        }


    }
        

     else if (response2==="continue"){
        let response3= window.prompt("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? Type ladder or staircase.");
         if (response3==="ladder"){ let response3 = window.prompt('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
    }
        else if (response3==="staircase"){let response3= window.prompt ('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
    
    }
        }}
        
    
    
 else if (response === 'right'){
    console.log('do something for the right response')
    let response2= window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take? Type past the dragon or away from the dragon.");
    if (response2==="past the dragon"){
        let response3= window.prompt ('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:');
if (response3==="stay"){ let response4= window.prompt ('You and the dragon have an uplifting conversation about local politics and become lifelong friends.');
}

 else if (response3 === "run") {
 let response3= window.prompt ('Quickly, you run back to the caves entrance. Sheepish, you return home.');

 }}

else if (response2==="away from the dragon") {
    let response3= window.prompt ("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? Type draw it or pick it.");
 if (response3==="draw it"){
     let response3= window.prompt("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.");

}
else if (response3==="pick it"){let responsee3= window.prompt("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")}
}
}
