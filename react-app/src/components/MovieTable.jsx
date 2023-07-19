import React, {Component} from 'react';
import Liked from './Liked';
import TableHead from './tableHead';
import TableBody from './tableBody';

class MovieTable extends Component {

    columns=[
        {path:'title', label:'Title'},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rate'},
        {key :'like',
        content: movie=><Liked like={movie.liked} onClick={()=>this.props.onLike(movie)}/>
    },
        {key:'delete',
        content:movie=> <button onClick={()=>this.props.onDelete(movie._id)} className='bg-red-600 m-2 rounded p-2'>Delete</button>
    }
    ]
    
    sortRaise=(path)=>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path===path){
           sortColumn.order = (sortColumn.order==='asc')?'desc':'asc';
        }else{
           sortColumn.path=path;
           sortColumn.order = 'acs';
        }
        // this.setState({sortColumn:{path:path , order:'asc'}})
        console.log(path);
        this.props.onSort(sortColumn)
       }
  

    render() {  
    
    const {movies} = this.props;
    return ( 
        <div>
            <table className="divide-y divide-gray-200 mx-auto">
                <TableHead columns={this.columns} onRaise={this.sortRaise}/>
                <TableBody movies={movies} columns={this.columns}/>
            </table>
        </div>
     );
        
    }
}

export default MovieTable;


