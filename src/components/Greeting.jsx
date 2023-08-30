import '../components/Style.css'

export default function Greeting(){
    return(
        <>  
            <div className='firstPage'>
                <div id="first-page-introduction">
                    <div className='text'>Hello, my name is</div>
                    <div id='first-page-name' className='title'>Julia Zachariasz</div>
                    <div id='first-page-description' className='subtitle'>I'm a verified !human, eternal learner and a creative soul</div>
                </div>
                <img className='greeting-smaller-dev-decoration' src="greetingSmallerDevicesDecoration.png" alt="" />
                <div>
                    <img className='behind-greeting-decoration' src='behindNameBlob.png' alt="behind-greeting-decoration" />
                </div>
                <div>
                    <img className='picture' src="firstPageDecoration.png" alt="right-decoration" />
                </div>
                <img className="picture sphere-picture" src="sphere.png" alt="" />
            </div>
        </>
    )
}