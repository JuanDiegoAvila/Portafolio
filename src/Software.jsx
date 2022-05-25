import Dbeaver from '../public/img/dbeaver.png'
import DbeaverB from '../public/img/dbeaver-background.png'
import Insomnia from '../public/img/insomnia.png'
import InsomniaB from '../public/img/insomnia-background.png'
import neo4j from '../public/img/neo4j.png'
import neo4jB from '../public/img/neo4j-background.png'
import unity from '../public/img/unity.png'
import unityB from '../public/img/unity-background.jpg'
import Lucidchart from '../public/img/lucidchart.png'
import LucidchartB from '../public/img/lucidchart-background.png'
import Figma from '../public/img/figma.png'
import FigmaB from '../public/img/figma-background.png'
import './styles/Software.css'
import 'aos/dist/aos.css'

const Software = () => (
  <div id="software" className="software-container">
    <h1>Software y herramientas</h1>
    <div data-aos="fade-left" className="software-item">
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
        <a href="https://dbeaver.io" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
    <div data-aos="fade-right" className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${unityB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${unity})` }} />
          <h2>Unity</h2>
        </div>
        <p>
          Unity es un motor de videojuego multiplataforma creado por Unity Technologies.
          Unity está disponible como plataforma de desarrollo para Microsoft Windows, Mac OS, Linux.
        </p>
        <a href="https://unity.com/es" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
    <div data-aos="fade-left" className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${neo4jB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${neo4j})` }} />
          <h2>Neo4j</h2>
        </div>
        <p>
          Neo4j es un software libre de Base base de datos orientada a
          grafos, creada por Neo Technology Inc e implementado en Java.
        </p>
        <a href="https://neo4j.com" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
    <div data-aos="fade-right" className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${InsomniaB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${Insomnia})` }} />
          <h2>Insomnia</h2>
        </div>
        <p>
          Insomnia es una aplicación de escritorio de código
          abierto rápida y liviana que funciona como una herramienta
          para el diseño y las pruebas de API
        </p>
        <a href="https://insomnia.rest" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
    <div data-aos="fade-left" className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${LucidchartB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${Lucidchart})` }} />
          <h2>LucidChart</h2>
        </div>
        <p>
          Lucidchart es un software de diagramación online que
          ayuda a individuos y equipos a visualizar procesos, sistemas
          y estructuras organizacionales.
        </p>
        <a href="https://www.lucidchart.com/pages/es/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_es_tier2_mixed_search_brand_exact_&km_CPC_CampaignId=1501207859&km_CPC_AdGroupID=63362176052&km_CPC_Keyword=lucidchart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=286841060366&km_CPC_TargetID=kwd-33511936169&km_CPC_Country=1007583&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=EAIaIQobChMI8MuXkJT59wIVRMDICh2EhwvtEAAYASAAEgJAevD_BwE" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
    <div data-aos="fade-right" className="software-item">
      <div className="imagen-software" style={{ backgroundImage: `url(${FigmaB})` }} />
      <div className="contenido-software">
        <div className="titulo-software">
          <div className="imagen-titulo-software" style={{ backgroundImage: `url(${Figma})` }} />
          <h2>Figma</h2>
        </div>
        <p>
          Figma es una herramienta de prototipado
          web y editor de gráficos vectorial
        </p>
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Más información</a>
      </div>
    </div>
  </div>
)

export default Software
