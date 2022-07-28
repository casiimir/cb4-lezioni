import logo from '../../assets/logo.svg';
import './index.css';

const ListItem = ({link="/", title}) => {
  return (
    <li className="ListItem">
      <a className="ListItem__link" href={ link }>{ title }</a>
    </li>
  )
}

const Navbar = () => {
  const linkList = [
    {
      id: 1,
      title: 'Home',
      url: '#'
    },
    {
      id: 2,
      title: 'About',
      url: '#'
    },
    {
      id: 3,
      title: 'Contacts',
      url: '#'
    },
    {
      id: 4,
      title: localStorage.getItem('username') || 'no-user',
      url: '#'
    }
  ]
  
  return (
    <div className="Navbar">
      <img className="Navbar__img" src={logo} alt="logo" />
      <ul className="Navbar__list">
        {
          linkList.map(link => <ListItem title={link.title} link={link.url} key={link.id}/>)
        }
      </ul>
    </div>
  )
}

export default Navbar;