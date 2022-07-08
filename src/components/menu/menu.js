import { MdViewList } from 'react-icons/md';
import { MdTimeline } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { MdLogin } from 'react-icons/md';
import styles from './menu.module.scss';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><MdViewList /></div>
            <div><MdTimeline /></div>
            <div><MdSettings /></div>
            <div><MdLogin /></div>
        </div>
    );
}

export default Menu;