import { db } from './firebase';
import {
    collection, getDocs, query, addDoc
} from "firebase/firestore";

const collectionName = 'items';
const itemsCollection = collection(db, collectionName);

export const addItem = (obj:any) => {
    return addDoc(itemsCollection, obj).id;
}

export const getItems = async () => {
    const result = await getDocs(query(itemsCollection));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    }
    );
}