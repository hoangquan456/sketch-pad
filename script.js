let grid = document.getElementById("grid");

function createGrid(size, grid_size) {
    grid.style.height = grid_size;
    grid.style.width = grid_size;    
    for(let i = 0; i < size; ++i) {
        let row = document.createElement("div"); 
        row.setAttribute("class", "row");
        for(let i = 0; i < size; ++i) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            row.append(square);
        }
        grid.append(row); 
    }
}

let tracking = false;
document.addEventListener("mousedown", (e)=>{
    tracking = true;
    if (e.target.className == "square") {
        e.target.style.backgroundColor = "black";
    }
});

document.addEventListener("mouseup", ()=>{
    tracking = false;
});

document.addEventListener("mousemove", (e)=>{
    if (tracking && e.target.className == "square") {
        e.target.style.backgroundColor = "black";
    }
});

let size = 16;
createGrid(size, "650px");

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
    let num = prompt("How many squares per side do you want?");
    grid.innerHTML = "";
    size = num;
    createGrid(num, "650px");
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () =>{
    grid.innerHTML = "";
    createGrid(size, "650px");
});