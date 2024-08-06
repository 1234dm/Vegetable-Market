import React from 'react'
import Testimonial from '../Componets/Testimonial';

const AboutPage = () => {
    return (
        <>
            <div class="container-fluid bg-dark">
                <div
                    class="container text-center align-content-center About-part pt-5"
                    style={{ height: "35vh" }}
                >
                    <p style={{ color: "orange" }}>WE SALE FRESH FRUITS</p>
                    <h2  >About</h2>
                </div>
            </div>
            <div class="container mt-5 d-flex">
                <div class="row">
                    <div
                        class="col-lg-6 col-md-6 mb-4 mb-md-5 align-content-center justify-content-center"
                    >
                        <div class="list-box d-flex">
                            <div class="list-icon p-4">
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <div class="content">
                                <h3>Home Delivery</h3>
                                <p>
                                Experience the convenience and joy of enjoying farm-fresh fruit without leaving the comfort of your home. At Fresh Fruit Hub, we bring nature’s finest directly to your door with our reliable home delivery service.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                        <div class="list-box d-flex">
                            <div class="list-icon p-4">
                                <i class="fas fa-money-bill-alt"></i>
                            </div>
                            <div class="content">
                                <h3>Best Price</h3>
                                <p>
                                At Fresh Fruit Hub, we believe that enjoying fresh, high-quality fruit shouldn’t break the bank. That’s why we’re committed to offering the best prices on a wide range of delicious fruits, ensuring you get the most value for your money.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                        <div class="list-box d-flex">
                            <div class="list-icon p-4">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <div class="content">
                                <h3>Custom Box</h3>
                                <p>
                                At Fresh Fruit Hub, we know that everyone has their own unique tastes and preferences. That’s why we offer a personalized fruit box service, allowing you to curate your own selection of premium fruits and create a custom box tailored just for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="list-box d-flex">
                            <div class="list-icon p-4">
                                <i class="fas fa-sync-alt"></i>
                            </div>
                            <div class="content">
                                <h3>Quick Refund</h3>
                                <p>
                                At Fresh Fruit Hub, your satisfaction is our top priority. We understand that sometimes things don’t go as planned, and we’re here to ensure that you have a smooth and stress-free experience with our quick refund policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </>
    )
}
export default AboutPage;
