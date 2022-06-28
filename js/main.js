// let index = '';
// let tasks = '';
// let kanban = '';
// let members = '';
// const rootDiv = document.getElementById('content');
// let routes;

// window.onpopstate = () => {  
// 	rootDiv.innerHTML = routes[window.location.pathname];
//   };
  
// /**
//  *
//  * @param {String} page - Represents the page information that needs to be retrieved
//  * @returns {String} resHtml - The Page's HTML is returned from the async invocation
//  */

// const loadPage = async (page) => {
//   const response = await fetch(page);
//   const resHtml = await response.text();
//   var parsedData = new DOMParser().parseFromString(resHtml, 'text/html');
// 	let content = parsedData.getElementById('content').innerHTML;
// 	console.log(content)
//   return content;
// };

// /**
//  * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
//  */
// const loadAllPages = async () => {
//   index = await loadPage('index.html');
//   tasks = await loadPage('tasks.html');
//   kanban = await loadPage('kanban.html');
//   members = await loadPage('members.html');
// };

// /**
//  * The Main Function is an async function that first loads All Page HTML to the variables
//  * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
//  */
// const main = async () => {
//   await loadAllPages();
//   rootDiv.innerHTML = index;
//   routes = {
//     '/': index,
// 	'/tasks': tasks,
//     '/members': members,
//     '/kanban': kanban,
//   };
// };

// // Invoke the Main function
// main();

// /**
//  *
//  * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
//  * The function is invoked when any link is clicked in the HTML.
//  * The onClick event on the HTML invokes the onNavClick & passes the pathname as param
//  */
//  const onNavClick = (pathname) => {
// 	window.history.pushState({}, pathname, window.location.origin + pathname);
// 	rootDiv.innerHTML = routes[pathname];
//   };

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/tasks": "/pages/tasks.html",
    "/kanban": "/pages/kanban.html",
    "/members": "/pages/members.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();