import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from './../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import pdf from './../../assets/pdf/notice.pdf';

import '../../assets/css/new.css';
import AdminSidebar from './../../components/AdminSidebar';

const ShowNotice = () => {
  const [noticeItem, setNoticeItem] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/notice/${id}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setNoticeItem(response.data?.notice);
      })
      .catch((error) => {
        console.error(error);
        setNoticeItem(null);
      });
  }, [id]);

  const onButtonClick = () => {
    window.open(pdf);
  };

  const onDownloadButtonClick = () => {
    const pdfUrl =
      'http://localhost:5173/src/assets/pdf/notice.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'notice.pdf'; // specify the filename
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
          <div className="mt-5 container" style={{ marginLeft: '320px' }}>
            <div className="card">
              <div className="card-header">
                <h4>Notice Details</h4>
                <Link
                  to="/admin/notice"
                  className="btn btn-primary btn-sm float-end"
                  style={{ marginTop: '-30px', marginLeft: '720px' }}
                >
                  Notice List
                </Link>
              </div>
              <div className="col-md-8 p-4">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div>
                    <ol className="alternating-colors">
                      <li className="element-list">
                        <strong>Id</strong>
                        <p>{noticeItem?.id}</p>
                      </li>
                      <li className="element-list">
                        <strong>Publish Date</strong>
                        <p>{noticeItem?.publish_date}</p>
                      </li>
                      <li className="element-list">
                        <strong>Subject</strong>
                        <p>{noticeItem?.subject}</p>
                      </li>
                      <li class="element-list">
                        <div class="col-md-6">
                          <label>PDF</label>
                        </div>
                        <div className="App">
                          <button
                            className="btn btn-info btn-sm"
                            onClick={onButtonClick}
                            style={{ marginLeft: '5px' }}
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

export default ShowNotice;
