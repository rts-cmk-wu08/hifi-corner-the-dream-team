const PaymentPageForm = () => {
    return ( 
        <form action="" className="form">
            <div className="form__group">
                <label htmlFor="name" name="name" className="form__label">Full name <span className="form__star">*</span></label>
                <input type="text" id="name" className="form__input" />
            </div>
            <div className="form__2grid">
                <div className="form__group">
                    <label htmlFor="city" name="city" className="form__label">City <span className="form__star">*</span></label>
                    <input type="text" id="city" className="form__input" />
                </div>
                <div className="form__group">
                    <label htmlFor="zipcode" name="zipcode" className="form__label">Postal code <span className="form__star">*</span></label>
                    <input type="text" className="form__input" id="zipcode"/>
                </div>
            </div>
            <div className="form__group">
                <label htmlFor="adress" name="adress" className="form__label">Adress <span className="form__star">*</span></label>
                <input type="text" id="adress" className="form__input" />
            </div>
            <div className="form__group">
                <label htmlFor="email" name="email" className="form__label">Email <span className="form__star">*</span></label>
                <input type="text" id="email" className="form__input" />
            </div>
            <div className="form__group">
                <label htmlFor="phone" name="phone" className="form__label">Phone nr. <span className="form__star">*</span></label>
                <input type="text" id="phone" className="form__input" />
            </div>
        </form>
        
     );
}
 
export default PaymentPageForm;