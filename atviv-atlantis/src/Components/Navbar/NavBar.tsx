import { Link } from 'react-router-dom';
import "./Nav.css"


  const Navbar: React.FC = () => {
    return (
        <>
            <div className='navMain'>

                <Link to="/CadastroCli" ><button className='custom-button-nav'>Cadastrar</button></Link>

                <Link to="/ListagemCli" ><button className='custom-button-nav'>Listar</button></Link>

            </div>
        </>
    );
}
  
  export default Navbar;
  