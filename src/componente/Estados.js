const EjemploEstado02 = props => {

    const[counter, setCounter] = useState(0)

    return(
        <div className="container">
            <div className="counter">
                <h3>{`contador: ${counter}`}</h3>
            </div>
            <div className="button">
                <button className="sucess" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>
            </div>
        </div>
    )
}

import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Ropas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item to="/hombres">Action</Dropdown.Item>
        <Dropdown.Item to="/mujeres">Another action</Dropdown.Item>
        <Dropdown.Item to="/niños">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const HomePage = (pops) =>{

    const settings={
        arrows: false,
        infinite: true,
        speed:500,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true,
    }
    return(
        <div className="galeria">
            <Slider {...settings}>
            <img src="images/img01.jpg" alt=""/>
                <img src="img 1.jpg" alt=""/>
                <img src="img 2.jpg" alt=""/>
                <img src="img 3.jpg" alt=""/>
                <img src="img 4.jpg" alt=""/>
                <img src="img 5.jpg" alt=""/>
                
            </Slider>
        </div>
    )
}
import {useState} from "react"

const EjemploEstado01 = props =>{

    const [activo, setActivo] = useState(true)// activo variable y setActivo funcion que lo modifica

    const toggleActivo = e => {
        setActivo(!activo) //negacion booleano => setea el activo al contrario de la que esta activa
    }


    return(
        <div>

            <input type="text" placeholder="cliclear boton" disabled={!activo} />{/*disabled > deabilitado*/}
            <button onClick={toggleActivo}>{activo ? 'desactivar' : 'activar'}</button>{/* operador ternarioque ve que pasa con la varible activo*/}

        </div>
    )
}

export default {
    BasicExample, 
    HomePage
}

export {
    EjemploEstado01,
    EjemploEstado02
}