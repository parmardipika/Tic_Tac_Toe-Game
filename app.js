let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#new-but")
let msgcontainer=document.querySelector(".messege")
let msg=document.querySelector("#mess")


let turnO=true; //playerX, playerO
let win_combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

       if(turnO)
       {
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;

       checkWinner();
    });
});
const enableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is : ${winner} 🙃`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}

const checkWinner=()=>{
    for (pattern of win_combinations)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3 && pos3===pos1)
            {
                
            console.log(`${pos1} is winner`);
            showWinner(pos1);
            }
            
        }
        
    }
};
const reset=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        msgcontainer.classList.add("hide");
        enableboxes();

    })};
    resetbtn.addEventListener("click",reset);
    newGame.addEventListener("click",reset);

//lc: q: find winner on a tic tac toe game
//change color: x and O
// syntax for draw case: hw prb