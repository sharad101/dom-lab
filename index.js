// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Select and cache the <main> element
const mainEl = document.querySelector('main');

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

//Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

//Select and cache the <nav id="top-menu"> element
const topMenuEl = document.querySelector('#top-menu');

//Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

//Set the background color of topMenuEl
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// Iterate over the menuLinks array
menuLinks.forEach(link => {
    const menuItem = document.createElement('a');

    menuItem.href = link.href;
    menuItem.textContent = link.text;

    topMenuEl.appendChild(menuItem);
});


