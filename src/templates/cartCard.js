import CountItems from "../components/CountItems";


const CartCard = () => {
    return ( 
        <section className="cart-card">
            <img className="cart-card__img" src="/produktbilleder/cd_afspillere/creek_Destiny_CD.jpg" alt="" />
            <div className="cart-card__txt">
                <p className="cart-card__p">lalaladryfjd</p>
                <p className="cart-card__p cart-card__p--pink">lalala</p>
            </div>
            < CountItems />
            <p className="cart-card__p">£ pris</p>
        </section>
     );
    }
 
export default CartCard;