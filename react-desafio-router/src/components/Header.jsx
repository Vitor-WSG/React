import { NavLink} from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <h1>Componente Header Works</h1>
      <NavLink to='/' end className={styles.hoverLink}>Home</NavLink> | 
      <NavLink to='produtos' className={styles.hoverLink}>Produtos</NavLink> | 
      <NavLink to='contato'className={styles.hoverLink}>Contato</NavLink>
    </div>
  )
}

export default Header
