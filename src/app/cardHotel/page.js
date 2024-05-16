import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '@/pages/sidebar/Sidebar';
import Hotel from '@/pages/hotel/Hotel';
import Navbar2 from '@/pages/navbar2/Navbar2';



export default function cardHotel() {
       return (
        <div className='tailwind'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 col-lg-2 col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-10 col-lg-10 col-md-9">
                        <Navbar2/>
                        <Hotel/>
                    </div>
                </div>
            </div>
        </div>
  )
}




