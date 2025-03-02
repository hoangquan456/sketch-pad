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

createGrid(16, "600px");