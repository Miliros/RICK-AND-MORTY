import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../redux/action";

export default function Detail() {
  const dispatch = useDispatch();
  const stateDetail = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        {Object.entries(stateDetail).length !== 0 ? (
          <div>
            <h4>Name: {stateDetail.name}</h4>
            <h4>Status: {stateDetail.status}</h4>
            <h4> Gender: {stateDetail.gender}.</h4>
            <h4>Specie: {stateDetail.species}</h4>
            <h4>Origin: {stateDetail.origin.name}</h4>
            <img src={stateDetail.image} alt="imagen"></img>
          </div>
        ) : (
          "LOADINGGGGG"
        )}
      </div>
    </>
  );
}
