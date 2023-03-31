import React from "react";
import { useSelector } from "react-redux";
import {
  BsFillCheckCircleFill,
  BsFillExclamationCircleFill,
  BsFillReplyFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BMIResult() {
  const Button = styled.button`
    background-color: #2e9da2;
    font-weight: 650;
    padding: 15px 30px;
    color: white;
    margin-top: 100px;
    border: 0;
    border-radius: 5px;
    &:hover {
      background-color: #308387;
    }
  `;

  const result = useSelector((state) => state.result);

  return (
    <div className="container mb-5 pb-3">
      <div className="row d-flex justify-content-center pt-5 mt-2 text-white">
        <BsFillCheckCircleFill
          className={`text-success fsIcon ${
            result.resultText === "Normal" ? "" : "d-none"
          }`}
        />
        <BsFillExclamationCircleFill
          className={`text-danger fsIcon ${
            result.resultText === "Normal" ? "d-none" : ""
          }`}
        />
        <div
          className={`col-12 col-lg-6 mt-4 border rounded-3 ${
            result.resultText === "Normal" ? "bg-success" : "bg-danger"
          } `}
        >
          <p>
            <u className="fw-bold fs-5"> Vücut Kitle Endeksiniz :</u>
            <span className="fw-semibold fs-4 ms-2">{result.bmiResult}</span>
          </p>
          <p>
            <u className="fw-bold me-2 fs-5">Kilo Durumunuz :</u>
            <span className="fw-semibold fs-4 ms-2">{result.resultText}</span>
          </p>
          <p>
            <u className="fw-bold me-2 fs-5">Kilo Durumunuz Hakkında :</u>
            {result.adviceText}
          </p>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <Link to="/">
            <Button>
              <BsFillReplyFill className="pb-1 fs-4" />
              Anasayfa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BMIResult;
