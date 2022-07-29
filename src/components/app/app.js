import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import Login from '../../routes/login'; 
import AddItem from '../../routes/additem';
import EditItem from '../../routes/edititem';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
import testdata from '../../testdata.js';

function App() {

  const [data, setData] = useState([]);
  const [placelist, setPlacelist] = useState([]);

  const itemCollectionRef = useFirestore().collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("playdate","desc"), {initialData: [], idField: "id"});
  
  const placeCollectionRef = useFirestore().collection('place');
  const { data: placeCollection } = useFirestoreCollectionData(placeCollectionRef.orderBy("place"), { initialData: []});

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  useEffect(() => {
    const places = placeCollection.map(obj => obj.place);
    setPlacelist(places);
  }, [placeCollection]);

  const handleItemSubmit = (newitem) => {

    itemCollectionRef.doc(newitem.id).set(newitem);

    /*
    let storeddata = data.slice();
    const index = storeddata.findIndex(item => item.id === newitem.id);
    if (index >= 0 ) {
      storeddata[index] = newitem;
    } else {
      storeddata.push(newitem);
    }

    storeddata.sort( (a,b) => {
      const aDate = new Date(a.playdate);
      const bDate = new Date(b.playdate);
      return bDate.getTime() - aDate.getTime();
    } ); 

    setData(storeddata);
    */
  }

  const handleItemDelete = (id) => {
    itemCollectionRef.doc(id).delete();

    /*
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    setData(storeddata);
    */
  }

  const handleTypeSubmit = (newtype) => {
    placeCollectionRef.doc().set({place: newtype});
    /*
    let storedtypelist = placelist.slice();
    storedtypelist.push(newtype);
    storedtypelist.sort();
    setPlacelist(storedtypelist); 
    */
  }

  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Items data={data} />
            </Route>
            <Route path="/stats">
              <Stats data={data} />
            </Route>
            <Route path="/settings">
              <Settings types={placelist} onTypeSubmit={handleTypeSubmit} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/add">
              <AddItem onItemSubmit={handleItemSubmit} types={placelist} />
            </Route>
            <Route path="/edit/:id">
              <EditItem onItemSubmit={handleItemSubmit} data={data} types={placelist} onItemDelete={handleItemDelete} />
            </Route>
          </Content> 
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
