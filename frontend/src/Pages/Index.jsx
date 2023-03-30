import React from "react";
import "./Index.css"
import {StarIcon} from '@chakra-ui/icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Index = () => {
  const slider = [
    {
      id: 1,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216608798.jpg",
    },
    {
      id: 2,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216674334.jpg",
    },
    {
      id: 3,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216739870.jpg",
    },
    {
      id: 4,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216805406.jpg",
    },
    {
      id: 5,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45622605905950.jpg",
    },
    {
      id: 6,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45622606037022.jpg",
    },
    {
      id: 7,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619580305438.jpg",
    },
    {
      id: 8,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619580436510.jpg",
    },
    {
      id: 9,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45536791658526.jpg",
    },
    {
      id: 10,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45536791789598.jpg",
    },
    {
      id: 11,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619571556382.jpg",
    },
    {
      id: 12,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619569983518.jpg",
    },
  ]
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <div className="main">
    <div className="container">
      <div className="here-section">
            <div className="hero">
                <div>
                  <img src="https://images.ctfassets.net/5de70he6op10/gB8j1vpg2pP2rpRpa75i9/312436ccf606776719785ef409420f46/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp" alt="" />
                </div>
                <div>
                  <img src="https://images.ctfassets.net/5de70he6op10/1NPjQQ97u8xeHrFHkXjrax/8e715eaa8cf02c6c9daba8dadd4b2d6a/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp" alt="" />
                </div>
                <div>
                  <img src="https://images.ctfassets.net/5de70he6op10/1Lyxv82WJDkGaRWROJFSL3/d2a3f0c2dcfc706a09c4b7991b43f67d/LS_M0_Banner_f.jpg?w=630&q=80&fm=webp" alt="" />
                </div>
                <div>
                  <img src="https://images.ctfassets.net/5de70he6op10/5NZtjeqhlhchOW8aK8ALjQ/b50f60cb0cdcdaf3e1878c13aaea7907/LS_M0_Banner_e.jpg?w=630&q=80&fm=webp" alt="" />
                </div>
            </div>
            <div className="card-1">
              <div>
              <img src="https://images.ctfassets.net/5de70he6op10/2qNPYihpSMixD9hklRMIOH/952d55b8268d66373b3bc3333b733c0b/LS_M1a-1-2.jpg?w=1784&q=80&fm=webp"  alt="" />
              <div className="btn-1"><a href="">the Reformation Shop</a></div>
              </div>
                  <div >
                  <img src="https://images.ctfassets.net/5de70he6op10/7qi0oKfnqUGDqWtXby6cva/876293b82a386f8bdbf49e4e1aa28100/484733007-hpg_m1-b.gif?w=428&q=80&fm=webp" alt="" />
                  </div>
            </div>
            <div className="card-2">
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/3oxEDi87p07u8PDBRUWZQT/799ee882cf52081f2d78dd8d9f4dcc62/484733075-ls_m2a.jpg?w=660&q=80&fm=webp" alt="" />
                <div className="btn-2"><a href="">shop dresses</a></div>
              </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/6m0is55tRAh4uMrxrsZwyb/5d42159121116c07584fca7d41dc5ac2/484733095-ls_m2d.jpg?w=660&q=80&fm=webp" alt="" />
                <div className="btn-2"><a href="">shop new clothing</a></div>
              </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/55I6Ziwm1BLgmFHzuRJi9U/d5afd53ea4e04c32444f7e6994de3a26/484733090-ls_m2c.jpg?w=660&q=80&fm=webp" alt="" />
                <div className="btn-2"><a href="">shop jewelry</a></div>
              </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/6m0is55tRAh4uMrxrsZwyb/5d42159121116c07584fca7d41dc5ac2/484733095-ls_m2d.jpg?w=660&q=80&fm=webp" alt="" />
                <div className="btn-2"><a href="">shop Reformation</a></div>
              </div>
            </div>
            <div className="card-1">
              <div>
              <img src="https://images.ctfassets.net/5de70he6op10/1V3Atq484hyeMWCw1MVXas/12f900820a162ba443ed50c4fdfd42d3/484733140-ls_m3a.jpg?w=1756&q=80&fm=webp"  alt="" />
              <div className="btn-1"><a href="">the Reformation Shop</a></div>
              </div>
                  <div >
                  <img src="https://images.ctfassets.net/5de70he6op10/3rKgQlzbypafdDTvNckO2q/193350ddf772ecfdc9c89ee5879ff993/484733144-ls_m3b.jpg?w=856&q=80&fm=webp" alt="" />
                  </div>
            </div>
            <div className="card-3">
              <div>
                
                <img src="https://images.ctfassets.net/5de70he6op10/7cxMotLF5i9rrL92ndmypR/88e8ae5aa03038acc259dd104a9d2963/484733176-ls_m4a.jpg?w=1302&q=80&fm=webp" alt="" />
                <div className="btn-2" style={{marginLeft:"220px"}}><a href="">Mother's Day Gifts</a></div>
              </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/716Ut6ZHZcpObdM9yRjLX8/ceb76d3813b83c516a7773b4749d9dcd/484733181-ls_m4b.jpg?w=1302&q=80&fm=webp" alt="" />
                <div className="btn-2" style={{marginLeft:"220px"}}><a href="">shop bedding</a></div>
              </div>

            </div>
            <div className="card-4">
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/2XUxhNlu24HaHTFRAghRS3/f30d5364574fc72b718e910f087b2685/484733194-ls_m5a.jpg?w=2640&q=80&fm=webp" alt="" />
                <div className="btn-2" style={{marginLeft:"500px"}}><a href="">shop new clothing</a></div>
              </div>
            </div>
            <div className="top-rated">
              <h3>Top-Rated Picks</h3>
              <hr style={{marginTop:"8px"}}/>
            </div>
            <div className="card-5">
              
              <div>
                  <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/3yNbvWqQXailKck2nLnaJP/7f1d29590bd5779c37c6dc495cc56daa/484733228-ls_customerfave_a.jpg?w=630&q=80&fm=webp" alt="" />
                 </div>
                 <div className="detail">
                    <p >CUSTOMER FAVORITE</p>
                    <p className="heading">The Bettina Tiered Shirt Dress</p>
                    <div style={{display:"flex",gap:"3px",marginTop:"-15px",marginBottom:"10px"}}>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                    </div>
                    <p className="disctiption">This dress is simply gorgeous - the fabric is exquisite.</p>
                     <p className="shop-link"><a href="">shop now</a></p>
                 </div>
              </div>
              <div>
                  <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/1wvoOBYHC9zcXpOFI0rASL/c19a5326e17d028f98f7e694fe9442bb/484733230-ls_customerfave_b.jpg?w=630&q=80&fm=webp" alt="" />
                 </div>
                 <div className="detail">
                    <p>CUSTOMER FAVORITE</p>
                    <p className="heading">The Viviette Lace Bralette</p>
                    <div style={{display:"flex",gap:"3px",marginTop:"-15px",marginBottom:"10px"}}>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                    </div>
                     <p className="disctiption">This bralette is beautiful...Feminine and edgy and comfortable!</p>
                     <p className="shop-link"><a href="">shop now</a></p>
                 </div>
              </div>
              <div>
                  <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/4Y5h33Z2DMlhmcDTZ85yQ9/4a829347d2391f0649abf40b5ab31d65/484733234-ls_customerfave_c.jpg?w=630&q=80&fm=webp" alt="" />
                 </div>
                 <div className="detail">
                    <p>CUSTOMER FAVORITE</p>
                    <p className="heading">The Guilhermina Ballet Mules</p>
                    <div style={{display:"flex",gap:"3px",marginTop:"-15px",marginBottom:"10px"}}>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                    </div>
                     <p className="disctiption">Stunning...I absolutely LOVE this shoe!</p>
                     <p className="shop-link"><a href="">shop now</a></p>
                 </div>
              </div>
              <div>
                  <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/7h8K0HHlG7VatvoyzVnMXB/7198c5548ea54f0747bf1cdf9bc6db00/484733237-ls_customerfave_d.jpg?w=630&q=80&fm=webp" alt="" />
                 </div>
                 <div className="detail">
                    <p>CUSTOMER FAVORITE</p>
                    <p className="heading">The Maeve Cropped Racerback Tank</p>
                    <div style={{display:"flex",gap:"3px",marginTop:"-15px",marginBottom:"10px"}}>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                      <p><StarIcon boxSize={2}/></p>
                    </div>
                     <p className="disctiption">Perfect...bought this in as many colors as possible!</p>
                     <p className="shop-link"><a href="">shop now</a></p>
                 </div>
              </div>
            </div>
            <div className="top-rated" style={{marginBottom:"30px"}}>
              <h3>You May Also Like</h3>
              <hr style={{marginTop:"8px"}}/>
              <hr />
            </div>
            <div >
              <Slider {...settings2}>
              {slider.map((item) => (
                <div key={item.id} className="slider" >
                  <img className="slide1" src={item.img} alt="" />
                </div>
              ))}
            </Slider>

              </div>
              <div className="top-rated" style={{marginBottom:"30px"}}>
              <h3>Trending Now</h3>
              <hr style={{marginTop:"8px"}}/>
              <hr />
            </div>
              <div >
              <Slider {...settings2}>
              {slider.map((item) => (
                <div key={item.id} className="slider" >
                  <img className="slide1" src={item.img} alt="" />
                </div>
              ))}
            </Slider>

              </div>
              <div className="top-rated" style={{marginBottom:"30px",textAlign:"center",letterSpacing:"1px",fontSize:"17px",marginTop:"50px"}}>
              <h3>More to Explore</h3>
              <hr style={{marginTop:"8px"}}/>
              <hr />
            </div>
            <div className="card-6">
              <div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/U2fCd9Ep6otJYrxWA6a0t/2a236b9ea21b5785d7e98cee0f11871e/MTE_1.jpg?w=856&q=80&fm=webp" alt="" />
              </div>
              <div className="detail">
                <p className="heading">
                New Chapter, Fresh Paige
                </p>
                <p className="disctiption">
                Turn to the experts in flattering fits and flawlessly tailored pairs to start spring on the right note.
                </p>
                <p className="shop-link">
                  shop Paijama jeans
                </p>
              </div>
                
              </div>
              <div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/25UKbR1vHJpq6yriubNoSD/c1e9f1ba93a96c9b3d7ac869951de29c/MTE_2.jpg?w=856&q=80&fm=webp" alt="" />
              </div>
              <div className="detail">
                <p className="heading">
                The Beauty Edit: TikTok-Famous!
                </p>
                <p className="disctiption">
                Make Beauty (have you tried their skin tint??) is just one of the brands you'll find in our curated collection of gone-viral TikTok faves.
                </p>
                <p className="shop-link">
                  don't miss these must-haves
                </p>
              </div>
                
              </div>
              <div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/4oNoIgRJVULLXu6o02FnFA/79760e323b6140b7fc68bb50638c8079/032023_HPG_MTE_3.jpg?w=856&q=80&fm=webp" alt="" />
              </div>
              <div className="detail">
                <p className="heading">
                celebrating
International Women's Day
                </p>
                <p className="disctiption">
                We're proud to support women-owned brands each and every day.
                </p>
                <p className="shop-link">
                  discover new favorites
                </p>
              </div>
                
              </div>
             
               
            </div>

      </div>

    </div>

  </div>;
};

export default Index;
