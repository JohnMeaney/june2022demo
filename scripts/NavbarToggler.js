'use strict'

const icon = document.getElementById("burger-icon")
const navBar = document.getElementById("topnav")

icon.addEventListener("click", evt => {
    if (navBar.className === "initial-state"){
        navBar.className = "showing-mobile"
    } else {
        navBar.className = "initial-state"
    }
})