import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Redux/Cartslice'; // Import the clearCart action
import '../styles/checkoutPage.css';

const CheckoutPage = () => {
  const { handleSubmit, reset, register, formState: { errors } } = useForm();  // Destructure 'register', 'reset', and 'errors' from useForm
  const cart = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const onSubmit = (data) => {
    alert("Order submitted");
    dispatch(clearCart()); // Clear the cart after submission
    reset();  // Reset the form fields after submission
  };

  return (
    <div className='content'>
      <form onSubmit={handleSubmit(onSubmit)} className='checkout-form'>
        <h1>Checkout</h1>

        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder='Enter your name'
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,  // Regex to allow only alphabets and spaces
                message: "Name should only contain letters and spaces"
              }
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder='Enter your address'
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters long"
              }
            })}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <div>
          <label>Payment</label>
          <select
            {...register("payment", { required: "Please select a payment method" })}
          >
            <option value="">Select payment method</option>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="upi">Credit Card</option>
            <option value="upi">Debit Card</option>
          </select>
          {errors.payment && <p className="error">{errors.payment.message}</p>}
        </div>

        <h3>Total Price: ${totalPrice}</h3>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
