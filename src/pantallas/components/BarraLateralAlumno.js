import { Link } from "react-router-dom";

export default function BarraLateralAlumno(){
    return(
        <div className="Lateral">
            <div className="Paginas">
                <ul>
                    <li><Link to={'/'}>Principal</Link></li>
                    <li><Link to={'/perfil'}>Perfil</Link></li>
                    <li><Link to={'/citas'}>Citas</Link></li>
                </ul>
            </div>
            <div className="Version">
                <p>SAC v1.0.1-alpha</p>
            </div>
        </div>
    )
}