import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getListProduct } from '../../actions/shoppingActions';
import { Product } from '../product/Product';

export const ProductsTable = () => {

  const {products, product} = useSelector(state => state.shopping)

  const dispatch = useDispatch();

  useEffect(() => {

    //* Get the list of products from the server 
    dispatch(getListProduct())

  }, [])

  const handleConfirmPurchase = () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your purchase has been confirmed successfully',
      showConfirmButton: false,
      timer: 2500
    })
  }


  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>

          <div className="card">
            <div className="card-header pt-3">
              <h1>Tendencys</h1>
              <span className="badge bg-primary">Product list</span>
            </div>
            <div className="card-body">
              
              <table className='table table-hover text-center'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sku</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      products.map((product, index) => <Product key={product.id} data={product} index={index}/>)
                    }
                </tbody>
              </table>

            </div>
            <div className="card-footer">
              
              {
                product && (
                  <div className="card m-3">

                    <div className="card-header bg-dark text-light">Product details</div>
                    <div className="card-body">

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Order number: <span className="badge bg-primary">{product.number}</span></li>
                        <li className="list-group-item">Sku: <span className="badge bg-primary">{product.items[0].sku}</span></li>
                        <li className="list-group-item">Name: <span className="badge bg-primary">{product.items[0].name}</span></li>
                        <li className="list-group-item">Quantity: <span className="badge bg-primary">{product.items[0].quantity}</span></li>
                        <li className="list-group-item">Quantity: <span className="badge bg-primary">{product.items[0].quantity}</span></li>
                      </ul>

                    </div>
                  </div>
                )
              }

              <div className="d-grid gap-2">
                    <button className="btn btn-success " type="button" onClick={handleConfirmPurchase}>
                      Confirm purchase <i className="fa-solid fa-circle-check ms-1"></i>
                    </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
