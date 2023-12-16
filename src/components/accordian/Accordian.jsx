import React, { useState } from "react";

const Accordian = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="accordion" id="faqExample">
              <div className="card">
                <div className="accordian card-header p-2" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="button btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q: What is staff longevity like at Cantoment Primary School?
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b> Our goal has always been to find, hire and retain the finest educators possible. We take great pride in the fact that we have a veteran staff and there is very little turnover at Cantoment Primary School. We have a faculty and staff of 135 with 33 staff members that have been with us for over five years, 9 for over ten years, 16 over fifteen years, 6 over twenty years, and 5 over thirty years. In regard to administration, the school Director is in his 45th year at the school.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordian card-header p-2" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="button btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Q: Are your teachers licensed?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b>All of our teachers are licensed by the Nevada Department of Education and are required to take continuing education courses to maintain licensure. Our entire teaching staff has a minimum of a bachelor’s degree and approximately 66% of our teachers have master’s degrees.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordian card-header p-2" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="button btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Q. Does the school use standardized achievement testing?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b>LVDS uses the ERB achievement test annually to measure the skills and knowledge acquired at each respective grade level. Our students consistently average above the 85th percentile on national standardized achievement testing.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordian card-header p-2" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="button btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Q. Does the school have campus security?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b>We contract with a professional school security company and have two highly trained security guards on campus at all times that children are present. The campus points of entry are locked throughout the school day and we have buzzer entry requirements to each of the school offices. All staff members are well trained in our school security procedures and we also conduct lockdown drills monthly for staff and students.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="accordian card-header p-2" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="button btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Q. Does the school have a lunch program?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#faqExample"
                >
                  <div className="card-body">
                    <b>Answer:</b>The school offers a catered lunch program through our partnership with BetterLunch.   They use the freshest ingredients to make kid favorite foods as healthy as possible.   Parents can order lunches online by visiting mybetterlunch.com.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/row--> */}
      </div>
      {/* <!--container--> */}
    </>
  );
};

export default Accordian;
