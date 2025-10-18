
let leads = [];
let leadsLocalStorageKey = "leads";
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

fetchLeads();

saveBtn.addEventListener("click", function() {
    leads.push(inputEl.value);
    clearIt(inputEl); 
    window.localStorage.setItem(leadsLocalStorageKey, JSON.stringify(leads));

    render(leads);
})

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        leads.push(activeTab.url);
        console.log(activeTab);
        console.log(activeTab.url);
        window.localStorage.setItem(leadsLocalStorageKey, JSON.stringify(leads));
        render(leads);
    } )
})

deleteBtn.addEventListener("dblclick", function() {
    window.localStorage.clear();
    leads = [];
    render(leads);
})

function render(leads) {
    let listItems = ``;
    if (leads) {
        leads.forEach(function (leadValue) {
            listItems += `
            <li>
                <a target="_blank" href=${leadValue}>
                    ${leadValue}
                </a>
            </li>
            `;
        })
        ulEl.innerHTML = listItems;
    }
}

function fetchLeads() {
    const leadsFromLocalStorage = JSON.parse( window.localStorage.getItem(leadsLocalStorageKey) );
    if (leadsFromLocalStorage) {
        leads = leadsFromLocalStorage;
        render(leads);
    }
}

function clearIt(target) {
    target.value = "";
}