import Button from '../../shared/uibuttons';
import styles from './settings.module.scss';


function Settings(props) {

    // Esitellään uusi lomake ja toiminta miten lisätä uusia paikkoja.
    const handleTypeSubmit = (event) => {
        event.preventDefault();
        const newtype = event.target.elements.place.value;
        props.onTypeSubmit(newtype);
        event.target.elements.place.value = "";
    }

    return (
        <div className={styles.settings}>
            <h2>Asetukset</h2>
            <h3>Heittopaikat</h3>
            <div className={styles.settings_types}>
                {props.types.map((type) => <div key={type}>{type}</div>)}
                <form onSubmit={handleTypeSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="place" />
                        <Button type="submit" primary>Lisää</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Settings;