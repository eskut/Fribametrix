import styles from './login.module.scss';
import Button from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';
import { useHistory } from "react-router-dom";


function Login(props) {

    // Esitellään käyttäjä ja sen tallennettu historia.
    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    const signOut = async () => {
        await auth.signOut();
        history.push('.');
        window.location.reload();
    }

    return (
        <div>
            <h2>Login</h2>

          

            <div className={styles.login_profile}>
                <div className={styles.login_user}>
                    <div><img src={user.data.photoURL} alt="" /></div>
                    <div>{user.data.displayName}<br/>{user.data.email}</div>
                </div>
                <div>
                    <Button primary onClick={signOut}>Kirjaudu ulos</Button>
                </div>
            </div>
        </div>
    ); 


}

export default Login;