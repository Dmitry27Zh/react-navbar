const Navbar = () => {
  return (
    <div className="nav">
      <a className="site-title" href="/">
        Site Name
      </a>
      <ul>
        <CustomLink href="/pricing">Pricing</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul>
    </div>
  )
}

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname
  const isActive = href === path

  return (
    <li className={isActive ? 'active' : ''}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}

export default Navbar
