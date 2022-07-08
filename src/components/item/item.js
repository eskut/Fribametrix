import styles from './item.module.scss';
import { MdNavigateNext } from 'react-icons/md';

function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_place}>Vampula</div>
                <div className={styles.item_player}>Jaska</div>
                <div className={styles.item_count}>18 väylää</div>
                <div className={styles.item_result}>-5</div>
                <div className={styles.item_date}>13.06.2022</div>
            </div>
            <div className={styles.item_edit}>
                <MdNavigateNext />
            </div>
        </div>
    );
}

export default Item;