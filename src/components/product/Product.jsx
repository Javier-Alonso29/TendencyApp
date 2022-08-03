import React from 'react'
import { useDispatch } from 'react-redux';
import { activeProduct } from '../../actions/shoppingActions';

export const Product = ({data, index}) => {

  const dispatch = useDispatch();

  const {items} = data;

  const handleClickProduct = () => {
    
    dispatch(activeProduct(data))

  }

  return (
    <>
      {
        items.map((item) => (
          <tr key={item.id} onClick={handleClickProduct}>
            <th scope="row">{index + 1}</th>
            <td>{item.sku}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))
      }
    </>
  )
}
