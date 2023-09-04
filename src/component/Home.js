import React, { useState } from 'react'
import "./Home/home.css"
import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { BiSolidPieChartAlt2 } from 'react-icons/bi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaFileContract } from 'react-icons/fa';
import { HiGlobeAlt } from 'react-icons/hi';
import { BiSignal4 } from 'react-icons/bi';
import { FaChartArea } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'http://metalcraftstudio.com/wp-content/uploads/slider/cache/12963e4a2991a6aacb9e32700a5ec88c/image.psd-2.webp', // Replace with your image file path
            text: 'CNC Laser Cutting Job Work',
        },
        {
            image: 'http://metalcraftstudio.com/wp-content/uploads/slider/cache/d1b80ded3e905211c9abf878e3ccd595/image.psd-1.webp', // Replace with your image file path
            text: 'Delhi Based Company, Is One of the Most Experienced',
        },
        // Add more slides as needed
    ];

    const testimonialData = [
        {
            id: 1,
            name: 'John Doe',
            text: 'Excellent customer service with a wide selection of decorative profiles at a great price, safe packaging, quick shipping, and a helpful staff. I heartily suggested.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            text: 'In addition to Laser Cutting Services they also Manufacture Stainless Steel Profiles, PVD Sheets and Customised Items. Very Satisfied With their Work.',
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
                <div className="slide-content">
                    <div className='contentText' >{slides[currentSlide].text}</div>
                    <button className="outlined-button">Read More</button>
                </div>
            </div>
            <div className="slide-navigation">
                <button className="arrow left" onClick={prevSlide}><span>&lt;</span></button>
                <button className="arrow right" onClick={nextSlide}><span>&gt;</span></button>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onMouseEnter={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
            <Stack direction={'row'} gap={2} style={{ marginTop: "35px", marginLeft: "3rem", overflowX: "clip" }}>

                <Stack direction={'column'} >
                    <Typography style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Welcome to</Typography>
                    <Typography style={{ fontFamily: "sans-serif", fontSize: "40px", fontWeight: "bolder" }}>Metal Craft Studio</Typography>
                    <p style={{ overflow: "hidden", textOverflow: "hidden" }}>Metal Craft Studio (MCS), a Narela Delhi-based company, Provides high-quality metal job work services to those who manufacture Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles Parts, Lift & Elevators, Electricity Panels and Medical equipment within Delhi-NCR. MCS is also a prominent manufacturer and supplier of Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets etc with PAN India presence. We are one of the few businesses in Delhi with a CNC laser cutting system that can design and cut various metals, including brass, copper, zinc, and aluminium, with a bed size of up to 2*4 metres</p>
                    <button className="classButton">Read More</button>
                </Stack>
                <img src="https://metalcraftstudio.com/wp-content/uploads/2023/06/Untitled-design7.gif"
                    alt="gif"
                    style={{
                        "width": "40%",
                        "height": "40%",
                        "objectFit": "cover"
                    }}></img>
            </Stack>
            <Stack direction={'column'} gap={2} style={{ marginTop: "30px", marginLeft: "3rem", justifyContent: "center" }} >
                <Typography style={{ fontFamily: "sans-serif", fontSize: "40px", textAlign: "center", fontWeight: "bolder" }}>Our Products</Typography>
                <p style={{ overflow: "hidden", textOverflow: "hidden" }}>We cater high-quality metal job work services to those who manufacture Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles Parts, Lift & Elevators, Electricity Panels and Medical Equipments within Delhi-NCR. MCS is also a prominent manufacturer and supplier of Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets etc with PAN India presence.</p>
                <Stack direction={'row'} gap={1} style={{ marginTop: "10px" }}>
                    {/* First Div */}
                    <div className='one'>
                        <div className="products1" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/Blog-Banner-for-Website-Content-1.webp')" }}>
                            <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>PVD Louver Panels</div>
                        </div>
                        <button className="product1button" >Read More</button>
                    </div>
                    <div className='one'>
                        <div className="products2" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/image.psd-3.webp')" }}>
                            <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>PVD Louver Panels</div>
                        </div>
                        <button className="product1button" >Read More</button>
                    </div>
                    <div className='one'>
                        <div className="products3" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/pexels-scott-webb-2117937-1.webp')" }}>
                            <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>PVD Louver Panels</div>
                        </div>
                        <button className="product1button" >Read More</button>
                    </div>
                    <div className='one'>
                        <div className="products4" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/20230201_134423.webp')" }}>
                            <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>PVD Louver Panels</div>
                        </div>
                        <button className="product1button" >Read More</button>
                    </div>
                </Stack>

            </Stack>
            <Stack direction={'column'} gap={2} style={{ marginTop: "30px", marginLeft: "3rem", justifyContent: "center" }} >
                <Typography style={{ fontFamily: "sans-serif", fontSize: "40px", textAlign: "center", fontWeight: "bolder" }}>We Provides Sheet Metal Job Work Services</Typography>
                <p style={{ overflow: "hidden", textOverflow: "hidden" }}>We cater high-quality metal job work services to those who manufacture Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles Parts, Lift & Elevators, Electricity Panels and Medical Equipments within Delhi-NCR. MCS is also a prominent manufacturer and supplier of Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets etc with PAN India presence.</p>
                <Stack direction={'row'} gap={1} style={{ marginTop: "10px" }}>

                    <div className="products1" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/image.psd-7.webp')" }}>
                        <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>Job Work</div>
                    </div>

                    <div className="products2" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/image.psd-4.webp')" }}>
                        <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>Sheet Laser Cutting</div>
                    </div>


                    <div className="products3" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/image.psd-5.webp')" }}>
                        <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>Sheet Metal Bending</div>
                    </div>


                    <div className="products4" style={{ backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/image.psd-6.webp')" }}>
                        <div className='contentText1' style={{ position: "absolute", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "10px" }}>Sheet V-Growing</div>
                    </div>

                </Stack>

            </Stack>
            <div className='chooseComponent' style={{
                backgroundImage: "url('https://metalcraftstudio.com/wp-content/uploads/2023/06/Blog-Banner-for-Website-Content.webp')",
                margin: "2rem", marginTop: "1rem"
            }}>

                <div className='heading' >Why Choose Us ?</div>

                <Stack direction={'row'} gap={5} style={{ margin: "4rem" }} alignItems={'center'}>
                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center"    >
                                <FaChartArea fontSize={"40px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        CNC laser Cutting
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        Huge bed size of up to 2*4 mtr.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center"    >
                                <BiSignal4 fontSize={"40px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        V-Groove Technology
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        V-Groove (90°) for sharp edges profiles
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={1} alignItems="center"    >
                                <BiSolidPieChartAlt2 fontSize={"40px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography variant="h5" component="div">
                                        Customization Available
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        Customized shapes and sizes as per your requirements
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>

                <Stack direction={'row'} gap={5} style={{ margin: "4rem" }} alignItems={'center'}>
                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center"    >
                                <AiOutlineLineChart fontSize={"48px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Competitive Prices
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        Price is negotiable (T&C) Explore our process.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center"    >
                                <FaFileContract fontSize={"40px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        PAN India Delivery
                                    </Typography>
                                    <Typography variant="body2" component="div">

                                        Inlay profiles delivery throughout PAN india
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 350, maxHeight: 200 }} className="custom-card" >

                        <CardContent>
                            <Stack direction={'row'} gap={2} alignItems="center"    >
                                <HiGlobeAlt fontSize={"40px"} style={{ backgroundColor: "#e1b654" }} />
                                <Stack direction={'column'} >
                                    <Typography variant="h5" component="div" >
                                        Free Samples
                                    </Typography>
                                    <Typography variant="body1" component="div">
                                        Free samples can be provided (T&C)
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
                <div style={{ height: "2rem" }}></div>
            </div>

            <div className="testomonial">
                <Stack direction={'column'} gap={3}>
                    <div className="testimonialHeading">Our Testimonials</div>
                    <Stack direction={'row'} gap={2} style={{ margin: "2rem" }}>
                        <button className="left" onClick={prevSlide} style={{backgroundColor:"#fff"}}>
                            <FaArrowLeft style={{color:"#000", backgroundColor:"#fff"}}/>
                        </button>
                        <div className="testimonialSlider">

                            {testimonialData.map((testimonial) => (
                                <>
                                    <div
                                        className="testimonialCard"
                                        style={{
                                            transform: `translateX(-${currentSlide * 100}%)`,
                                        }}
                                    >
                                        <div key={testimonial.id} className="testimonialItem">
                                            <div className="testimonialText">{testimonial.text}</div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>

                        <button className="right" onClick={nextSlide} style={{backgroundColor:"#fff"}}>
                            <FaArrowRight style={{color:"#000", backgroundColor:"#fff"}} />
                        </button>

                    </Stack>
                </Stack>
            </div>

        </div >
    );

}
