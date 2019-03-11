import React, { Component } from 'react';
import SearchBox from '../common/SearchBox';
class Gallery extends Component {
    render(){
       return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SearchBox/>
                </div>
            </div>
        </div>
        
       )
    }
}
export default Gallery;