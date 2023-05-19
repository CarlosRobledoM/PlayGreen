import { useContext, useEffect, useState } from "react";
import HistoryAction from "../../components/HistoryAction";
import { getItems } from "../../middleware/api";
import { userContext } from "../../context/AuthContext";

export default function History() {

  const [items, setItems] = useState([])
  const {user} = useContext(userContext)

    useEffect(() => {
        obteinItems()
    }, [])

    const obteinItems = async () => {
        const response = await getItems()
        const arrayHistory = []
        for(var i=0; i < response.length ; i++){
          if (user.email === response[i].user){
            arrayHistory.push(response[i])
          }
        }
        setItems(arrayHistory)
    }

    console.log(items)

  return (
    <div>
        <h1>History</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {
          items.map((item) => (
            <HistoryAction key={item.id} sport={item.sport} action={item.action} img={item.image}/>
          ))
        }
    </div>
  );
}