import React from "react";

function Footer(){

    let curr = new Date().getFullYear();
    return <footer>
    <p>COPYRIGHT {curr}</p>
    </footer>
}

export default Footer;