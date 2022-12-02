import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
    return ( 
        <main className="main">
            <h1 className="contactpage__heading">Get in touch with us</h1>
            <section className="contactinfo">
                <ContactInfo />
            </section>
        </main>

     );
}
 
export default ContactPage;