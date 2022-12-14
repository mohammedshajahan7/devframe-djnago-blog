window.addEventListener('load', ()=>{
    const searchIcon = document.querySelector('#search_toggle') || null
    const searchBox = document.querySelector('#search_box')

    const mobileMenu = document.querySelector('.mobile_menu_container')
    const mobileMenuIcon = document.querySelector('.mobile_menu_icon')
    const menuCloseIcon = document.querySelector('.menu_close_icon')

    // mobile menu
    mobileMenuIcon.addEventListener('click', ()=>{
        mobileMenu.classList.add('active')
    })

    menuCloseIcon.addEventListener('click', ()=>{
        mobileMenu.classList.remove('active')
    })

    // search toggle
    if(searchIcon !== null){
        searchIcon.addEventListener('click', ()=>{
            searchBox.classList.toggle('active')
        })    
    }
})
