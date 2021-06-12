import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ManageBanners.css';
import CopyIcon from '../../assets/copyIcon.png';
import DeleteIcon from '../../assets/deleteIcon.png';
import EditIcon from '../../assets/editIcon.png';
import axios from 'axios'

const ManageBanners = (props) => {
  const { id } = useParams();
  

  useEffect(async () => {
    console.log('ok')
    await axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
      console.log(data.data)
      props.setAllBanners(data.data);
      

    });
  }, []);

  const deletePostHandler = (id) => {
    axios.delete('https://internship-slick-api.herokuapp.com/api/banners?id=' + id).then(res =>{

      axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
        console.log(data.data)
        props.setAllBanners(data.data);})
        console.log(res);   
        alert('Banner deleted.');
    });

}

  return (
    <div className="ManageBanners">
      {
        props.allBanners.map((banner) => {
          return (<div className="BannersListCollection" key={banner._id}>
            <div className="BannerImage">
              <img src={banner.link} alt="" />
            </div>

            <div className="BannerLinks">
              <li><img src={CopyIcon} alt="" />{banner.link}</li>
            </div>

            <div className="BannerBtn">
              <img src={EditIcon} alt="" />
              <img src={DeleteIcon} onClick={() => deletePostHandler(banner._id)} alt="" />
            </div>

          </div>)
        })
      }


    </div>
  );
}
export default ManageBanners;