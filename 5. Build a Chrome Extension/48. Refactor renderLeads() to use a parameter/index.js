let leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads)
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global leads variable. Remember to update all invocations 
// of the function as well.

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    leads = []
    render()
})

inputBtn.addEventListener("click", function() {
    leads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("leads", JSON.stringify(leads) )
    render()
})