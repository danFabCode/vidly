import React, { Component } from 'react'

class TableHead extends Component {

    render() { 
        const {onRaise} = this.props;
        return (
            <>

            <thead className='bg-gray-200'>
                <tr className=''>
                    {this.props.columns.map(column=>(
                     <th onClick={()=>onRaise(column.path)}  className='cursor-pointer py-2 px-6 bg-gray-200 border-b'>{column.label}</th>
                    ))}
                      
                </tr>
            </thead>    
            </>
           
        );
    }
}
 
export default TableHead;