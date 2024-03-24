import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - Made by Harshit Sethi</p>
    </footer>
  );
}

export default Footer;
