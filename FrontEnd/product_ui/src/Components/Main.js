

function Main() {
  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Add Product
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input type="text" name="productName" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Description</label>
                                    <input type="text" name="productDescription" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Price</label>
                                    <input type="text" name="productPrice" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label>Enter Product Status</label>
                                    <input type="text" name="productStatus" className="form-control"></input>
                                </div>
                                <div className="btn btn-primary col-md-12">Submit</div>
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
