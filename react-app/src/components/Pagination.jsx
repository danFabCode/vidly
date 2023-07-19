import React from 'react';
import propTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    const pageCount = Math.ceil(itemsCount/pageSize);
    if(pageCount===1) return null;
    const pages =_.range(1,pageCount+1);





    return ( 
        <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            {pages.map(page=>(
            <ul key={page}>
                <li onClick={()=>onPageChange(page)} className= {`${currentPage===page?'bg-blue-500 text-white hover:bg-blue-500':'hover:bg-gray-200'} cursor-pointer rounded relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex`}>{page}</li>
            </ul>
            ))}
           
        </div>
    
    )

}

Pagination.propTypes={
    itemsCount:propTypes.number.isRequired, pageSize:propTypes.number.isRequired, 
    currentPage:propTypes.number.isRequired, onPageChange:propTypes.func.isRequired
}
export default Pagination;