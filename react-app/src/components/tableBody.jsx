import React, { Component } from 'react';
import _ from 'lodash';
class TableBody extends Component {

    renderCell=(movie, column)=>{
                if(column.content) return column.content(movie)

                return _.get(movie, column.path);
            }


    render() { 

      

        const {movies,columns} = this.props;
        return (
                <tbody>
                    {movies.map(movie=>(
                        <tr>
                            {columns.map(column=>(
                                <td className='py-2 px-4 border-b'>{this.renderCell(movie, column)}</td>
                            ))}
                            
                        </tr>
                    ))}
                    
                </tbody>
        );
    }
}
 
export default TableBody;