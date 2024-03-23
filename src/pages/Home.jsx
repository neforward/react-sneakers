import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sneaker from '../components/Sneaker'
import 'swiper/css'
import '../App.css'

const Home = () => {
    const sneakers = useSelector(state => state.sneakersReduce.sneakers)
    const cart = useSelector(state => state.sneakersReduce.cart)
    const [search, setSearch] = useState('');
    const handleInput = (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        setSearch(inputValue);
    }
    return (
        <>
            <main>
                <Swiper>
                    <SwiperSlide>
                        <div className="block">
                            <div className="swiper-info">
                                <div className="swiper-txt">
                                    <h2>Cole World Forever</h2>
                                </div>
                                <div className="swiper-btn">
                                    <button>get</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blockkk">
                            <div className="swiper-info">
                                <div className="swiper-txt">
                                    <h2>Cole World Forever</h2>
                                </div>
                                <div className="swiper-btn">
                                    <button>get</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blockk">
                            <div className="swiper-info">
                                <div className="swiper-txt">
                                    <h2>Off Season Forever</h2>
                                </div>
                                <div className="swiper-btn">
                                    <button>get</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blockkkk">
                            <div className="swiper-info">
                                <div className="swiper-txt">
                                    <h2>Cole World Forever</h2>
                                </div>
                                <div className="swiper-btn">
                                    <button>get</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <section className="hero">
                    <div className="container">
                        <div className="hero-catalog">
                            <h2>All Sneakers</h2>
                            <label>
                                <input type="text" placeholder="Search..." value={search}
                                    onChange={handleInput} />
                            </label>
                        </div>
                        <div className="hero-content">
                            {sneakers
                                .filter((sneaker) => {
                                    const sneakerName = sneaker.name.toLowerCase();
                                    return sneakerName.includes(search);
                                })
                                .map((sneaker) => (
                                    <Sneaker
                                        key={sneaker.id}
                                        {...sneaker}
                                        added={JSON.stringify(cart).includes(`"id":"${sneaker.id}"`)}

                                    />
                                ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home
