import'./../style/home.css'
const HomePage = (props) => {
    return(
        <main class="holder">
        <div class="homeimg">
            <div>
                <form action="">
                <p>
                <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                <input type="text" value="Busca por producto,categoria"/>
                </p>
            </form>
                <img src="fondo.jpg" alt=""/>
            </div>
        </div>
            <div class="columnas">
                <div class="bienvenidos">
                    <h2>Bienvenita:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt porro, facere eaque perferendis nam nemo molestias, amet voluptatum cumque dolores non ad repudiandae sapiente fuga, voluptate blanditiis necessitatibus vitae.
                    Ea et qui doloremque illo dolor, corporis consectetur repudiandae, assumenda praesentium ad harum optio ducimus debitis, quaerat voluptatibus tempore dicta non? Officia voluptatum, vitae perspiciatis necessitatibus blanditiis nulla molestiae assumenda.</p>    
                </div>
            <div class="testimonios">
                <h2>Ubicacion:</h2>
                <div class="testimonio">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.231080890433!2d-58.44144046523441!3d-34.61291269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5edb11c12f%3A0xfd2e03f31c59e900!2sEscuela%20de%20Posgrados%20%7C%20U.T.N.%20%E2%80%93%20F.R.B.A.!5e0!3m2!1ses-419!2sar!4v1686860413589!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
    </main>

    )
}

export default HomePage