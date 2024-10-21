let myLeads = [];
// let myDate = [];
const myText = document.getElementById("myText");
const addBtn = document.getElementById("addBtn");
const taskDate = document.getElementById("taskDate");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// const DateFromLocalStorage = JSON.parse(localStorage.getItem("myDate"));
const textContent = document.getElementById("textContent");
const delBtn = document.getElementById("delBtn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function addTask() {
    if (myText.value.trim() === "") {
        alert("Please enter some task");
    }
    // else if (taskDate.value.trim() === "") {
    //     alert("Please enter Date")
    // }
    else {
        const Textobj={
            id:Date.now(),
            text:myText.value,
            bgcolor: false,
        }
        myLeads.push(Textobj);
        // myDate.push(taskDate.value)
        myText.value = "";
        // taskDate.value = "00-00-00"
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        // localStorage.setItem("myDate", JSON.stringify(myDate));
        render(myLeads);

        console.log(myLeads);
        // console.log(myDate);

    }

}
function render(leads) {
    let listItems = ""
    // let listDate = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li class="textli">
                <button onclick="handleButtonClick(${leads[i].id})" class="listBtn ${ leads[i].bgcolor ? "iconTick" : ""}  id="tick"> ${leads[i].bgcolor ? '\u2713' : " "}</button>
                ${leads[i].text}
                <p class="dateStyle"></p>
                <div class="delStyle"><button onclick="delButtonClick(${leads[i].id})" class="delBtn">\u00d7</button></div>
            </li>`;
    }
    textContent.innerHTML = listItems
}
function handleButtonClick(info){
    console.log(info);
    // let myLeads=JSON.parse(localStorage.getItem("myLeads"));
    for(let i=0;i<myLeads.length;i++){
        if(myLeads[i].id===info){
            myLeads[i].bgcolor=true;
            // document.getElementById("tick").style.backgroundColor="#99d98c";
            // document.getElementById("tick").textContent="&#10003";

        }
    }

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    // .style.backgroundColor="#99d98c";
    // .innerHTML="#&10003"
  
}

function delButtonClick(indez) {
    console.log(myLeads);

    myLeads = myLeads.filter((val) => val.id != indez)
    console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)

}

function delTask() {
    localStorage.clear()
    myLeads = []
    render(myLeads)

}

function updateText(){
    
}