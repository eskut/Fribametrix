import styles from './edititem.module.scss';
import ItemForm from "../../components/itemform";
import { useParams } from 'react-router-dom';

function EditItem(props) {

    // Tuloskortin muokkaamiseen haetaan id perusteella data.
    const { id } = useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item = props.data[index];

    return (
        <div className={styles.edititem}>
            <h2>Tuloskortin muokkaaminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit} data={item} types={props.types} onItemDelete={props.onItemDelete} />
        </div>
    );
}

export default EditItem;