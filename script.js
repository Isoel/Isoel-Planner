//  display current date, time, and additional events
function displayDateTime() {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
  
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
  
    const month = today.getMonth();
    const day = today.getDate();
  
    if (month === 11 && day === 22) {
      console.log("Happy Birthday!");
    }
  
    const weekday = today.getDay();
    const hour = today.getHours();
    const minutes = today.getMinutes();
  
    if (
      (weekday === 1 || weekday === 2 || weekday === 4) &&
      hour === 18 &&
      minutes >= 30 &&
      hour < 21
    ) {
      console.log("Class in session");
    }
  }
  
  //  task to planner
  function addTask() {
    const task = prompt("Enter a task:");
  
    if (task) {
      const taskList = document.getElementById("task-list");
      const taskItem = document.createElement("li");
      taskItem.innerText = task;
      taskList.appendChild(taskItem);
    }
  }
  
  // event listener and add task button
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addTask);
  
  //  current date, time, and additional events
  displayDateTime();
  