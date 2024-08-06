import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section>
                <center class="mt-5">
                    <h1><span style={{ color: "orange" }}>Our </span> Testimonial</h1>
                    <p>
                    "Exceptional quality and service! The fruits I received were incredibly fresh and delicious. The delivery was prompt, and the customer service team was very helpful. I highly recommend FreshFruitHub to anyone looking for premium fruit in India!"
                    </p>
                </center>
                <div class="container-fluid" style={{ backgroundColor: "rgb(237, 234, 222)" }}>
                    <div class="container mt-5 p-3">
                        <div class="row">
                            {/* <!-- Card 1 --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{backgroundColor: "rgb(252, 245, 229)"}}
                                >
                                    <img
                                        src="IMG/Card_1.jpg"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Sneha Rao</h5>
                                        <p class="card-text">
                                        "Exceptional quality and service! The fruits I received were incredibly fresh and delicious. The delivery was prompt, and the customer service team was very helpful. I highly recommend Fresh Fruit Hub to anyone looking for premium fruit in India!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 2 --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{ backgroundColor: "rgb(252, 245, 229)" }}
                                >
                                    <img
                                        src="IMG/Card_2.jpg"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Ravindra Patil</h5>
                                        <p class="card-text">
                                        "I was impressed by the variety and quality of fruits available. The custom box option allowed me to select exactly what I wanted, and the prices were very reasonable. I’ll definitely be ordering again. Thank you for such a great experience!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 3  --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{ backgroundColor: "rgb(252, 245, 229)" }}
                                >
                                    <img
                                        src="IMG/Card_3.png"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Arjun Mehta</h5>
                                        <p class="card-text">
                                        "Absolutely delighted with the quick delivery and freshness of the fruit. The apples and oranges were particularly juicy and flavorful. It’s great to have such a reliable source for high-quality fruit right at my doorstep."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;