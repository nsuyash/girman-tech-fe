import Header from "../components/Header";

const ContactDetails = () => {
    return (
        <>
            <Header />
            <main className="container mt-5">
                <h1>Contact Us</h1>
                <div className="row g-0 mt-4">
                    <div className="card col-md-3 me-3 mb-3">
                    <img className="card-img-top" src="https://media.licdn.com/dms/image/v2/D5603AQFYE6ZcqbdCsA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731250974398?e=1739404800&v=beta&t=jJ8Uug6iBbmZJTtEdu_SnrgGxoaf_VBwq2HGnGBXuyc" alt="Co-Founder @girmantech" />
                    <div className="card-body">
                        <h3>Manish Dipankar</h3>
                        <p>Co-Founder @girmantech</p>
                        <p><strong>Contact No.: </strong>+91 8123259095</p>
                        <p><strong>Email Id: </strong>manish@girmantech.com</p>
                    </div>
                    </div>
                    <div className="card col-md-3 mb-3">
                    <img className="card-img-top" src="https://media.licdn.com/dms/image/v2/D5603AQEf9YUXLCtjXA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714710429638?e=1739404800&v=beta&t=4-DxYmj91zIwbDHjz4b4JTHcJa2m7ufpOp30MHCB_iQ" alt="Co-Founder @girmantech" />
                    <div className="card-body">
                        <h3>Girish Budhwani</h3>
                        <p>Founder @girmantech</p>
                        <p><strong>Contact No.: </strong>+91 7760560137</p>
                        <p><strong>Email Id: </strong>girish@girmantech.com</p>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactDetails;