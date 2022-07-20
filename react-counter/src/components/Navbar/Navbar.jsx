import links from '../../assets/links'
import './index.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
        <li>
          <a href="/">Maps</a>
        </li> */}
        {
          links.map(link => (
            <li key={ link.id }>
              <a href={ link.url }>{ link.name }</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar;