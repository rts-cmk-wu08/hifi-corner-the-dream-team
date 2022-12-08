import Button from "./Button";

const ContactInfo = () => {
  return (
    <div className="form">
      <form method="get" name="contact" id="contact" className="form__form">
        <div className="form__group form__group--short">
          <label htmlFor="fullname" className="form__heading">
            Full Name <span className="form__star">*</span>
          </label>
          <input
            type="text"
            className="form__input"
            name="fullname"
            id="fullname"
          />
        </div>
        <div className="form__group form__group--short">
          <label htmlFor="email" className="form__heading">
            Email <span className="form__star">*</span>
          </label>
          <input type="text" className="form__input" name="email" id="email" />
        </div>
        <div className="form__group form__group--short">
          <label htmlFor="subject" className="form__heading">
            Subject <span className="form__star">*</span>
          </label>
          <input
            type="text"
            className="form__input"
            name="subject"
            id="subject"
          />
        </div>
        <div className="form__group">
          <label htmlFor="message" className="form__heading">
            Message <span className="form__star">*</span>
          </label>
          <textarea
            className="form__input"
            name="message"
            id="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="form__btn">
          <Button destination="/homepage" text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
