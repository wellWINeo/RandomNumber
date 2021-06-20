/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


// calculates random value
function Random() {
    var min = Number(document.getElementById("inputMin").value)
    var max = Number(document.getElementById("inputMax").value)
    
    if (max <= min) {
        alert("You are an idiot!")
        return
    }

    var rand = Math.random();

    var value = Math.floor(rand * (max - min)) + min

    var label = document.getElementById("resultLabel")
    if (label == null) {
        label = document.createElement("LABEL")
        label.id = "resultLabel"
        label.innerText = "Result: " + value
        document.getElementById("divResult").appendChild(label)
    } else {
        label.innerText = "Result: " + value
    }
}

// input field click
function inputAnimate(elem) {
    elem.className = "inputAnimateClass" 
}


/*
 * Theming
 */
function setTheme(themeName) {
    localStorage.setItem("theme", themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light")
    } else {
        setTheme("theme-dark")
    }
}

// function to init theme
function startupAction(){
    var savedTheme = localStorage.getItem("theme")

    // system theme listener
    window?.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
        e => {
            const newColorScheme = e.matches ? "theme-dark" : "theme-light"
            setTheme(newColorScheme)
        })  
    
    // if no saved theme prefers, then
    // rtying to get system prefers theme
    if (savedTheme == null) {
        if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
            savedTheme = "theme-dark" 
        } else {
            savedTheme = "theme-light"
        }
    }

    var slider = document.getElementById("inputCheckbox") 
    if (slider != null) {
        slider.checked = (savedTheme === "theme-dark") 
    } else {
        console.log("element is null")
    }
    setTheme(savedTheme)
}


window.onload = startupAction
