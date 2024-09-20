(function () {
    const links = document.querySelectorAll('.menu-item')
    const mobile = document.querySelector('.mobile')

    if (links.length > 0) {
        for (const link of links) {
            const linkHref = link.querySelector('a').getAttribute('href');
            const currHref = window.location.pathname;
            if (linkHref === currHref) link.classList.add('_current')
        }
    }

    if (mobile) {
        const mobileOpen = () => mobile.classList.add('_active')
        const mobileClose = () => mobile.classList.remove('_active')

        document.addEventListener('click', (e) => {
            if (e.target.closest('.open-mobile')) mobileOpen()
            else if (mobile.classList.contains('_active') && (e.target.closest('.close-mobile') || !e.target.closest('.mobile-inner'))) mobileClose()
        })
    }
})()