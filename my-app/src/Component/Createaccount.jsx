import React from 'react'
import { Link } from 'react-router-dom'
export default function Createaccount() {
  return (
    <>

      <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle1"
        aria-hidden="true"
        style={{ marginLeft: '300px' }}

      >
        Let's Start
      </button>

      {/* First Modal */}
      <div className="modal fade" id="exampleModalToggle1" aria-hidden="true" tabIndex="-1" aria-labelledby="exampleModalToggleLabel1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content container">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalToggleLabel1">Create an Account</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ marginLeft: '470px' }}
              ></button>
            </div> {/* phase */}
            <div className="d-flex align-items-stretch">
              <div className="p-2">
                <img src="./photo/5.gif" alt="" style={{ width: '350px', height: '350px' }} />
              </div>
              <span className="border-end"></span>
              <div className="p-2">
                <form style={{ marginLeft: '30px' }}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">UserName</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputname"
                      aria-describedby="nameHelp"
                      autoComplete='off'
                      style={{ background: 'transparent' }}
                    />
                    <div id="nameHelp" className="form-text ">UserName should contain at least 6 characters.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      autoComplete='off'
                      style={{ background: 'transparent' }}
                    />
                  </div>
                  <p>
                    <Link className="link-offset-2 link-underline link-underline-opacity-0" to="/">Forget password</Link>
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"

                    style={{ marginLeft: '50px', width: '200px' }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    style={{ marginLeft: '50px', width: '200px', marginTop: '20px' }}
                  >
                    Create Account
                  </button>
                  <p style={{ marginLeft: '150px', marginTop: '10px' }}>or</p>
                  <img src="./photo/36.png" alt=" " style={{ width: '30px', height: '30px', marginBottom: '20px', marginLeft: '110px' }} />
                  <img src="./photo/7.png" alt=" " style={{ width: '25px', height: '25px', marginBottom: '20px', marginLeft: '30px' }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" tabIndex="-1" aria-labelledby="exampleModalToggleLabel2">
        
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content container">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Sign Up</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ marginLeft: '630px' }}
                ></button>
              </div>

              <div className="modal-body">

                <div className="d-flex align-items-start">

                  <div className="p-2">
                    <img src="./photo/8.gif" alt="" style={{ width: '310px', height: '300px', marginTop: "60px" }} />
                  </div>

                  <div className="p-2">
                    <div className="d-inline-flex p-2">

                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputname"
                          aria-describedby="nameHelp"
                          placeholder="FirstName"
                          required autoComplete='off'
                          style={{ background: 'transparent' }}
                        />
                      </div>
                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputname"
                          aria-describedby="nameHelp"
                          placeholder="LastName"
                          required autoComplete='off'
                          style={{ background: 'transparent' }}
                        />
                      </div>

                    </div>
                    <div className="p-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputname"
                        aria-describedby="nameHelp"
                        placeholder="Email or Number"
                        required autoComplete='off'
                        style={{ background: 'transparent', marginLeft: "10px" }}
                      />
                    </div>
                    <div className="p-2">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        required autoComplete='off'
                        placeholder="New-Password"
                        style={{ background: 'transparent', marginLeft: "14px" }}
                      />
                    </div>
                    <div className="p-2">
                      <div className="d-inline-flex p-2">
                        <div className="p-2">
                          <p>Birthday?</p>
                          <select className="form-select" aria-label="Default select example" required autoComplete='off' style={{ background: "transparent", width: "105px" }} >
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>

                        </div>
                        <div className="p-2">
                          <select className="form-select" aria-label="Default select example" required autoComplete='off' style={{ background: "transparent", marginTop: "40px" }} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="12">13</option>
                            <option value="12">14</option>
                            <option value="12">15</option>
                            <option value="12">16</option>
                            <option value="12">17</option>
                            <option value="12">18</option>
                            <option value="12">19</option>
                            <option value="12">20</option>
                            <option value="12">21</option>
                            <option value="12">22</option>
                            <option value="12">23</option>
                            <option value="12">24</option>
                            <option value="12">25</option>
                            <option value="12">26</option>
                            <option value="12">27</option>
                            <option value="12">28</option>
                            <option value="12">29</option>
                            <option value="12">30</option>
                            <option value="12">31</option>
                            <option value="12">32</option>
                          </select>
                        </div>
                        <div className="p-2">
                          <select className="form-select" aria-label="Default select example" required autoComplete='off' style={{ background: "transparent", marginTop: "40px" }} >
                            <option value="1">1900</option>
                            <option value="2">1901</option>
                            <option value="3">1902</option>
                            <option value="4">1903</option>
                            <option value="5">1904</option>
                            <option value="6">1905</option>
                            <option value="7">1906</option>
                            <option value="8">1907</option>
                            <option value="9">1908</option>
                            <option value="10">1909</option>
                            <option value="11">1910</option>
                            <option value="12">1911</option>
                            <option value="13">1912</option>
                            <option value="14">1913</option>
                            <option value="15">1914</option>
                            <option value="16">1915</option>
                            <option value="17">1916</option>
                            <option value="18">1917</option>
                            <option value="19">1918</option>
                            <option value="20">1919</option>
                            <option value="21">1920</option>
                            <option value="22">1921</option>
                            <option value="23">1922</option>
                            <option value="24">1923</option>
                            <option value="25">1924</option>
                            <option value="26">1925</option>
                            <option value="27">1926</option>
                            <option value="28">1927</option>
                            <option value="29">1928</option>
                            <option value="30">1929</option>
                            <option value="31">1930</option>
                            <option value="32">1931</option>
                            <option value="33">1932</option>
                            <option value="34">1933</option>
                            <option value="35">1934</option>
                            <option value="36">1935</option>
                            <option value="37">1936</option>
                            <option value="38">1937</option>
                            <option value="39">1938</option>
                            <option value="40">1939</option>
                            <option value="41">1940</option>
                            <option value="42">1941</option>
                            <option value="43">1942</option>
                            <option value="44">1943</option>
                            <option value="45">1944</option>
                            <option value="46">1945</option>
                            <option value="47">1946</option>
                            <option value="48">1947</option>
                            <option value="49">1948</option>
                            <option value="50">1949</option>
                            <option value="51">1950</option>
                            <option value="52">1951</option>
                            <option value="53">1952</option>
                            <option value="54">1953</option>
                            <option value="55">1954</option>
                            <option value="56">1955</option>
                            <option value="57">1956</option>
                            <option value="58">1957</option>
                            <option value="59">1958</option>
                            <option value="60">1959</option>
                            <option value="61">1960</option>
                            <option value="62">1961</option>
                            <option value="63">1962</option>
                            <option value="64">1963</option>
                            <option value="65">1964</option>
                            <option value="66">1965</option>
                            <option value="67">1966</option>
                            <option value="68">1967</option>
                            <option value="69">1968</option>
                            <option value="70">1969</option>
                            <option value="71">1970</option>
                            <option value="72">1971</option>
                            <option value="73">1972</option>
                            <option value="74">1973</option>
                            <option value="75">1974</option>
                            <option value="76">1975</option>
                            <option value="77">1976</option>
                            <option value="78">1977</option>
                            <option value="79">1978</option>
                            <option value="80">1979</option>
                            <option value="81">1980</option>
                            <option value="82">1981</option>
                            <option value="83">1982</option>
                            <option value="84">1983</option>
                            <option value="85">1984</option>
                            <option value="86">1985</option>
                            <option value="87">1986</option>
                            <option value="88">1987</option>
                            <option value="89">1988</option>
                            <option value="84">1989</option>
                            <option value="91">1990</option>
                            <option value="92">1991</option>
                            <option value="93">1992</option>
                            <option value="94">1993</option>
                            <option value="95">1994</option>
                            <option value="96">1995</option>
                            <option value="97">1996</option>
                            <option value="98">1997</option>
                            <option value="99">1998</option>
                            <option value="100">1999</option>
                            <option value="101">2000</option>
                            <option value="102">2001</option>
                            <option value="103">2002</option>
                            <option value="104">2003</option>
                            <option value="105">2004</option>
                            <option value="106">2005</option>
                            <option value="107">2006</option>
                            <option value="108">2007</option>
                            <option value="109">2008</option>
                            <option value="110">2009</option>
                            <option value="111">2010</option>
                            <option value="112">2011</option>
                            <option value="113">2012</option>
                            <option value="114">2013</option>
                            <option value="115">2014</option>
                            <option value="116">2015</option>
                            <option value="117">2016</option>
                            <option value="118">2017</option>
                            <option value="119">2018</option>
                            <option value="120">2019</option>
                            <option value="121">2020</option>
                            <option value="122">2021</option>
                            <option value="123">2022</option>
                            <option value="124">2023</option>
                            <option value="125">2024</option>
                            <option value="126">2025</option>
                          </select>
                        </div>
                      </div>
                      <div className="p-2">
                        <p style={{ marginLeft: "80px" }}>Gender</p>
                        <select className="form-select" aria-label="Default select example" required autoComplete='off' style={{ background: "transparent", width: "300px", marginLeft: "80px" }} >
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputname"
                          aria-describedby="nameHelp"
                          placeholder="Verification code from whatsapp"
                          required autoComplete='off'
                          style={{ background: 'transparent' }}
                        />
                      </div>
                      <div className="p-2">
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" for="exampleCheck1" required autoComplete='off'>I agree all terms ,rules and privacy of Bliss</label>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  style={{ width: '200px' }}
                >
                  Create
                </button>
              </div>

            </div>
          </div>
       
      </div>

      {/* Third Modal */}
      <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" tabIndex="-1" aria-labelledby="exampleModalToggleLabel3">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content container">
            <div className="modal-header">


            </div>
            <div className="modal-body">
              <div className="d-flex align-items-start">
                <div className="p-2">
                  <img src='/photo/9.gif' alt='' style={{ width: "400px", height: "400px" }} />
                </div>
                <div className="p-2 text-center fw-bolder fs-1 " style={{ marginTop: "100px" }}>
                  ThankYou For Begin A Member...
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ width: '200px' }}>Close</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}