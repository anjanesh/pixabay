import React from 'react';
import axios from 'axios';
import config from '../config';

class Images extends React.Component
{    
    q = "cars"
    data_images = undefined;

    constructor(props)
    {
        super(props);        
        this.data_images = { hits: [] };

        const { key } = config();
        this.key = key;
    }
    
    componentDidMount()
    {
        this.getImages();
    }
    
    getImages()
    {

        let url = `https://pixabay.com/api/?key=${this.key}&q=${this.q}&image_type=photo&pretty=true`;
        axios.get(url)
        .then(response =>
            {
                this.data_images = response.data;
            });
        
    }
    
    getImagesWithTags()
    {
        if (this.data_images.length === 0) return;        
        
        return this.data_images.hits.map((image) =>
        {
            if (image.tags.includes(this.props.tags))
                return (
                <div key={`${image.id}`} style={{"border":"1px solid red", "marginTop":"10px"}}>
                    <img src={`${image.previewURL}`} alt={`${image.tags}`}/>
                </div>
                );
            else 
             return ""
        });
    }
    
    render()
    {
        return(
            <div>
                <h2>Images</h2>
                Image tagged : {this.props.tags}<br/>
                {this.getImagesWithTags()}
            </div>
        );        
    }
}

export default Images;