import styles from './item.module.scss';
import { MdNavigateNext } from 'react-icons/md';

function Item(props) {

    const locale = "fi-FI";
    const playDate = new Date(props.data.playdate).toLocaleDateString(locale);

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_place}>{props.data.place}</div>
                <div className={styles.item_player}>{props.data.player}</div>
                <div className={styles.item_count}>{props.data.count} väylää</div>
                <div className={styles.item_result}>{props.data.result}</div>
                <div className={styles.item_playdate}>{playDate}</div>
            </div>
            <div className={styles.item_edit}>
                <MdNavigateNext />
            </div>
        </div>
    );
}

export default Item;