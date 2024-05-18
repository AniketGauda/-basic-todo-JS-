let todo = ["todo1","todo2","todo3"];
let progress = ["progress1","progress2","progress3"];
let done = ["done1","done2","done3"];

let todoCol = document.getElementById("todo");
let progressCol = document.getElementById("progress");
let doneCol = document.getElementById("done");

function renderTodo(){
    let ans=``;
    todo.forEach((elt,idx)=>{
        ans+=`
        <div class="task todo">
            <p>${elt}</p>
            <button onclick= 'shiftToRight("todo",${idx})'>&rarr;</button>
        </div>`
    });
    todoCol.innerHTML = `<h1>Todo</h1>`;
    todoCol.innerHTML+=ans;
}

function renderProgress(){
    let ans=``;
    progress.forEach((elt,idx)=>{
        ans+=`
        <div class="task progress">
            <p>${elt}</p>
            <button onclick= 'shiftToLeft("progress",${idx})'>&larr;</button>
            <button onclick= 'shiftToRight("progress",${idx})'>&rarr;</button>
        </div>`
    });
    progressCol.innerHTML=`<h1>In-Progress</h1>`;
    progressCol.innerHTML+=ans;
}

function renderDone(){
    let ans=``;
    done.forEach((elt,idx)=>{
        ans+=`
        <div class="task done">
            <p>${elt}</p>
            <button onclick= 'shiftToLeft("done",${idx})'>&larr;</button>
        </div>`
    });
    doneCol.innerHTML = `<h1>Done</h1>`;
    doneCol.innerHTML+=ans;
}

function renderAll(){
    renderTodo();
    renderProgress();
    renderDone();
}

renderAll();

function shiftToRight(colName,idx){
    if(colName =="todo"){
        let itemToBeRemoved = todo[idx];
        todo = todo.filter((elt,i)=> i!=idx);
        progress.push(itemToBeRemoved);
        renderAll();

    }
    else if(colName == "progress"){
        let itemToBeRemoved = progress[idx];
        progress = progress.filter((elt,i)=>i!=idx);
        done.push(itemToBeRemoved);
        renderAll();
    }
}

function shiftToLeft(colName,idx){
    if(colName =="done"){
        let itemToBeRemoved = done[idx];
        done = done.filter((elt,i)=> i!=idx);
        progress.push(itemToBeRemoved);
        renderAll();

    }
    else if(colName == "progress"){
        let itemToBeRemoved = progress[idx];
        progress = progress.filter((elt,i)=>i!=idx);
        todo.push(itemToBeRemoved);
        renderAll();
    }
}