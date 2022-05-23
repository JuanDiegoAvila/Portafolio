import Dbeaver from '../public/img/dbeaver.png'
import DbeaverB from '../public/img/dbeaver-background.png'
import Dia from '../public/img/dia.png'
import Insomnia from '../public/img/insomnia.png'
import neo4j from '../public/img/neo4j.png'
import unity from '../public/img/unity.png'
import './styles/Software.css'

/*
- Unity
- Dbeaver
- Neo4j
- Insomnia
- Dia
 */

const Software = () => (
  <div className="software-container">
    <h1>Software</h1>
    <div className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${DbeaverB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${Dbeaver})` }} />
          <h2>DBeaver</h2>
        </div>
        <p>
          DBeaver es una aplicación de software cliente de
          SQL y una herramienta de administración de bases de datos.
        </p>
        <a href="https://dbeaver.io">Más información</a>
      </div>
    </div>
  </div>
)

export default Software
