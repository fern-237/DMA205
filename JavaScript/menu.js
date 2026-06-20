const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll("header nav ul li a");
   <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>


menuLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});