document.addEventListener('DOMContentLoaded', init, false);
function init() {

    const tabs = document.querySelectorAll('[data-target]');
    let tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(t => {
        t.addEventListener('click', ()=>{
            const target = document.querySelector(t.dataset.target)

            tabContents.forEach(tc =>{
                tc.classList.remove('filters__active');
            })

            target.classList.add('filters__active');

            tabs.forEach(tab => {
                tab.classList.remove('filter-tab-active');
            })

            t.classList.add('filter-tab-active');
        })
    })
}