import { Link } from "react-router-dom"
import Sneaker from '../components/Sneaker'
import { useSelector } from "react-redux"
export const Liked = () => {
    const likedItems = useSelector((state) => state.sneakersReduce.likedItems)
    return (
        <>
            {likedItems.length > 0 ? (
                <div className="love">
                    <section className="liked">
                        <div className="container">
                            <div className="liked-content">
                                <Link to='/'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="34"
                                            height="34"
                                            rx="7.5"
                                            fill="white"
                                            stroke="#F2F2F2"
                                        />
                                        <path
                                            d="M19 22L14 17L19 12"
                                            stroke="#C8C8C8"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                                <h2>My Favorites</h2>
                            </div>
                            <div className="liked-items">
                                {
                                    likedItems.map((item) => (
                                        <Sneaker
                                            key={item.id}
                                            imgURL={item.imgURL}
                                            name={item.name}
                                            price={item.price}
                                            id={item.id}
                                            liked={item.isLiked}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            ) :
                (
                    <div className="empt">
                        <div className="wrapper-container">
                            <div className="wrapper">
                                <section className="empty">
                                    <div className="container">
                                        <div className="empty-content">
                                            <div className="sad">
                                                <img src="https://em-content.zobj.net/source/apple/391/pensive-face_1f614.png" alt="" />
                                            </div>
                                            <div className="no-liked">
                                                <h2>No Favorite :(</h2>
                                                <h4>You haven't liked any sneaker</h4>
                                            </div>
                                            <div className="empty-btn">
                                                <Link to='/'>
                                                    <button>Get Back</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Liked
