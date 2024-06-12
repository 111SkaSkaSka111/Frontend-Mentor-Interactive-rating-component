import { useState } from "react";

function App() {
    const [rating, setRating] = useState(0);
    const [active, setActive] = useState(null);
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

    function handleInput(e, i) {
        e.preventDefault();
        setActive(i);
        setRating(i);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1000);
        } else {
            setSubmit(true);
        }
    };

    return (
        <section className="wrapper">
            <div className="card">
                {submit ? (
                    <div className="thank-you">
                        <img src="/images/illustration-thank-you.svg" alt="" className="thank-you-img" />
                        <p className="thank-you-text">You selected {rating} out of 5</p>
                        <h1>Thank you!</h1>
                        <p className="thank-you-text-2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                ) : (
                    <>
                        <img src="/images/icon-star.svg" alt="" className="star" />
                        <h1>How did we do?</h1>
                        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                        <div className={`rating ${error ? "error" : ""}`}>
                            {[...Array(5)].map((_, index) => (
                                <button key={index} onClick={(e) => handleInput(e, index + 1)} className={active === index + 1 ? "active" : ""}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </>
                )}
            </div>
            {/* <!-- Rating state start --> */}

            {/* How did we do?

Please let us know how we did with your support request. All feedback is appreciated 
to help us improve our offering!

1 2 3 4 5

Submit */}

            {/* <!-- Rating state end --> */}

            {/* <!-- Thank you state start --> */}

            {/* You selected <!-- Add rating here --> out of 5 */}

            {/* Thank you!

We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch! */}

            {/* <!-- Thank you state end --> */}
        </section>
    );
}

export default App;
