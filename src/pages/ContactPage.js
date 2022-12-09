import ContactFormTwo from "../formComponents/contactForm";

const ContactPage = () => {
  return (
    <section className="contactinfo">
      <h1 className="contactinfo__heading">Get in touch with us</h1>
      <ContactFormTwo />
      <h3 className="contactinfo__h3">
        Visit our sister companies{" "}
        <span className="contactinfo__h3--orange">Home Sound</span> and{" "}
        <span className="contactinfo__h3--orange">The Movie Rooms</span> part of
        the Hi-Fi Corner Group.{" "}
      </h3>
    </section>
  );
};

export default ContactPage;
