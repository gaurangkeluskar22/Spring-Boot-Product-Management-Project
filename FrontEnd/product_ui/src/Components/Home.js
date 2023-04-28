import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../Services/ProductService";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setmsg] = useState("");
  
  useEffect(() => {
    init();
  }, []);

  const init=()=>{
    ProductService.getAllProduct()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => {
        if (res.status == 200) {
          setmsg("Product Deleted Successfully!");
            init();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product Details
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Description</th>
                      <th scope="col">Product Price</th>
                      <th scope="col">Product Availablility</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr key={num}>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.productDescription}</td>
                        <td>{p.productPrice}</td>
                        <td>{p.productStatus}</td>
                        <td>
                          <Link to="" className="btn btn-sm btn-primary mr-1">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
