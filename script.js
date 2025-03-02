let grid = document.getElementById("grid");




function createGrid(size) {
    for(let i = 0; i < size; ++i) {
        let row = document.createElement("div"); 
        for(let i = 0; i < size; ++i) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            row.append(square);
        }
        grid.append(row); 
    }

}

createGrid(16);