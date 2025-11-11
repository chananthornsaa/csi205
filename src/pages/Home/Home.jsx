
import './Home.css'
function Home() {
    return (
        <div className='home-container container mt-5'>
      <div className="row align-items-center justify-content-center">
        
        <div className="col-md-3 text-center mb-3 mb-md-0">
          <img
            src="./assets/me.jpg"
            alt="student"
            className=" img-fluid border "
          />
        </div>

        <div className="col-md-7">
          <h4 className="fw-bold text-primary mb-1">Chananthorn Sa-ardjinda</h4>
          <p className="mb-1"><strong>Student ID:</strong> 67117502</p>
          <p className="mb-1">
            <strong>Year:</strong> 2 <br />
            <strong>Major:</strong> Computer Science <br />
            <strong>Faculty:</strong> Information Technology <br />
            <strong>University:</strong> Sripatum University
          </p>
          <hr />
          <p className="mb-0">
            I graduated from Hatyai Wittayalai school.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Home