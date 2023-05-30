import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return <li className="collection-item">
        <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
        <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
        {name} x {quantity} = {price * quantity}
        <span className="secondary-content">
            <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
        </span>
    </li>
}

export { BasketItem }