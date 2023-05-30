import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config"

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
    const {
        loading,
        order, 
        setGoods,
        basketOpen,
        alertName
    } = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                setGoods(data.featured);
            })
    // eslint-disable-next-line
    }, []);

    return <main className="container content">
        <Cart quantity={order.length}/>
        {
            loading ? <Preloader /> : <GoodsList />
        }
        {
            basketOpen && <BasketList />
        }
        {
            alertName && <Alert />
        }
    </main>
}

export { Shop }