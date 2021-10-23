import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
        
        <span className="contactTitle">CONTACT</span>
    <form className="contactForm">
        
        <label>Email</label>
            <input type="text" className="contactInput" placeholder="Mail adresinizi giriniz..."></input>
        <label>Mesajiniz</label>
            <input type="text" className="contactInputMsg" placeholder="Mesajınızı giriniz..."></input>    
        <button className="contactButton">Gönder</button>
       
    </form>
</div>
    )
}

export default Contact
