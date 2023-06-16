import'./../style/contacto.css'

const ContactosPage = (props) => {
    return(
        <main className="holder contacto">
        <div>
            <h2>contacto rapido</h2>
            <form action="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"/>
                </p>
                <p className="arriba">
                    <label for="">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>

                </form>
            
        </div>
        <div className="datos">
            <h2>Otros vias de comunicacion</h2>
            <p>Tambien muede contactarse con nosotros usando los siguiente medios</p>
            <ul>
                <li><i className="fa-solid fa-phone"></i> 21354687878</li>
                <li><i className="fa-solid fa-envelope"></i> contacto@transportes.com.ar</li>
                <li><i className="fa-brands fa-facebook"></i>facebook</li>
                <li><i className="fa-brands fa-twitter"></i>twitter</li>
                <li><i className="fa-brands fa-instagram"></i>instagram</li>
            </ul>
        </div>

    </main>
    )
}

export default ContactosPage