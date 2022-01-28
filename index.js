function clickTabs(){
    document.querySelectorAll(".tabs-button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer=sideBar.parentElement;
            const tabsName = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab="${tabsName}"]`);

            sideBar.querySelectorAll(".tabs-button").forEach(button => {
                button.classList.remove("tabs-button--active");
            });

            tabsContainer.querySelectorAll(".tabs-content").forEach(tab => {
                tab.classList.remove("tabs-content--active");
            });

            button.classList.add("tabs-button--active");
            tabToActivate.classList.add("tabs-content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    clickTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer=>{
        tabsContainer.querySelector(".tabs-sidebar .tabs-button").click();
    })
});

function fetchCatFacts(){
    fetch("https://cat-fact.herokuapp.com/facts")
.then(response =>{
    return response.json()