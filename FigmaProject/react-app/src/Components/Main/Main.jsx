import React from 'react'
import "./Main.css"
import Avatar from "../../images/Ellipse (1).png"

function Main() {
    return (
        <main>
            <div className="Main">
                <div className="leftMain">

                    <div className="apartmentsInfo">
                        <h1 className="aptTitle">Quiet apartment</h1>
                        <h3 className="aptSubTitle">Entire apartment</h3>
                        <div className="aptDescription">
                            <span className="aptInfo">4 guests</span>
                            <span className="aptInfo">1 bed</span>
                            <span className="aptInfo">1 bath</span>
                        </div>

                        <div className="text">
                            City Apartment is newly renovated in the heart of Budapest, right
                            in the city center. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </div>

                        <a className="phone links" href="#">Contact host</a>
                    </div>

                    <div className="Amenities">
                        <h3 className="amnTitle">Amenities</h3>
                        <div className="mainAmenities">
                            <div className="amnText">Elevator</div>
                            <div className="amnText">Hair dryer</div>
                            <div className="amnText">Washer</div>
                            <div className="amnText">Kitchen</div>
                        </div>
                        <a className="links" href="#">Show All Amenities</a>
                    </div>

                    <div className="Reviews">
                        <h2 className="revTitle">Reviews</h2>
                        <div className="mainReviews">
                            <div className="revList">
                                <div className="revListTop">
                                    <div className="revListLeft">
                                        <div className="revAvatar">
                                            <img className="revAvatarP" src={Avatar} alt="Avatar" />
                                        </div>
                                    </div>
                                    <div className="revListRight">
                                        <div className="revName">John</div>
                                        <div className="revDate">September 2016</div>
                                    </div>
                                </div>
                                <div className="revBottom">
                                    <div className="reviText text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>

                            <div className="revList">
                                <div className="revListTop">
                                    <div className="revListLeft">
                                        <div className="revAvatar">
                                            <img className="revAvatarP" src={Avatar} alt="Profile Photo" />
                                        </div>
                                    </div>
                                    <div className="revListRight">
                                        <div className="revName">John</div>
                                        <div className="revDate">September 2016</div>
                                    </div>
                                </div>
                                <div className="revListBottom">
                                    <div className="revText text">
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="Host">
                        <h2 className="hostName">Hosted by Jane</h2>
                        <h3 className="hostAdress">Budapest, Hungary</h3>
                        <div className="hostText text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et magna aliqua.
                        </div>
                        <a className="hostLinks links" href="#">Contact host</a>
                    </div>
                </div>

                <div className="rightMain">
                    <form className="form" action="POST">
                        <h2 className="formTitle">25$ per night</h2>
                        <input placeholder="Date" type="text" name="formDate" className="formInput dateInput"
                            onfocus="(this.type='date')" />
                        <br />
                        <input placeholder="Guest" type="number" name="formNumber" className="formInput numberInput" />
                        <div className="buttons">
                            <button type="submit" className="formButton">Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Main