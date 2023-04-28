import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
            <h3>Product Management</h3>
            <Link to="/" className="m-2">Home</Link>
            <Link to="/addProduct" className="m-2">Add Product</Link>
            <Link to="/editProduct" className="m-2">Edit Product</Link>
            
        </div>
    );
    
}

export default Header;