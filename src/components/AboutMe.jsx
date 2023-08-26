export default function AboutMe(){
    return(
        <div className="about-me-background">
                <div className="about-me-layout">
                    <div className="about-me-center">
                        <div className="title">About me</div>
                        <div className="about-me-div">
                            <div className="text about-me-text">
                                <p>Web developer with over 1 year experience. Team player driven by passion.</p>
                                <p>Programmer by day, ux designer by night. Casual figma enjoyer.</p>
                                <button className="button-gradient">Download my CV</button>
                            </div>
                            <img className="my-face" src="myPicture.png" alt="my-face" />
                        </div>
                    </div>
                </div>
            <div className="picture-layout">
                <img className="second-page-picture shadow-picture shadows" src="shadows.png" alt="shadow-decoration" />
                <img className="second-page-picture geometric" src="geometricDecoration.png" alt="geometric-decoration" />
                <img className="second-page-picture sun" src="sunDecoration.png" alt="sun-decoration" />
            </div>
        </div>
    )
}