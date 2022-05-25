import './styles/Conocimientos.css'

const Conocimientos = () => {
  const conocimientos = ['PostgreSQL', 'React', 'Webpack', 'Vite', 'Babel', 'ESLint']
  return (
    <div id="conocimientos" className="software-container">
      <h1>Conocimientos En</h1>
      {
        conocimientos.map((conocimiento, index) => (
          <div>
            {conocimiento}
          </div>
        ))
      }
    </div>
  )
}
export default Conocimientos
