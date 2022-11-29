import Button from "./Button";

const ContactInfo = () => {
    return ( 
        <div className="form__box">
        <form method="get" name="contact" id="contact" className="form">
                <label for="fullname" className="form__heading">Full Name <span className="orange__star">*</span></label>
            <div className="form__group">
                <input type="text" className="fullname__input" name="fullname" id="fullname"/>
            </div>
                <label for="email" className="form__heading">Email <span className="orange__star">*</span></label>
            <div className="form__group">
                <input type="text" className="email__input" name="email" id="email"/>
            </div>
                <label for="subject" className="form__heading">Subject <span className="orange__star">*</span></label>
            <div className="form__group">
                <input type="text" className="subject__input" name="subject" id="subject"/>
            </div>
                <label for="message" className="form__heading">Message <span className="orange__star">*</span></label>
            <div className="">
                <input type="text" className="message__input" name="message" id="message"/>
            </div>
            <div className="">
                <Button destination="/homepage" text="Submit" className="submit__btn"/>
            </div>
        </form>
        </div>
     );
}
 
export default ContactInfo;