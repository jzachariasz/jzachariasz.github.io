export default function Skills(){
    return(
        <>
            <div className="skills-background">
                <div className="skills-layout">
                    <div className="skills-gradient">
                        <img className="picture blob-picture" src="blueBlob.png" alt="" />
                        <div className="skills-content">
                            <div>
                                <p id="skills-text" className="title">My skills</p>
                                <br></br>
                                <p id="skills-text" className="text">AKA what's already in my head</p>
                            </div>
                            <div className="skills-blocks">
                                <div className="skills-area">
                                    <p className="text">Frontend</p>
                                    <ul className="subtitle modified-list">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bootstrap5</li>
                                        <li>Bulma</li>
                                        <li>SASS</li>
                                    </ul>
                                </div>
                                <div className="skills-area">
                                    <p className="text">Backend</p>
                                    <ul className="subtitle modified-list">
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </div>
                                <div className="skills-area" style={{height:'26.25rem'}}>
                                    <p className="text">Tools</p>
                                    <ul className="subtitle modified-list">
                                        <li>VS code</li>
                                        <li>Git</li>
                                        <li>Bash</li>
                                        <li>Photoshop</li>
                                        <li>Figma</li>
                                        <li>Canva</li>
                                        <li>NodeJS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}