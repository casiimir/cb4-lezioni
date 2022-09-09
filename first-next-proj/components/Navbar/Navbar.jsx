import Link from 'next/link'
 
const Navbar = ({ name }) => {
  
  return (
    <div className="Navbar" style={{textAlign: 'center', cursor: 'pointer'}}>
      <Link href="/movie">
        <a>
          <h1>{ name }</h1>
        </a>
      </Link>
    </div>
  )
}

export default Navbar;