import "./Carousel.css";

const Carousel = () => {

    return (
        <>
           
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner home-carousel"  >
                    <div className="carousel-item active" data-bs-interval="1000"> 
                        <img src="/images/carousel/img4.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="/images/carousel/img2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="/images/carousel/img3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>

    )

}

export default Carousel;