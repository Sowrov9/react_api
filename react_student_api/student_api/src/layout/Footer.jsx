import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    <form action>
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-auto mb-4 mb-md-0">
                                <p className="pt-2">
                                    <strong>Sign up to reach you</strong>
                                </p>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-5 col-12 mb-4 mb-md-0">
                                {/* Email input */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form5Example22" className="form-control" />
                                    <label className="form-label" htmlFor="form5Example22">Email address</label>
                                </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-auto mb-4 mb-md-0">
                                {/* Submit button */}
                                <button data-mdb-ripple-init type="button" className="btn btn-primary mb-4">
                                    Subscribe
                                </button>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </form>
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2020 Copyright:
                    <a className="text-body" href="https://portfolio.sowrov.site/">Sowrov's world</a>
                </div>
                {/* Copyright */}
            </footer>



        </>
    )
}

export default Footer
