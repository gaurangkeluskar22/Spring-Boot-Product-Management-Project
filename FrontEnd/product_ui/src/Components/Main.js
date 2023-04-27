import {useState,useEffect} from 'react';
import ProductService from '../Services/ProductService';

function Main() {
    
    const [msg,setmsg]=useState({});
    const [product,setProduct] = useState({
        productName:"",
        productDescription:"",
        productPrice:"",
        productStatus:"",
    });

    const handleChange=(e)=>{
        const value = e.target.value;
        setProduct({...product,[e.target.name]:value});
    }
    
    const ProductRegister=(e)=>{
        e.preventDefault();
        ProductService.saveProduct(product).then((res)=>{console.log("Product Added Sucessfully");
         setmsg("Product Added Sucessfully");
     }).catch((error)=>{
        console.log(`Error in post request${error}`);
    });
    }

  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Add Product</div>
                        <div className="card-body">
                            <form>
                                    
                                    <p className='fs-4 text-center text-success'>{msg}</p>
                                    
                                
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input type="text" name="productName" className="form-control" onChange={(e)=>handleChange(e)}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Description</label>
                                    <input type="text" name="productDescription" className="form-control" onChange={(e)=>handleChange(e)}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Price</label>
                                    <input type="text" name="productPrice" className="form-control" onChange={(e)=>handleChange(e)}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Status</label>
                                    <input type="text" name="productStatus" className="form-control" onChange={(e)=>handleChange(e)}></input>
                                </div>
                                <div className="btn btn-primary col-md-12" onClick={(e)=>ProductRegister(e)}>Submit</div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default Main;
