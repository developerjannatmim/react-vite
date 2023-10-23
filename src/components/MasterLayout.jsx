import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MasterLayout = () => {
    return (
        <div className='sb-nav-fixed'>
            <Header/>
            <div id='layoutSidenav'>
                <div id='layoutSidenav_nav'>
                    <Sidebar/>
                </div>
                <div id='layoutSidenav_content'>
                    <main className=''>
                        Master Layout
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;