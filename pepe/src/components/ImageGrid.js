import React from 'react';
import useFirestore from '../components/useFirestore';
import firebase from 'firebase/compat/app';
import { getStorage, ref, listAll } from "firebase/storage";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  

  function deleteFromFirebase(url) {
    const storageRef = firebase.storage().ref('');
    storageRef.listAll().then((listResults) => {
      const promises = listResults.items.map((item) => {
        console.log(url);
        console.log(item);
        //return item.delete();
      });
      Promise.all(promises);
    });
  
    

    
  }


  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id} 
          onClick={() => deleteFromFirebase(doc)}
        >
          <img style={{width: 200}} src={doc.url} alt="uploaded pic"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;