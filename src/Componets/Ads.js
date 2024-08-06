import React from 'react'

const Ads = () => {
    return (
        <>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <div class="embed-responsive embed-responsive-16by9">
                            <video
                                controls
                                muted
                                class="embed-responsive-item"
                                src="IMG/Fruit Project_1080p.mp4"
                                allowfullscreen
                            ></video>
                        </div>
                    </div>
                    <div class="col-lg-6 pt-3">
                        <h1>We Are<span style={{ color: "orange" }} > Fruit's </span></h1>
                        <p>
                        Looking to promote your brand or product? Our Ads Component offers a prime opportunity to showcase your business to a targeted audience of fruit enthusiasts and health-conscious consumers. Leverage our platform to reach potential customers in an engaging and effective way.
                        Reach a highly engaged audience interested in fresh produce, healthy eating, and quality products. Our website attracts visitors who are actively seeking top-notch fruit and related items.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ads;