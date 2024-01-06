const Navbar = () => {
  return (
    <div className="nav">
      <a className="site-title" href="/">
        Site Name
      </a>
      <ul>
        <li className="active">
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
