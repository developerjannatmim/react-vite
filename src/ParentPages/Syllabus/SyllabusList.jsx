import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer';
import Swal from 'sweetalert2';

import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import ParentHeader from '../../components/ParentHeader';

const SyllabusList = () => {
  const [syllabusList, setSyllabusList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/syllabuses?', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSyllabusList(response.data?.syllabuses);
      })
      .catch((error) => {
        console.error(error);
        setSyllabusList(null);
        setLoading(false);
      });
  }, [loading]);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = syllabusList?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(syllabusList?.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #3</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div>
        <ParentHeader />
      </div>
      <div className="d-flex">
        <div className="w-auto position-sticky">
          <Sidebar />
        </div>
        <div className="d-flex align-items-center">
          <div className="container px-4">
            <div className="card">
              <div className="card-header">
                <h4>Syllabus List</h4>
              </div>
              <div className="page-system mt-4">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={prePage}>
                        Prev
                      </a>
                    </li>
                    {numbers.map((n, i) => {
                      return (
                        <li
                          className={`page-item ${
                            currentPage === n ? 'active' : ''
                          }`}
                          key={i}
                        >
                          <a
                            href="#"
                            className="page-link"
                            onClick={() => changeCurrentPage(n)}
                          >
                            {n}
                          </a>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={nextPage}>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Syllabus</th>
                      <th scope="col">Class Name</th>
                      <th scope="col">Section Name</th>
                      <th scope="col">Subject Name</th>
                      <th scope="col">PDF</th>
                      <th scope="col">Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((syllabus) => {
                      return (
                        <tr key={syllabus?.id}>
                          <td>{syllabus?.id}</td>
                          <td>{syllabus?.title}</td>
                          <td>{syllabus.class?.name}</td>
                          <td>{syllabus.section?.name}</td>
                          <td>{syllabus.subject?.name}</td>
                          {/* <td><img src={`http://127.0.0.1:8000/syllabus-images/${syllabus?.file}`} width='40'/></td> */}
                          <td>
                            <div className="App">
                              <PDFDownloadLink
                                document={<MyDoc />}
                                fileName="syllabus.pdf"
                              >
                                {({ blob, url, loading, error }) =>
                                  loading ? 'Loading document...' : 'Download!'
                                }
                              </PDFDownloadLink>
                            </div>
                          </td>
                          <td>
                            <Link
                              to={`/parent/syllabuses/${syllabus.id}/show`}
                              className="btn btn-primary btn-sm"
                            >
                              Show
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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

  function prePage(e) {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  function nextPage(e) {
    if (currentPage !== npage) {
      e.preventDefault();
      setCurrentPage(currentPage + 1);
    }
  }
};

export default SyllabusList;
