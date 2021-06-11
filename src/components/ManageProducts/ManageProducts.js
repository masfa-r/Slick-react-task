import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ManageProducts.css';
import PriceIcon from '../../assets/priceIcon.png';
import DeleteIcon from '../../assets/deleteIcon.png';
import EditIcon from '../../assets/editIcon.png';
import axios from 'axios';

const ManageProducts = () => {
    const { id } = useParams();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(async () => {
        console.log('ok')
        await axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
            console.log(data.data)
            setAllProducts(data.data);

        });
    }, []);

    return (
        <div className="ManageProducts">
            <table>
                <tr>
                    <th></th>
                    <th>category</th>
                    <th>product</th>
                    <th>price</th>
                    <th></th>
                </tr>
                {

                allProducts.map((product) => {
                        return (
                            <tr>
                                <td>
                                    <img className="productImage" src={product.image} alt=""></img>
                                </td>
                                <td>
                                    <span>{product.category.name}</span>
                                </td>
                                <td>{product.name}</td>
                                <td className="price-col">
                                    <img src={PriceIcon} alt="" />
                                    <span>{product.price}</span>
                                </td>
                                <td className="del-edit">
                                    <img src={EditIcon} alt="" />
                                    <img src={DeleteIcon} alt="" />
                                </td>
                            </tr>
                 );
            })
                }

            </table>


            {/* <Modal/> */}
        </div>
    );
}
export default ManageProducts;