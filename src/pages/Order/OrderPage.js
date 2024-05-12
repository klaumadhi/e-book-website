import {OrderSuccess} from "./components/OrderSuccess"
import {OrderFail} from "./components/OrderFail"
import { useLocation } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"

export const OrderPage = () => {
  useTitle("Oder Summary")
  // we are accessing state from checkout.js / navigate("/order-summary", {state: {status: true}})
  const { state } = useLocation()

    return (
      <main>
        {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
      </main>
    )
  }