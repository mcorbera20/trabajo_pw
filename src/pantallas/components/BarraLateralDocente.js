import { Link } from "react-router-dom";

export default function BarraLateralDocente(){
    return(
        <div className="Lateral">
            <nav className="Paginas">
                <ul>
                    <li><Link to={'/'}>Principal</Link></li>
                    <li><Link to={'/perfil'}>Perfil</Link></li>
                    <li><Link to={'/citas'}>Citas</Link></li>
                    <li><Link to={'/horarios'}>Horarios</Link></li>
                    <li><Link to={'/calificaciones'}>Calificaciones</Link></li>
                </ul>
            </nav>
            <div className="Version">
                <p>SAC v1.0.1-alpha</p>
            </div>
        </div>
    )
}