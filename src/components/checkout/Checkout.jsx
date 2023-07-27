import React from 'react';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, process payment, etc.)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout Page</h1>
      <form onSubmit={handleSubmit} className="border rounded-lg p-4">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="border rounded-lg p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="border rounded-lg p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="address">Shipping Address:</label>
          <textarea id="address" className="border rounded-lg p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" className="border rounded-lg p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" className="border rounded-lg p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" className="border rounded-lg p-2 w-full" required />
        </div>
        {/* Add more form fields as needed (e.g., billing address, additional items, etc.) */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </form>
      <div className="mt-8">
        {/* Display order summary here */}
        <h2 className="text-xl font-bold mb-2">Order Summary</h2>
        <div className="border rounded-lg p-4">
          {/* Display items, quantities, and prices */}
          <div className="flex justify-between items-center mb-2">
            <span>Product 1</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Product 2</span>
            <span>$15.00</span>
          </div>
          {/* Add more items here */}
          <hr className="my-2" />
          {/* Display total price */}
          <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">$25.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
