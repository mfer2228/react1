import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../cartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Navbar = () => {
    
    return (
        <>
        <Container>
            <Row>
        <nav>
            <h1> Anónimo</h1>
            
            <div>
                <button>Calzado?</button>
                <button> Comida?</button>
                <button>Animales en peligro de extinción?</button>
            </div>

        <CartWidget/>
        </nav>
        </Row>
        </Container>
        </>
    )
}

export default Navbar