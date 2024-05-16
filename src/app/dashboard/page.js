import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '@/pages/sidebar/Sidebar';
import Navbar from '@/pages/navbar/Navbar';
import Card from '@/pages/card/Card';



export default function Dashboard() {
       return (
        <div className='tailwind'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md col-lg-2">
                        <Sidebar/>
                    </div>
                    <div className="col-12 col-md-12 col-lg-10">
                        <Navbar/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
  )
}




