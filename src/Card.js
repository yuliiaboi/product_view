import React from 'react';
import './Card.css';

class Card extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        rating: '',
        quantity: '',
        price: ''
    };
}

handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    if (!Number(val)) {
    alert("It must be a number");
    } 
    if (nam === "rating") {
      if (val < 1 || val > 5) {
          alert("Please rate fron 1 to 5!");
      }
    } 
    this.setState({[nam]: val});
  }

render() {
    return (
        <div className="container">
        <div className="form_wrapper">
      <form>
      <p>Rate the product from 1 to 5:</p>
      <input
        type='text'
        name="rating" 
        onChange={this.handleChange}
        placeholder='Raiting'
      />
      </form>
      <form>
      <p>Enter price:</p>
      <input
        type='text'
        name="price"
        onChange={this.handleChange}
        placeholder='Price'
      />
      </form>
      <form>
      <p>Enter quantity:</p>
      <input
        type='text'
        name="quantity"
        onChange={this.handleChange}
        placeholder='Quantity'
      />
      </form>
      </div>
      <div className="card-wrapper">
      <div className="card">
      <p className="text">My awesome product</p>
      <img src="https://www.freecatphotoapp.com/your-image.jpg" alt="" id="placeholder-image"></img>
      <p className="text">ID</p>
      <input type="text" id="id" value="1" className="input" disabled /><br></br>
      <p className="text">Price</p>
      <input type="text" id="price" value={this.state.price} className="input" disabled /><br></br>
      <p className="text">Quantity</p>
      <input type="text" id="quantity"  value={this.state.quantity} className="input" disabled /><br></br>
      <p className="text">Raiting</p>
      <input type="text" id="value" value={this.state.rating} className="input" disabled /><br></br>
      </div>
      </div>
      </div>
    );
  }
}

export default Card;