const input = document.querySelector(".text-input")
const input2 = document.querySelector(".text-input2")
const input3 = document.querySelector(".text-input3")
const btn = document.querySelector(".add-btn")
const list = document.querySelector(".list")

const clasess ={
    li:"list-group-item d-flex justify-content-between align-items-center",
    delBtn:" del-btn btn btn-danger",
    span: "d-flex align-items-center",
    checked: "check-box mx-1 "
}

function view(){
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    let allList = ""
    tasks.map(el =>{
        allList += `<li class="${clasess.li} bg-secondary"><span class="text-white">${el.name}</span><span class="${clasess.span} text-white">
${el.title}</span> <span class="text-white">${el.number}</span>
<button class="${clasess.delBtn}">delete</button></li>`
    })

    list.innerHTML = allList
    deleteTask()
}
view()

btn.addEventListener("click",() =>{
    let  tasks = JSON.parse(localStorage.getItem("task")) || []
    let newTask ={
        id: tasks.length ? tasks[tasks.length -1].id + 1 : 1 ,
        title: input.value,
        number: input2.value,
        name: input3.value,
        isDone: false,
    }
    tasks = [...tasks,newTask]

    localStorage.setItem('task',JSON.stringify(tasks))
})





function deleteTask() {
    const buttons = document.querySelectorAll('.del-btn')
    let  tasks = JSON.parse(localStorage.getItem("task")) || []

    buttons.forEach((btn,index)  =>{
        btn.addEventListener('click', () =>{
            tasks = tasks.filter((el,idx) =>{
                return index !== idx
            })
            localStorage.setItem('task',JSON.stringify(tasks))
            view()
        })
    })
}
