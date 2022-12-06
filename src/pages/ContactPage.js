import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
    return ( 
        <main className="main">
            <h1 className="contactpage__heading">Get in touch with us</h1>
            <section className="contactinfo">
                <ContactInfo />
            </section>
            <h2 className="heading__under__form">Visit our sister companies <span className="orange__text">Home Sound</span> and <span className="orange__text">The Movie Rooms</span> part of the Hi-Fi Corner Group. </h2>
        </main>

     );
}
 
export default ContactPage;