import axios from "axios";

// Create Product
export function Create(
  ProductName,
  ProductCode,
  Img,
  UnitPrice,
  Qty,
  TotalPrice
) {
  let URL = "/api/CreateProduct";
  const PostBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };
  return axios
    .post(URL, PostBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

// Read Product
export function Read() {
  let URL = "/api/SelectProduct";
  return axios
    .post(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

// Delete Product
export function Delete(id) {
  let URL = `/api/DeleteProduct/${id}`;
  return axios
    .post(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

// Update Product
export function Update(
    ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice
  ) {
    let URL = "/api/UpdateProduct";
    const PostBody = {
      ProductName: ProductName,
      ProductCode: ProductCode,
      Img: Img,
      UnitPrice: UnitPrice,
      Qty: Qty,
      TotalPrice: TotalPrice,
    };
    return axios
      .post(URL, PostBody)
      .then((res) => {
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
