

let allcheck_box = document.querySelectorAll(".checkbox");
let goalconatiner = document.querySelectorAll(".goal-container");
let allinput = document.querySelectorAll(".goal-input");
let eror_lable = document.querySelector(".goal-error");
let progresbar = document.querySelector(".progress-bar");
let goal_target = document.querySelector(".target-goal");
let progress_value = document.querySelector(".progress-value")
let progress_lable = document.querySelector(".progress-lable");

// *** this code for check box color green ---
allinput.forEach((input) => {
  input.value = allGoals[input.id].name;
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed")
  }
  input.addEventListener("focus", (e) => {
    progresbar.classList.remove("showeror")
  })
  input.addEventListener("input", (e) => {
    if(allGoals[input.id].completed){
      input.value = allGoals[input.id].name;
      return
    }

    allGoals[input.id] = {
      name: input.value,
      completed: false
    }
    localStorage.setItem("allGaols", JSON.stringify(allGoals))
  })
})


// allname = {
//   userdata: {
//     name: "nauman",
//     city: "palanpur"
//   },
// }
// console.log(allname.userdata)

// localStorage.setItem("goalvalue", goal_target.innerText);
// let goalvalue = localStorage.getItem("goalvalue");
// console.log(goalvalue)






