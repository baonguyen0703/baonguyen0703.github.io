const body = document.querySelector('body');
const sections = document.querySelectorAll('section');
const secNavbar = document.querySelector('.controls');
const secBtns = document.querySelectorAll('.control')

function PageTransition() {
    // Handle control buttons click event
    secBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeBtn = document.querySelector('.active-btn')
            if (activeBtn !== btn) {
                activeBtn.classList.toggle('active-btn')
                btn.classList.toggle('active-btn')
            } 
            
            
        })
    })

    // Handle sections navigation
    // Choose click event on body but not section buttons because we might use other navigations (e.g. footer, links)
    body.addEventListener('click', (e) => {
        const id = e.target.dataset.id
        if (id) {
            const activeSection = document.querySelector('.section.active')
            const thisSection = document.getElementById(id)
            if (thisSection !== activeSection) {
                activeSection.classList.toggle('active')
                thisSection.classList.toggle('active')
            }

        }

    })


}

PageTransition()