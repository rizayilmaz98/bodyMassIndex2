import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBmi, removeStorage } from "../redux/result/resultSlice";
import styled from "styled-components";

function BMICalculate() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let copyHeight = Number(height) / 100;
    let result = Number(weight) / (copyHeight * copyHeight);
    result = result.toFixed(2);
    result = Number(result);
    if (height !== "" && height < 251 && weight !== "") {
      dispatch(changeBmi(result));
      navigate("/result", {
        replace: true,
      });
    } else {
      alert("Uygun Değer Giriniz !!!");
    }
  };

  const Button = styled.button`
    font-weight: bold;
    background-color: azure;
    color: #2e9da2;
    width: 100%;
    padding: 7px 0px;
    border: 1px gray solid;
    border-radius: 5px;
    &:hover {
      background-color: #2e9da2;
      color: azure;
    }
  `;

  return (
    <div className="container">
      <div className="row mt-5 pt-5 d-flex justify-content-center">
        <div className="col-12 col-md-6 border rounded-3 px-4 py-5">
          <form onSubmit={handleSubmit}>
            <h4 className="text-center colorInfo fw-bold">
              Vücut Kitle İndeksi Hesapla
            </h4>
            <input
              type="number"
              placeholder="Boyunuz"
              className="form-control w-100 mt-5 mb-3"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Kilonuz"
              className="form-control mb-3 w-100"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <br />
            <Button type="submit">Hesapla</Button>
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5 mb-5 pb-5">
        {history === null ? ("") : (
          <div className="col-12  col-lg-4 border-start border-end border-bottom pb-3">
            <p className="text-white w-100 text-center bg-danger">
              Geçmiş Hesaplamaların
            </p>
            <hr className="text-white" />
            <ul className="list-unstyled bg-white">
              {history.map((item, index) => {
                return (
                  <li key={index} className="px-5 border-bottom d-flex justify-content-between">
                    <span>{item.data}</span> <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="d-flex justify-content-center">
              <Button
                className="w-50 mt-3 fw-normal py-0"
                type=""
                onClick={() => {
                  dispatch(removeStorage());
                  setHistory(null);
                }}
              >
                Geçmişi Temizle
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculate;
