import { NavLink } from "react-router-dom"


const Nav = (props) => {
  return (
    <nav>
      <ul className="holder">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} >inicio</NavLink></li>

        <li><NavLink to="/hombres" className={({ isActive }) => isActive ? "activo" : undefined} > hombres</NavLink></li>
        <li><NavLink to="/mujeres" className={({ isActive }) => isActive ? "activo" : undefined} >mujeres</NavLink></li>
        <li><NavLink to="/niños" className={({ isActive }) => isActive ? "activo" : undefined} >niños</NavLink></li>

        <li><NavLink to="/contactos" className={({ isActive }) => isActive ? "activo" : undefined} >contactos</NavLink></li>
      </ul>
    </nav>
  )
}


export default Nav

