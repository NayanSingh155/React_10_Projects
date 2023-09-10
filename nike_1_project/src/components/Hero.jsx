
const Hero = () => {
    return (
        <div>
            <main className="hero navbar">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt cumque cum hic rerum dolores, possimus quis maxime corrupti obcaecati numquam labore commodi, dolor illum.</p>


                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also available on</p>

                    </div>

                    <div className="hero-icon ">
                        <img src="/images/f.png" alt="f-icon" />
                        <img src="/images/a.png" alt="a-icon" />

                    </div>
                </div>

                <div className="hero-image">
                    <img src="images/hero1.png" alt="hero-image" />
                </div>
            </main>
        </div>
    )
}
export default Hero;