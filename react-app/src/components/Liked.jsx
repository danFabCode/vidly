import React, { Component } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

class Liked extends Component {

    
           
    
 
    render() { 

         
        

        return (
           

            <div>
                {
                !this.props.like?
                (<FavoriteIcon style={{cursor:"pointer"}} onClick={this.props.onClick}/>)
                :(<FavoriteBorderIcon style={{cursor:"pointer"}} onClick={this.props.onClick}/>)
                }
            </div>
        );
    }
}
 
export default Liked;