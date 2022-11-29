import Button from "./Button";

const ContactInfo = () => {
    return ( 
        <div className="form__box">
        <form method="get" name="contact" id="contact">
            <div className="formgroup">
                <label for="fullname" className="fullname__heading">Full Name <span>*</span></label>
                <input type="text" className="Fullname__input" name="fullname" id="fullname"/>
            </div>
            <div className="formgroup">
                <label for="email" className="email__heading">Email <span>*</span></label>
                <input type="text" className="email__input" name="email" id="email"/>
            </div>
            <div className="formgroup">
                <label for="subject" className="subject__heading">Subject <span>*</span></label>
                <input type="text" className="subject__input" name="subject" id="subject"/>
            </div>
            <div className="formgroup">
                <label for="message" className="message__heading">Message <span>*</span></label>
                <input type="text" className="Fullname__input" name="fullname" id="fullname"/>
            </div>
            <div className="formgroup">
                <Button type="submit" className="submit__button" />
            </div>
        </form>
        </div>
     );
}
 
export default ContactInfo;