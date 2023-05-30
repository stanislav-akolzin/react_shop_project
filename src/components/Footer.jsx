function Footer() {
    return <footer className="page-footer blue lighten-1">
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/stanislav-akolzin/react_shop_project">Repo</a>
            </div>
        </div>
  </footer>
}

export {Footer}