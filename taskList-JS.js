//Tasklist thing, there's gonna be a lot of querySelection, addEventListening, appending(), and other S H I T
taskListApplication = function () {
    //Retrieve the taskList (UL), taskCreator (form) and taskInput (text input field)
    taskList = document.querySelector('#taskList')
    taskCreator = document.querySelector('#taskCreator')
    taskInput = document.querySelector('#taskInput')



    taskList.addEventListener('click', function (clickTarget) {
        //This is pretty simple, basically;
        //1: Make sure you're clicking a button
        //2: Find and remove the parent node (list item) 
        //3: Remove button

        if (clickTarget.target.localName == 'button') {

            //was using this for testing purposes, turns out removing two things is a lot easier if you actually use the web dev console to find how parentNode works with .target
            // console.log(clickTarget)
            // console.log(clickTarget.target.parentNode)


            clickTarget.target.parentNode.remove()
            clickTarget.target.remove()
        }


    })


    taskCreator.addEventListener('submit', (e) => {
        e.preventDefault()
        if (taskInput.value != '') {

            //Create the new task, add it to the stupid bootstrap list, and add in the text content
            let newTask = document.createElement('li')
            newTask.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "col-6", "offset-3")
            newTask.textContent = `Task #${document.querySelectorAll('li').length + 1}: `.concat(taskInput.value)

            //Create the remove button, add the bootstrap styling and text content
            let newRemoveButton = document.createElement('button')
            newRemoveButton.classList.add("btn", "btn-danger")
            newRemoveButton.textContent = 'Remove'

            //Put the two together, and add it to the task list
            newTask.append(newRemoveButton)
            taskList.append(newTask)

            //Reset the input field
            taskInput.value = ''
        }


    })
}
taskListApplication()