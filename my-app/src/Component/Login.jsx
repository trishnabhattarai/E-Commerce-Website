import React from 'react'
export default function Login() {
  return (
    <>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
        style={{
          backgroundImage: "url('/photo/10.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-light" id="offcanvasExampleLabel">Profile Setting</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ marginLeft: "200px" }}></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <p className="text-center">Name: _______</p>
            <p className="text-center">Email: ________</p>
            <div className="d-flex flex-column ">
              <div className="p-2 shadow-lg"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  marginTop: "20px", marginLeft: "130px"
                }}>
                <img src="/photo/15.png" className="rounded-circle" alt="..." style={{ width: "70px", height: "70px" }}></img>
              </div>
              <p className="text-center text-body-tertiary" style={{ marginTop: "20px" }}>**Tell interesting things about you**</p>
              <div className="p-2 "
                style={{

                  height: "237px", width: "350px", background: "transparent"
                }}>

                <div class="d-flex flex-column mb-3">
                  <div className='p-2'>
                    <button type="button" className="btn btn-secondary rounded-pill shadow-lg" style={{ width: "340px", marginRight: "50px" }}>
                      <img src='/photo/11.png' alt='' style={{ marginLeft: "0px", marginRight: '50px', width: '20px', height: '20px' }} />
                      Edit Profile
                    </button>
                  </div>
                  <div className='p-2'>
                    <button type="button" className="btn btn-secondary rounded-pill shadow-lg" style={{ width: "340px", marginRight: "50px" }}>
                      <img src='/photo/12.png' alt='' style={{ marginLeft: "0px", marginRight: '50px', width: '20px', height: '20px' }} />
                      Location
                    </button>
                  </div>
                  <div className='p-2'>
                    <button type="button" className="btn btn-secondary rounded-pill shadow-lg" style={{ width: "340px", marginRight: "50px" }}>
                      <img src='/photo/14.png' alt='' style={{ marginLeft: "0px", marginRight: '50px', width: '20px', height: '20px' }} />
                      Security
                    </button>
                  </div>
                  
               
                  <div className='p-2'>
                    <button type="button" className="btn btn-secondary rounded-pill shadow-lg" style={{ width: "340px", marginRight: "50px" }}>
                      <img src='/photo/13.png' alt='' style={{ marginLeft: "0px", marginRight: '30px', width: '20px', height: '20px' }} />
                      Information
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}


