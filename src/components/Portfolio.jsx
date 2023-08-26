export default function Portfolio(){
    return(
        <>
            <div className="portfolio-background">
                <div className="portfolio-background-images">
                    <img className="portfolio-geometric-picture" src="geometricDecoration2.png" alt="" />
                    <img className="portfolio-shadows-picture" src="shadows.png" alt="" />
                </div>
                <div className="portfolio-layout">
                    <div className="portfolio-title">
                        <p className="title">Portfolio</p>
                        <br />
                        <p className="text">Crème de la crème</p>
                    </div>
                    <div className="portfolio-block" id="orange-text-block">
                        <div id="orange-sphere" className="portfolio-sphere">
                            <img src="orangeSphere.png" alt="" />
                        </div>
                        <div className="portfolio-text-block text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet laborum consequuntur debitis ipsam repellendus a ducimus, libero non expedita reprehenderit sed rem nostrum unde fugit? Consectetur ipsa illum tempore.
                        </div>
                    </div>
                    <div className="portfolio-block" id="purple-text-block">
                        <div id="purple-sphere" className="portfolio-sphere">
                            <img src="purpleSphere.png" alt="" />
                        </div>
                        <div className="portfolio-text-block text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero nobis commodi porro dolorem ex deserunt repellendus, dignissimos ipsam, reiciendis iure minima? Deserunt dolores, laboriosam sunt inventore error rem reprehenderit?
                        </div>
                    </div>
                    <div className="portfolio-block" id="pink-text-block">
                        <div id="pink-sphere" className="portfolio-sphere">
                            <img src="pinkSphere.png" alt="" />
                        </div>
                        <div className="portfolio-text-block text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque praesentium adipisci doloremque excepturi? Voluptatibus reprehenderit totam doloremque voluptatum voluptate dolore sint, tempora reiciendis ipsa vero ut eius modi sequi nisi!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}