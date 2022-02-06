
export default function Footer() {
  return (
    <footer className="page-footer cyan darken-4">
      <div className="footer-copyright cyan darken-4">
        <div className="container cyan darken-4">
        © {new Date().getFullYear()} Copyright
        <a className="grey-text text-lighten-4 right" href="!#">Repo</a>
        </div>
      </div>
    </footer>
  )
}
