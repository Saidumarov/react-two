import { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { SaveButton } from "../styledComponent";
import axios from "axios";
import { toast } from "react-toastify";

function Edit() {
  const navegate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    name: "",
    group: "",
    sur: "",
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3000/data/${id}`)
        .then((res) => {
          const user = res.data;
          setUser({
            id: user.id,
            name: user.name,
            group: user.group,
            sur: user.sur,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id]);

  const editAdd = () => {
    navegate("/");
    axios
      .put(`http://localhost:3000/data/${id}`, user)
      .then((res) => {
        toast.success("Edit Student Success ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      <div className="container">
        <div className="add">
          <div className="form">
            <label htmlFor="name">Firstname</label>
            <input
              type="name"
              onChange={handelChange}
              placeholder="Firstname"
              id="name"
              name="name"
              value={user.name}
            />
          </div>
          <div className="form">
            <label htmlFor="sur">Surname</label>
            <input
              onChange={handelChange}
              type="username"
              placeholder="Surname"
              id="sur"
              name="sur"
              value={user.sur}
            />
          </div>
          <div className="form">
            <select name="group" value={user.group} onChange={handelChange}>
              <option value="all">Group</option>
              <option value="N45">N45</option>
              <option value="N44">N44</option>
            </select>
          </div>
        </div>
        <SaveButton
          onClick={editAdd}
          disabled={!user.name || !user.group || !user.sur}
        >
          Save
        </SaveButton>
        <SaveButton onClick={() => navegate("/")} style={{ opacity: "0.7" }}>
          Close
        </SaveButton>
      </div>
    </>
  );
}

export default Edit;
