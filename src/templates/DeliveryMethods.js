import { useState } from "react";


const DeliveryMethods = () => {

    const [method, setMethod] = useState("home");
    let handleMethod = (deliveryMethod) => setMethod(deliveryMethod);
    console.log(method);

    return ( 
        <section className="deliveryMethods">

            <h2 className="deliveryMethods__h2">Select your prefered delivery method</h2>
            <div className="deliveryMethods__methods">
                <div className="deliveryMethods__buttons">
                    <button onClick={ () => handleMethod("home") }>Home delivery</button>
                    <button onClick={ () => handleMethod("collect") }>Click-and-collect</button>
                    <button onClick={ () => handleMethod("postoffice") }>Postoffice</button>
                </div>

                {method === "home" && (
                    <div>
                        <h3 className="deliveryMethods__h3">Your order will be shipped to</h3>

                        <div className="deliveryMethods__home">
                            <p>61 Church St</p>
                            <p>Berwick-upon-Tweed</p>
                            <p>Northumberland</p>
                            <p>TD15 1EE</p>
                            <p>United Kingdom</p>
                        </div>
                    </div>
                )}

                {method === "collect" && (
                    <div>
                        <h3 className="deliveryMethods__h3">Your order will be shipped to</h3>

                        <div className="deliveryMethods__collects">
                            <input type="radio" name="EdinburghOrFalkirk" className="deliveryMethods_radio-edinburgh" />
                            <label htmlFor="EdinburghOrFalkirk">
                                <h4 className="deliveryMethods__h4">Edinburgh</h4>
                            </label>
                        </div>

                        <div className="deliveryMethods__collects-p">
                            <p>2 Joppa Rd,Edinburgh, EH15 2EU</p>
                            <p>Monday to Friday: 10:00am - 5:30pm</p>
                            <p>Saturday: 10:00am - 5:30pm</p>
                            <p>Sunday: Closed</p>
                        </div>

                        <div className="deliveryMethods__collects">
                            <input type="radio" name="EdinburghOrFalkirk" className="deliveryMethods_radio-lalkirk" />
                            <label htmlFor="EdinburghOrFalkirk">
                                <h4 className="deliveryMethods__h4">Falkirk</h4>
                            </label>
                        </div>

                        <div className="deliveryMethods__collects-p">
                            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                            <p>Monday to Friday: 10:00am - 5:30pm</p>
                            <p>Saturday - By appointment only</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                )}

                {method === "postoffice" && (
                    <div>
                        <h3 className="deliveryMethods__h3">Your order will be shipped with FedEx selected a postoffice</h3>
                        <div >
                            <img src="./fedex-logo.svg" alt="Fedex logo" className="deliveryMethods__img-fedex"/>
                        </div>

                        <div>
                            <img src="./map.svg" alt="map" className="deliveryMethods__img-map"/>
                        </div>

                        <div className="deliveryMethods__postoffices">
                            <input type="radio" name="postOffice" className="deliveryMethods_radio-4" />
                            <label htmlFor="postOffice">
                                <h4 className="postOffice">Postoffice - 4  Leah Close, Edinburgh, United Kingdom</h4>
                            </label>
                        </div>

                        <hr className="deliveryMethods__hr"/>
                        
                        <div className="deliveryMethods__postoffices">
                            <input type="radio" name="postOffice" className="deliveryMethods_radio-7" />
                            <label htmlFor="postOffice">
                                <h4 className="postOffice">Postoffice - 7  The Old School House, Edinburgh, United Kingdom</h4>
                            </label>
                        </div>

                        <hr className="deliveryMethods__hr"/>

                        <div className="deliveryMethods__postoffices">
                            <input type="radio" name="postOffice" className="deliveryMethods_radio-28" />
                            <label htmlFor="postOffice">
                                <h4 className="postOffice">Postoffice - 28  Thwaites Oak Close, Edinburgh, United Kingdom</h4>
                            </label>
                        </div>
                        
                    </div>
                )}

            </div>
        </section>
     );
    }

export default DeliveryMethods;