import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ManageProducts.css';
import PriceIcon from '../../assets/priceIcon.png';
import DeleteIcon from '../../assets/deleteIcon.png';
import EditIcon from '../../assets/editIcon.png';
import axios from 'axios';

const ManageProducts = (props) => {
    const { id } = useParams();
    
    useEffect(async () => {
        console.log('ok')
        await axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
            console.log(data.data)
            props.setAllProducts(data.data);
        });
    }, []);

    const deletePostHandler = (id) => {
        axios.delete('https://internship-slick-api.herokuapp.com/api/products?id=' + id).then(res => {
            axios.get('https://internship-slick-api.herokuapp.com/api/products').then(({ data }) => {
                console.log(data.data)
                props.setAllProducts(data.data);
            });
            console.log(res);
            alert('Product deleted.');
        });
    }

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
                    props.allProducts.map((product) => {
                        return (
                            <tr key={product._id}>
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
                                    <img src={DeleteIcon} onClick={() => deletePostHandler(product._id)} alt="" />
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