import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";

const fake_products = [
    {
        id: '1',
        title : ' Dove Shampoo',
        img_src : "shampoo.jpg",
        price: 200,
    },
    {
        id: '2',
        title : 'Cricket Bat',
        img_src : "bat.jpg",
        price: 1000,
    },
    {
        id: '3',
        title : 'Cricket Ball',
        img_src : "ball.jpg",
        price: 200,
    },
    {
        id: '4',
        title : 'Dustbin',
        img_src : "Dustbin.png",
        price: 200,
    },
    {
        id: '5',
        title : 'Hand Gripper',
        img_src : "hand gripper.jpg",
        price: 1000,
    },
    {
        id: '6',
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
        </>
    )
    
};

export default Home;