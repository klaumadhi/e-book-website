import {DashEmpty} from "./components/DashEmpty"
import {DashCard} from "./components/DashCard"
import { useEffect, useState } from "react"
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  useTitle("Dashboard")
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try{
        const data =await getUserOrders()
        setOrders(data);
      }catch(error){
        toast.error(error.message , {closeButton: true , autoClose: 5000, closeOnClick: true, position: "bottom-center"})

      }
        
    }

    fetchOrders();
}, []);


    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>
        <section>
          {orders.length && orders.map((order)=> (
            <DashCard key={order.id} order={order}/>
          ))}
        </section>
        <section>
          {!orders.length && <DashEmpty/>}
        </section>
      </main>
    )
  }