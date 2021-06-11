import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ManageBanners.css';
import CopyIcon from '../../assets/copyIcon.png';
import DeleteIcon from '../../assets/deleteIcon.png';
import EditIcon from '../../assets/editIcon.png';
import axios from 'axios'

const ManageBanners = (props) => {
  const { id } = useParams();
  const [allBanners, setAllBanners] = useState([]);

  useEffect(async () => {
    console.log('ok')
    await axios.get('https://internship-slick-api.herokuapp.com/api/banners').then(({ data }) => {
      console.log(data.data)
      setAllBanners(data.data);

    });
  }, []);

  return (
    <div className="ManageBanners">
      {
        allBanners.map((banner) => {
          return (<div className="BannersListCollection">
            <div className="BannerImage">
              <img src={banner.link} alt="" />
            </div>

            <div className="BannerLinks">
              <li><img src={CopyIcon} alt="" />{banner.link}</li>
            </div>

            <div className="BannerBtn">
              <img src={EditIcon} alt="" />
              <img src={DeleteIcon} alt="" />
            </div>

          </div>)
        })
      }


    </div>
  );
}
export default ManageBanners;