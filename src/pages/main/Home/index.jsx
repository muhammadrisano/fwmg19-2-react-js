import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorker } from "../../../configs/redux/action/workerAction";

const Home = () => {
  const dispatch = useDispatch();
  const { workers, loading } = useSelector((state) => state.worker);

  useEffect(() => {
    dispatch(getWorker());
  }, []);
  return (
    <div>
      <h1 className="text-center text-lg">halaman home</h1>
      <div className="flex flex-wrap gap-3">
        {loading && <h2>Loading Worker</h2>}
        {workers.map((worker) => (
          <div className="border w-52 rounded-md p-4 m-2" key={worker.id}>
            <ul>
              <li>Name: {worker.name} </li>
              <li>Phone: {worker.phone} </li>
              <li>Domicile: {worker.domicile} </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
