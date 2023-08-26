export default function Contact(){
    return(
        <>
            <div className="contact-background">
                <div className="contact-layout">
                    <div className="contact-form-layout">
                        <div className="contact-title">
                            <p className="title">Contact me</p>
                            <br />
                            <p className="text">Use this as you please :)</p>
                        </div>
                        <form action="">
                            <div className="contact-form">
                                <div>
                                    <input className="contact-name contact-form-styling" placeholder="Name"/>
                                    <input className="contact-email contact-form-styling" placeholder="Email"/>
                                </div>
                                <input className="contact-message contact-form-styling" placeholder="Message"/>
                                <button className="contact-send text">Send</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="contact-info"></div>
                    </div>
                </div>
            </div>
        </>
    )
}