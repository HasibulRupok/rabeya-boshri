document.getElementById("publicationBtn").addEventListener('click', function () {
    activeMe(1);
});
document.getElementById("educationsBtn").addEventListener('click', function () {
    activeMe(2);
});

document.getElementById("experienceBtn").addEventListener('click', function () {
    activeMe(3);
});

function activeMe(id) {
    if (id == 0) return;
    const buttons = ['N/A', 'publicationBtn', 'educationsBtn', 'experienceBtn'];
    const tabs = ['N/A', 'publicationTab', 'educationsTab', 'experience-Tab'];

    const experienceTab = document.getElementById(tabs[id]);
    console.log(experienceTab);
    if (experienceTab.style.display === 'none') {
        let i = 1;
        for (i = 1; i < tabs.length; i++) {
            if (i == id) continue;

            let tab = '#' + tabs[i];
            let btn = '#' + buttons[i];

            $(tab).css("display", "none");
            $(btn).removeClass("activeExpButton");
        }
        let tab = '#' + tabs[id];
        let btn = '#' + buttons[id];
        $(tab).css("display", "block");
        $(btn).addClass("activeExpButton");
        return;
    }
}