// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#', subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  // Select and cache the <main> element
  const mainEl = document.querySelector('main');
  
  // Set the background color of mainEl to the value stored in the --main-bg CSS custom property
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Set the content of mainEl to <h1>DOM Manipulation</h1>
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
  
  // Add a class of flex-ctr to mainEl
  mainEl.classList.add('flex-ctr');
  
  // Select and cache the <nav id="top-menu"> element
  const topMenuEl = document.querySelector('#top-menu');
  
  // Set the height of the topMenuEl element to be 100%
  topMenuEl.style.height = '100%';
  
  // Set the background color of topMenuEl
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Add a class of flex-around to topMenuEl
  topMenuEl.classList.add('flex-around');
  
  // Iterate over the menuLinks array
  menuLinks.forEach(link => {
    const menuItem = document.createElement('a');
    menuItem.href = link.href;
    menuItem.textContent = link.text;
    topMenuEl.appendChild(menuItem);
  });
  
  // =========== Part 2 Code  ========== //
  // Select and cache the <nav id="sub-menu"> element
  const subMenuEl = document.getElementById("sub-menu");
  
  // Set the height of subMenuEl to be "100%"
  subMenuEl.style.height = "100%";
  
  // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
  subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
  
  // Add the class of flex-around to the subMenuEl element
  subMenuEl.classList.add("flex-around");
  
  // Set the CSS position property of subMenuEl to the value of absolute
  subMenuEl.style.position = "absolute";
  
  // Set the CSS top property of subMenuEl to the value of 0
  subMenuEl.style.top = "0";
  
  // Select and cache all <a> elements inside of topMenuEl
  const topMenuLinks = topMenuEl.querySelectorAll("a");
  
  // Helper function to build the submenu
  function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = '';
    
    // Iterate over the subLinks array
    subLinks.forEach(subLink => {
      // Create an <a> element
      const subMenuItem = document.createElement('a');
      
      // Add an href attribute to the <a>, with the value set by the href property of the "link" object
      subMenuItem.href = subLink.href;
      
      // Set the element's content to the value of the text property of the "link" object
      subMenuItem.textContent = subLink.text;
      
      // Append the new element to the subMenuEl
      subMenuEl.appendChild(subMenuItem);
    });
  }
  
  // Attach a delegated 'click' event listener to topMenuEl
  topMenuEl.addEventListener("click", function(event) {
    // Call preventDefault() method of the event object
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element
    if (!event.target.matches("a")) return;
  
    // Cache the clicked <a> element
    const clickedLink = event.target;
  
    // Cache the "link" object associated with the clicked <a> element
    const clickedLinkObj = menuLinks.find(link => link.text === clickedLink.textContent);
  
    // Toggle the "active" class for the clicked <a> element
    clickedLink.classList.toggle("active");
  
    // Loop through each <a> element in topMenuLinks
    topMenuLinks.forEach(link => {
      // Remove the "active" class from all other <a> elements
      if (link !== clickedLink) {
        link.classList.remove("active");
      }
    });
  
    // Set the submenu state based on the active/inactive state of the clicked <a> element
    if (clickedLinkObj && clickedLinkObj.subLinks) {
      if (clickedLink.classList.contains("active")) {
        // Show the submenu
        buildSubmenu(clickedLinkObj.subLinks);
        subMenuEl.style.top = "100%";
      } else {
        // Hide the submenu
        subMenuEl.style.top = "0";
      }
    } else {
      // If the clicked <a> element does not have sublinks, hide the submenu
      subMenuEl.style.top = "0";
    }
  
    // Log the content of the <a> to verify the handler is working
    console.log(clickedLink.textContent);
  });
  
  // Attach a delegated 'click' event listener to subMenuEl
  subMenuEl.addEventListener("click", function(event) {
    // Call preventDefault() method of the event object
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element
    if (!event.target.matches("a")) return;
  
    // Log the content of the <a> to verify the handler is working
    console.log(event.target.textContent);
  
    // Set the CSS top property of subMenuEl to 0
    subMenuEl.style.top = "0";
  
    // Remove the active class from each <a> element in topMenuLinks
    topMenuLinks.forEach(link => {
      link.classList.remove("active");
    });
  
    // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    
    // Special case for the ABOUT link
    if (event.target.textContent.toLowerCase() === 'about') {
      mainEl.innerHTML = '<h1>About</h1>';
    }
  });
  