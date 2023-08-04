import OwlCarousel from "react-owl-carousel"

export default ({}) =>{
    
    const Responsive = {
        0:{
            items:1.5,
        },
        768:{
            items:2,
        },
        1024:{
            items:3,
        }
    }
    return(
        <OwlCarousel className="flex">
            <div className="item"> Your Content </div>
            <div className="item"> Your Content </div>
        </OwlCarousel>
        
    )
}
