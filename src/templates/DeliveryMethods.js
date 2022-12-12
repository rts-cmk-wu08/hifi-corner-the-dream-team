
const DeliveryMethods = () => {
    return ( 
        <section className="deliveryMethods">

            <h2 className="deliveryMethods__h2">Select your prefered delivery method</h2>
            <div className="deliveryMethods__methods">
                <div className="deliveryMethods__buttons">
                    <button>Home delivery</button>
                    <button>Click-and-collect</button>
                    <button>Postoffice</button>
                </div>
            
                <h3 className="deliveryMethods__h3">Your order will be shipped to</h3>
                
                <p>61 Church St</p>
                <p>Berwick-upon-Tweed</p>
                <p>Northumberland</p>
                <p>TD15 1EE</p>
                <p>United Kingdom</p>

                <input type="radio" name="EdinburghOrFalkirk" className="deliveryMethods_radio-edinburgh" />
                <label htmlFor="EdinburghOrFalkirk">
                    <h4 className="deliveryMethods__h4">Edinburgh</h4>
                </label>
                <p>2 Joppa Rd,Edinburgh, EH15 2EU</p>
                <p>Monday to Friday: 10:00am - 5:30pm</p>
                <p>Saturday: 10:00am - 5:30pm</p>
                <p>Sunday: Closed</p>

                <input type="radio" name="EdinburghOrFalkirk" className="deliveryMethods_radio-lalkirk" />
                <label htmlFor="EdinburghOrFalkirk">
                    <h4 className="deliveryMethods__h4">Falkirk</h4>
                </label>
                <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                <p>Monday to Friday: 10:00am - 5:30pm</p>
                <p>Saturday - By appointment only</p>
                <p>Sunday: Closed</p>
            </div>
        </section>
     );
    }

export default DeliveryMethods;