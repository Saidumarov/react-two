import { useEffect, useState } from "react";
import Edit, { Delete } from "../../constants";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../filter/index.scss";
import axios from "axios";
function Tabel() {
  const navegate = useNavigate();
  const [data, setData] = useState();

  const fetchData = () => {
    axios.get("http://localhost:3000/data").then((res) => {
      const data = res.data;
      setData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setGrup(event.target.value);
    let value = event.target.value;
    let person = JSON.parse(localStorage.getItem("user")) || [];
    let newperson = person?.filter((el) => {
      return value === "all" ? el : el?.grup === value;
    });
    setData(newperson);
  };

  const deleteAdd = (id) => {
    if (window.confirm("Delete Contact")) {
      axios
        .delete(`http://localhost:3000/data/${id}`)
        .then((res) => {
          toast.success("Delete Student Success ");
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const edit = (id) => {
    navegate(`/edit/${id}`);
  };

  const search = (value) => {
    let v = value.toLowerCase();
    let person = JSON.parse(localStorage.getItem("user")) || [];
    let search = person?.filter((el) => {
      return (
        el?.name?.toLowerCase().includes(v) ||
        el?.sur?.toLowerCase().includes(v) ||
        el?.grup?.toLowerCase().includes(v)
      );
    });
    setData(search);
  };

  return (
    <>
      <div className="container">
        <div className="filter">
          <div className="input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <div className="filter_item">
            <select>
              <option value="all">Group</option>
              <option value="n45">N45</option>
              <option value="n44">N44</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tabel">
          <div className="tr">
            <p>#</p>
            <p>First</p>
            <p>Last</p>
            <p>Gender</p>
            <p>Action</p>
          </div>
          {data && data
            ? data?.map((el, index) => (
                <div className="tr1" key={index}>
                  <p>{index + 1}</p>
                  <p>{el?.name}</p>
                  <p>{el?.sur}</p>
                  <p> {el?.group} </p>
                  <p>
                    <button className="edit" onClick={() => edit(el?.id)}>
                      <Edit />
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteAdd(el?.id)}
                    >
                      <Delete />
                    </button>
                  </p>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default Tabel;
