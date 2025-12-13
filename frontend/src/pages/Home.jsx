import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";
import Footer from "../components/Footer/Footer";

const fake_products = [
    
    {
        id: '1',
        title : 'Oppo A35',
        img_src : "Oppo.jpg",
        price: 20000,
    },
    {
        id: '2',
        title : 'Vivo V30',
        img_src : "Vivo.png",
        price: 22000,
    },
    {
        id: '3',
        title : 'VR Headset',
        img_src : "VR.jpeg",
        price: 50000,
    },
    {
        id: '4',
        title : 'Nothing TWS',
        img_src : "Tws.jpg",
        price: 1500,
    },
    {
        id: '5',
        title : 'Dumbbells 5kg',
        img_src : "Dumbbells.webp",
        price: 200,
    },
    {
        id: '6',
        title : 'Samsung A15',
        img_src : "Samsung.webp",
        price: 18000,
    },
    {
        id: '7',
        title : ' Dove Shampoo',
        img_src : "shampoo.jpg",
        price: 200,
    },
    {
        id: '8',
        title : 'Cricket Bat',
        img_src : "bat.jpg",
        price: 1000,
    },
    {
        id: '9',
        title : 'Cricket Ball',
        img_src : "ball.jpg",
        price: 200,
    },
    {
        id: '10',
        title : 'Dustbin',
        img_src : "Dustbin.png",
        price: 200,
    },
    {
        id: '11',
        title : 'Hand Gripper',
        img_src : "hand gripper.jpg",
        price: 1000,
    },
    {
        id: '12',
        title : 'Sound Bar',
        img_src : "Sound Bar.avif",
        price: 200,
    },
    
]



const Home = () =>{
    return (
        <>
        <Carousel />
        <div className="container-fluid p-0">
        <section className=" row row-cols-1 row-cols-md-2 g-4 text-center">
          {
                  fake_products.map((eachprod) => {
                    return <ProductCard key={eachprod.id} product={eachprod} />
                  })
          }
        </section>
        </div>
        <div className="container-fluid p-0">
            <Footer />
        </div>
        </>
    )
    
};

export default Home;