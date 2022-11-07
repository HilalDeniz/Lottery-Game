let chance = document.getElementsByTagName("span");
console.log(chance);
let myList=document.getElementsByClassName("ball-1");
let myButton = document.getElementById("button");
let winner = document.getElementById("winner");
winner.style.display="none"
myButton.addEventListener("click", ()=>{
 
    sayac=0
    let c=[];
    for (a=0; a < myList.length; a++) {
        b =chance[a].innerHTML = Math.floor(Math.random() * 100);
        c.push(b);
        for (let h = 0; h < myList.length; h++) {
            if (c[a]==c[h]) {
                
                for (let d = 0; d < a; d++) {
                    if (c[d]==c[h]) {
                        console.log("Same Number")
                        winner.style.display="block"
                        sayac = -1;
                        break;   
                    }
                    sayac++
                    winner.style.display="none";
                } 
            }
        } 
    }
    console.log(c);
    return c
});





