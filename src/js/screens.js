/*
    Nav links
*/
const navLinkHome = document.getElementById('home');
const navLinkAbout = document.getElementById('about_link');
const navLinkBlog = document.getElementById('blog_link');
const navLinkContact = document.getElementById('contact_link');

/*
    Actived Link
*/
const activedLink = document.querySelector('.main_header__navbar__actived');

/*
    Header
*/
const header = document.querySelector('.main_header');

/*
    Screens
*/
const homeScreen = document.querySelector('.homeScreen');
const aboutScreen = document.querySelector('.aboutScreen');
const blogScreen = document.querySelector('.blogScreen');
const contactScreen = document.querySelector('.contactScreen');

/*
    While home button has been pressed
*/
navLinkHome.addEventListener('click', () => {
    aboutScreen.classList.remove('actived_page');
    blogScreen.classList.remove('actived_page');
    contactScreen.classList.remove('actived_page');
    header.classList.remove('color-white');
    header.classList.remove('color-lightyellow');
    navLinkAbout.classList.remove('main_header__navbar__actived');
    navLinkContact.classList.remove('main_header__navbar__actived');
    navLinkBlog.classList.remove('main_header__navbar__actived');
    navLinkHome.classList.add('main_header__navbar__actived');
});

/*
    While "who we are?" button has been pressed
*/
navLinkAbout.addEventListener('click', () => {
    aboutScreen.classList.add('actived_page');
    blogScreen.classList.remove('actived_page');
    contactScreen.classList.remove('actived_page');
    header.classList.add('color-white');
    header.classList.remove('color-lightyellow');
    navLinkAbout.classList.add('main_header__navbar__actived');
    navLinkBlog.classList.remove('main_header__navbar__actived');
    navLinkHome.classList.remove('main_header__navbar__actived');
    navLinkContact.classList.remove('main_header__navbar__actived');
});

/*
    While blog button has been pressed
*/
navLinkBlog.addEventListener('click', () => {
    blogScreen.classList.add('actived_page');
    aboutScreen.classList.remove('actived_page');
    contactScreen.classList.remove('actived_page');
    header.classList.add('color-lightyellow');
    header.classList.remove('color-white');
    navLinkBlog.classList.add('main_header__navbar__actived');
    navLinkAbout.classList.remove('main_header__navbar__actived');
    navLinkHome.classList.remove('main_header__navbar__actived');
    navLinkContact.classList.remove('main_header__navbar__actived');
});

/*
    While "say hello" button has been pressed
*/
navLinkContact.addEventListener('click', () => {
    contactScreen.classList.add('actived_page');
    blogScreen.classList.remove('actived_page');
    aboutScreen.classList.remove('actived_page');
    header.classList.add('color-lightyellow');
    header.classList.remove('color-white');
    navLinkContact.classList.add('main_header__navbar__actived');
    navLinkBlog.classList.remove('main_header__navbar__actived');
    navLinkAbout.classList.remove('main_header__navbar__actived');
    navLinkHome.classList.remove('main_header__navbar__actived');
});