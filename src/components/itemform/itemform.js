import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ItemForm(props) {

   const history = useHistory();

   const submit = () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.result = parseFloat(storedvalues.result);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onItemSubmit(storedvalues);
      history.push("/");
   }

   const initialState = props.data ? props.data : {
      place: "",
      player: "",
      count: "",
      result: 0,
      basket1: "",
      basket2: "",
      basket3: "",
      basket4: "",
      basket5: "",
      basket6: "",
      basket7: "",
      basket8: "",
      basket9: "",
      basket10: "",
      basket11: "",
      basket12: "",
      basket13: "",
      basket14: "",
      basket15: "",
      basket16: "",
      basket17: "",
      basket18: "",
      playdate: "",
   };

   const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

   const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
   }

   const handleDelete = (event) => {
      event.preventDefault();
      props.onItemDelete(values.id);
      history.push("/");
   }

   return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>

              <div className={styles.form_row}>
                <div>
                   <label htmlFor="place">Paikka</label>
                   <select type="text" name="place" onChange={handleChange} value={values.place} >
                       { props.types.map( (type) => <option key={type} value={type}>{type}</option> ) }   
                   </select> 
                </div>
                <div>
                   <label htmlFor="player">Pelaaja</label>
                   <input type="text" name="player" onChange={handleChange} value={values.player} />
                </div>
              </div>
              <div className={styles.form_row}>
                <div>
                   <label htmlFor="count">Väylä määrä</label>
                   <select type="text" name="count" onChange={handleChange} value={values.count} >
                       <option value="18">18</option> 
                       <option value="9">9</option>   
                   </select> 
                </div>
                <div>
                   <label htmlFor="playdate">Pelipäivä</label>
                   <input type="date" name="playdate" onChange={handleChange} value={values.playdate} /> 
                </div>
              </div>
              <div className={styles.form_row}>
                  <label>VÄYLÄT</label>
              </div>
              <div className={styles.form_tag}>
                <div>   
                   <label>1.</label>
                   <input type="number" name="basket1" onChange={handleChange} value={values.basket1} />    
                </div>
                <div>
                   <label>2.</label> 
                   <input type="number" name="basket2" onChange={handleChange} value={values.basket2} />    
                </div>
                <div>
                   <label>3.</label> 
                   <input type="number" name="basket3" onChange={handleChange} value={values.basket3} />    
                </div> 
                <div>
                   <label>4.</label> 
                   <input type="number" name="basket4" onChange={handleChange} value={values.basket4} />    
                </div>  
                <div>
                   <label>5.</label> 
                   <input type="number" name="basket5" onChange={handleChange} value={values.basket5} />    
                </div> 
                <div>
                   <label>6.</label> 
                   <input type="number" name="basket6" onChange={handleChange} value={values.basket6} />    
                </div>
              </div>
              <div className={styles.form_tag}>
                <div>
                   <label>7.</label>
                   <input type="number" name="basket7" onChange={handleChange} value={values.basket7} />    
                </div>
                <div>
                   <label>8.</label> 
                   <input type="number" name="basket8" onChange={handleChange} value={values.basket8} />    
                </div>
                <div>
                   <label>9.</label> 
                   <input type="number" name="basket9" onChange={handleChange} value={values.basket9} />    
                </div> 
                <div>
                   <label>10.</label> 
                   <input type="number" name="basket10" onChange={handleChange} value={values.basket10} />    
                </div>  
                <div>
                   <label>11.</label> 
                   <input type="number" name="basket11" onChange={handleChange} value={values.basket11} />    
                </div> 
                <div>
                   <label>12.</label> 
                   <input type="number" name="basket12" onChange={handleChange} value={values.basket12} />    
                </div>
               </div> 
                <div className={styles.form_tag}>
                <div>
                   <label>13.</label>
                   <input type="number" name="basket13" onChange={handleChange} value={values.basket13} />    
                </div>
                <div>
                   <label>14.</label> 
                   <input type="number" name="basket14" onChange={handleChange} value={values.basket14} />    
                </div>
                <div>
                   <label>15.</label> 
                   <input type="number" name="basket15" onChange={handleChange} value={values.basket15} />    
                </div> 
                <div>
                   <label>16.</label> 
                   <input type="number" name="basket16" onChange={handleChange} value={values.basket16} />    
                </div>  
                <div>
                   <label>17.</label> 
                   <input type="number" name="basket17" onChange={handleChange} value={values.basket17} />    
                </div> 
                <div>
                   <label>18.</label> 
                   <input type="number" name="basket18" onChange={handleChange} value={values.basket18} />    
                </div>    
              </div>
              <div className={styles.form_row}>
                <div>
                   <label htmlFor="result">Lopputulos</label>
                   <input type="number" name="result" onChange={handleChange} value={values.result} /> 
                </div>  
                <div>
                </div>
                <div>
                </div>
              </div> 

              <div className={styles.form_row}>
                 <div>
                    <Button onClick={handleCancel}>PERUUTA</Button>
                 </div>
                 <div>
                    <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ" }</Button>
                 </div>
              </div>

              { props.onItemDelete ?
                 <div className={styles.form_row}>
                    <div>
                       <Button onClick={handleDelete}>POISTA</Button>
                    </div>
                    <div></div>
                 </div>  : "" }

            </div>
        </form>
      </div>
    );
}

export default ItemForm;