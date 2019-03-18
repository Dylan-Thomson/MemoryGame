import React from "react";

export function Footer() {
  return (
  <footer className="bg-dark text-light m-0 fixed-bottom">
    <p className="text-center m-0" id="copyright">Copyright &copy;
        <script>
            var d = new Date()
            document.write(d.getFullYear())
        </script> 
        <a className="copyright-link" href="https://github.com/Dylan-Thomson" target="_blank" rel="noopener noreferrer"> Dylan Thomson</a>
    </p>
  </footer>
  )
}

export default Footer;