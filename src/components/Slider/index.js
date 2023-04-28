import Slider from "react-slick";

export const LogoSlider = () => {
    const settings = {

        slidesToShow: 6,
        slidesToScroll: 6, 
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
      
        
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                
            
            } 
            
        }]


    };

    return (


        <Slider {...settings}>
     
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/avene.png`} 
     alt="Avene"/>
           </div>
          <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/ducray.png`}  />
          </div>
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/klorane.png`} 
     alt="logo"/>
          </div>
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/eucerin.png`} 
     alt="logo"/>
          </div>
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/esthederm.png`} 
     alt="logo"/>
          </div>
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/aderma.png`} 
     alt="logo"/>
          </div>
          <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/nuxe.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/bioderma.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/vichy.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/lrp.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/activApotheke.jpeg`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/teoxane.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/medik8.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/cerave.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/neostrata.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/novexpert.png`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/sanotint.jpg`} 
     alt="logo"/>
           </div>
           <div>
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/anna_brandejs.png`} 
     alt="logo"/>
           </div>

        </Slider>
    )




}