import { Link } from 'react-router-dom';
import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {
    // Esitellään kaikki tiedot josta haetaan yksittäinen tieto.
    const items = props.data.map((item) => <Item key={item.id} data={item} />);

    return (
        <ButtonContainer>
            <div>
                { items }
                <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
            </div>     
        </ButtonContainer>
    );
}

export default Items;