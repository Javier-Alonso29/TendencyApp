import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { addProduct } from '../../actions/shoppingActions';

export const Controls = () => {

    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState({
        sku: '',
        name: '',
        quantity: '',
        price: ''
    })

    const handleChangesFromValues = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleSubmitProduct = (event) =>{
        event.preventDefault();

        const {sku, name, quantity, price} = {...formValues}

        if(!sku || !name  || !quantity || !price ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to complete all the fields',
            })

            return
        }

        const randomId = Math.random() + Date.now()

        const data = {
            id: randomId,
            number: randomId + Math.random(),
            items : [{id: randomId, ...formValues}]
        }

        dispatch(addProduct({...data}))

        setFormValues({
            sku: '',
            name: '',
            quantity: '',
            price: ''
        })
    }

    return (
        <div className="container border border-5 shadow-sm mt-5 mb-5 p-3">
            <form className="row">
                <div className="col-3">
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            className="form-control" 
                            autoComplete='off' 
                            placeholder="Sku" 
                            name="sku" 
                            value={formValues.sku}
                            onChange={handleChangesFromValues}
                        />
                    </div>
                </div>
                <div className='col-3'>
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            className="form-control" 
                            autoComplete='off' 
                            placeholder="Name" 
                            name="name" 
                            value={formValues.name}
                            onChange={handleChangesFromValues}
                        />
                    </div>
                </div>
                <div className='col-3'>
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            className="form-control" 
                            autoComplete='off' 
                            placeholder="Quantity" 
                            name="quantity" 
                            value={formValues.quantity}
                            onChange={handleChangesFromValues}
                        />
                    </div>
                </div>
                <div className='col-3'>
                    <div className='input-group mb-3'>
                        <input 
                            type="text" 
                            className="form-control" 
                            autoComplete='off' 
                            placeholder="Price" 
                            name="price" 
                            value={formValues.price}
                            onChange={handleChangesFromValues}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-sm" type="button" onClick={handleSubmitProduct}>Add product</button>
                </div>
            </form>
        </div>
    )
}
