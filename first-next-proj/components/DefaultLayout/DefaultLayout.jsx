import Navbar from '../Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Navbar name="Navbar"/>
      { children }
      <Navbar name="Footer"/>
    </div>
  )
}

export default DefaultLayout;