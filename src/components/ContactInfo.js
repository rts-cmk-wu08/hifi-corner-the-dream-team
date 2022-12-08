import Button from "./Button";
import { useForm } from "react-hook-form";

const ContactInfo = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="form">
      <form method="get" name="contact" id="contact" className="form__form">
        {/* ---- NAME ---- */}
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
        {/* ---- EMAIL ---- */}
        <div className="form__group form__group--short">
          <label htmlFor="email" className="form__heading">
            Email <span className="form__star">*</span>
          </label>
          <input
            className="form__input"
            type="email"
            name="email"
            ref={register({
              required: "Please enter your email address.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
        </div>
        {/* ---- SUBJECT ---- */}
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
        {/* ---- MESSAGE ---- */}
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
        {/* ---- BUTTON ---- */}
        <div className="form__btn">
          <Button destination="/" text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
