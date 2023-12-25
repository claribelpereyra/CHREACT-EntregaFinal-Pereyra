import CardWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavaBar = () => {
  return (
    <header>
        <h1>BUSCA LIBRE</h1>

        <nav>
            <ul>
                <li>Libros</li>
                <li>Novedades</li>
                <li>Preventa</li>
                <li>Más vendidos</li>
                <li>Agendas 2024</li>
            </ul>
        </nav>
        <CardWidget/>
    
    </header>
  )
}

export default NavaBar