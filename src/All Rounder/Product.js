import React, { Fragment, useState } from 'react';
import Products from '../JsonFile/Products.json';
import { Bannershopyourdream } from './Banner';

function Product() {
    const itemsPerPage = 16;
    const totalPages = Math.ceil(Products.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = Products.slice(startIndex, endIndex);;


    const nextPage = () => {
        if (endIndex < Products.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle previous page click
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle page number click
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Fragment>
            <Bannershopyourdream></Bannershopyourdream>
            <div className="container">
                <h1 className='rounded bg-secondary text-info text-center mt-4'>Our Product</h1>

                <div className="row">
                    {data.map((d, a = 1) => {
                        return (
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div class="card" style={{ width: "15rem", height: "22rem", margin: "30px" }}>
                                    <div className='card-body'>
                                        <h1>{d.id}</h1>
                                    </div>
                                    <img src={d.url} class="card-img-top" alt="product list" />
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="container text-center">
                    <button className='btn btn-primary m-1' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    {[...Array(totalPages).keys()].map((page) => (
                        <button className='btn btn-primary m-1' key={page} onClick={() => goToPage(page + 1)} disabled={currentPage === page + 1}>{page + 1}</button>
                    ))}
                    <button className='btn btn-primary m-1' onClick={nextPage} disabled={endIndex >= Products.length}>Next</button>

                </div>
            </div>

            {/* <div className="container">
                <div className="row">
                    {Products.map((p,a)=>{
                        return(
                           <div>{p.url}</div>
                        )
                    })}
                </div>
            </div> */}
        </Fragment>
    )
}

export default Product
