import { Link } from "react-router-dom"
import Sneaker from "../components/Sneaker"
const Profile = ({ profileItems }) => {
    return (
        <>
            {profileItems.length > 0 ? (<div className="pro">
                <section className="profile">
                    <div className="container">
                        <div className="profile-content">
                            <Link to='/react-sneakers/'>
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
                                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect width="70" height="70" fill="#E5E5E5" />
                                                <g clipPath="url(#clip0_0_1)">
                                                    <rect width="1250" height="1059" transform="translate(-590 -446)" fill="#F7FBFE" />
                                                    <g filter="url(#filter0_d_0_1)">
                                                        <rect x="-505" y="-361" width="1080" height="1105" rx="20" fill="white" />
                                                    </g>
                                                    <rect width="70" height="70" fill="url(#pattern0)" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_0_1" x="-525" y="-371" width="1120" height="1145" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="10" />
                                                        <feGaussianBlur stdDeviation="10" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                                    </filter>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlinkHref="#image0_0_1" transform="scale(0.0138889)" />
                                                    </pattern>
                                                    <clipPath id="clip0_0_1">
                                                        <rect width="1250" height="1059" fill="white" transform="translate(-590 -446)" />
                                                    </clipPath>
                                                    <image id="image0_0_1" width="72" height="72" xlinkHref="data:image/png;base64,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" />
                                                </defs>
                                            </svg>

                                        </div>
                                        <div className="no-liked">
                                            <h2>You don't have any Sneakers</h2>
                                            <h4>Are you broke? Take at least one pair of sneakers</h4>
                                        </div>
                                        <div className="empty-btn">
                                            <Link to='/react-sneakers/'>
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