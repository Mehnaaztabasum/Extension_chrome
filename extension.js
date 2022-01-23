let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log(tabs)
            // since only one tab should be active and in the current window at once
            // the return variable should only have one entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id // or do whatever you need
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

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
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    /*let arr = [];
    const inputbtn = document.getElementById("input-btn");
    const deletebtn = document.getElementById("delete-btn");

    const inp = document.getElementById("input-el");

    let ulist = document.getElementById("ulist");

    let fromlocal = JSON.parse(localStorage.getItem("arr"))

    if (fromlocal) {
        arr = fromlocal;
        renderleads();
    }

    deletebtn.addEventListener("dblclick", function() {
        localStorage.clear();
        arr = [];
        renderleads();
    })

    inputbtn.addEventListener("click", function() {
        arr.push(inp.value);
        inp.value = " "

        localStorage, setItem("arr", JSON.stringify(arr))
        renderleads();
    })

    function renderleads() {
        let list = " ";
        for (let i = 0; i < arr.length; i++) {
            list += "<li> <a  target='_blank'href='#' >" + arr[i] + "</a></li>";

        }
        ulist.innerHTML = list;
    }*/