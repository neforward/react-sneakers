import { Link } from "react-router-dom"
import Sneaker from "../components/Sneaker"
const Profile = ({ profileItems }) => {
    return (
        <>
            {profileItems.length > 0 ? (<div className="pro">
                <section className="profile">
                    <div className="container">
                        <div className="profile-content">
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
                            <h2>My Purchases</h2>
                        </div>
                        <div className="profile-gap">

                            {profileItems.map((items, index) => (
                                <div className="profile-items" key={index}>
                                    <div className="purchase-counter">Purchase #{index + 1}</div>
                                    {items.map((item, i) => (
                                        <Sneaker profile={true} {...item} key={i} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>) : (
                <div className="empt">
                    <div className="wrapper-container">
                        <div className="wrapper">
                            <section className="empty">
                                <div className="container">
                                    <div className="empty-content">
                                        <div className="sad">
                                            <img src="https://em-content.zobj.net/source/apple/391/pleading-face_1f97a.png" alt="" />
                                        </div>
                                        <div className="no-liked">
                                            <h2>You don't have any Sneakers</h2>
                                            <h4>Are you broke? Take at least one pair of sneakers</h4>
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
                </div >
            )
            }
        </>
    )
}
export default Profile
