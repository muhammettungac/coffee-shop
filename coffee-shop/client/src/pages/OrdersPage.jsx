import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrdersAction } from "../actions/OrderActions";

function OrdersPage() {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getUserOrdersReducer);

  const { orders } = orderState;

  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrdersAction());
  }, []);

  return (
    <div>
      <h2 className="display-2 text-success">Siparişlerim</h2>
      <hr className="border border-success" />
      {orders.map((order) => (
        <div
          className="row border border-3 border-success shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-light text-success w-100"
          key={order._id}
        >
          <div className="col-md-4">
            {order.orderItems.map((item) => (
              <div
                className="border border-1 border-success my-2"
                key={item._id}
              >
                <p className="text-black">
                  {item.title} [{item.ozellik}] * {item.miktar} = {item.prices}{" "}
                  ₺
                </p>
                <img
                  src={item.picture}
                  className="img-fluid"
                  style={{ height: "100px" }}
                  alt=""
                />
                <h6 className="text-black">Kategori: {item.subType}</h6>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="col-md-4 my-auto mx-auto ps-5 text-black text-start">
            <h4 className="text-success">Adres Bilgileri</h4>
            <p>Sokak: {order.shippingAddress.street}</p>
            <p>Şehir: {order.shippingAddress.city}</p>
            <p>Ülke: {order.shippingAddress.country}</p>
            <p>Posta Kodu: {order.shippingAddress.zipCode}</p>
          </div>
          <div className="col-md-4 my-auto mx-auto text-black ">
            <h4 className="text-success text-start">Sipariş Bilgileri</h4>
            <div className="text-start">
              <p>Sipariş Tutarı: {order.orderAmount} ₺ </p>
              <p>Tarih: {order.createdAt.substring(0, 10)} </p>
              <p>İşlem No: {order.transactionId} </p>
              <p>Sipariş No: {order._id} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default OrdersPage;
