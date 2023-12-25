import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from './../../components/AdminSidebar';
import pdf from './../../assets/pdf/School_Events.pdf';

const ShowEvent = () => {
  const [eventItem, setEventItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/event/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setEventItem(response.data?.event);
      })
      .catch((error) => {
        console.error(error);
        setEventItem(null);
      });
  }, [id]);

  const onButtonClick = () => {
    window.open(pdf);
  };

  const onDownloadButtonClick = () => {
    const pdfUrl =
      'http://localhost:5173/src/assets/pdf/Secondary-Physics-Book.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Book.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <AdminSidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="mt-5 container" style={{ marginLeft: '300px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Event Details</h4>
                <Link
                  to="/admin/event"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Event List
                </Link>
              </div>
              <div class="col-md-8 p-4">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Event Id</strong>
                        <p>{eventItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Event Title</strong>
                        <p>{eventItem?.title}</p>
                      </li>
                      <li className="element-list">
                        <strong>Date</strong>
                        <p>{eventItem?.date}</p>
                      </li>
                      <li className="element-list">
                        <strong>Status</strong>
                        <p>{eventItem?.status}</p>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6 mb-2">
                          <label>Events PDF</label>
                        </div>
                        <div className="App">
                          <button
                            className="btn btn-info btn-sm"
                            onClick={onButtonClick}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={onDownloadButtonClick}
                            style={{ marginLeft: '5px' }}
                          >
                            Download
                          </button>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ShowEvent;
