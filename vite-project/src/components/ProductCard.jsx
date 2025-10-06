
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { addToCart } from '../features/cartSlice';


const ProductCard = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedItems((prev) => [...prev, item.id]);

    // Reset "Added" state after 1 second
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id));
    }, 1000);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <MDBCard className="product-card">
              <div className="img-container">
                <MDBCardImage
                  src={item.img}
                  className="product-img"
                  alt={item.name}
                />
                <span className="product-tag">New</span>
              </div>
              <MDBCardBody>
                <MDBCardTitle className="fw-bold">{item.name}</MDBCardTitle>
                <MDBCardText className="text-muted">
                  <i className="bi bi-currency-rupee"></i>{item.price}
                </MDBCardText>
                <MDBBtn
                  className="add-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  {addedItems.includes(item.id) ? '✔ Added' : 'Add to Cart'}
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
