export default function BarraLateral(){
    return(
        <div className="Lateral">
            <div className="Paginas">
                <ul>
                    <li><button className="btnbanner" >Principal</button></li>
                    <li><button className="btnbanner" >Perfil</button></li>
                    <li><button className="btnbanner" >Horarios</button></li>
                    <li><button className="btnbanner" >Calificaciones</button></li>
                </ul>
            </div>
            <div className="Version">
                <p>SAC v1.0.1-alpha</p>
            </div>
        </div>
    )
}