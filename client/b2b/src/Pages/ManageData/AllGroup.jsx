import styles from "./ManageDataStyles/AllGroup.module.css";
import Header from "../../Components/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetAllGroupsQuery,
  useRequestToJoinMutation,
} from "../../REDUX/Reducers/groups/GroupSlice";

function AllGroup() {
  const navigate = useNavigate();

  const allGroups = useGetAllGroupsQuery();

  const [requestToJoin, { isLoading, isError }] = useRequestToJoinMutation();

  const user = JSON.parse(localStorage.getItem("user"));

  const requestToJoinHandler = async (id) => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      console.log(user.email, "-------------api----");
      const res = await requestToJoin({id, email: user.email });
      console.log(res, id);
      alert("Request has been sent now for the approval from the Wholeseller");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div>
        <Row
          className={`${styles.Heading} d-flex justify-content-center align-items-center m-0`}
        >
          <p className="w-auto m-0 text-white">All Groups</p>
        </Row>
        <Container className="py-5">
          <Row>
            {user.role[0] === "User"
              ? allGroups?.data?.findGroups?.map((item, index) => {
                  return (
                    <Col lg="3" md="6" sm="6" key={index + 1}>
                      <div className={`${styles.mapWrapper}`} key={index + 1}>
                        <div>
                          <img
                            className={styles.imgWrapper}
                            src={item.groupdp}
                            key={index + 1}
                            alt={index + 1}
                          />
                        </div>
                        <div
                          className={`${styles.NewRequestNamePanel} text-center py-3`}
                        >
                          <h3 key={index}>{item.groupName}</h3>
                          <h5 className="py-2">{`${
                            item.groupDesc ? null : "No Description"
                          }`}</h5>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <h5 id="city" className="m-0">
                              {item.city}
                            </h5>
                            <span></span>
                            <h5 className="m-0">{`${item.members} Members`}</h5>
                            <span></span>
                            <h5 className="m-0">{`${
                              item.groupType ? null : "Public"
                            }`}</h5>
                          </div>
                        </div>
                        <div className="w-75">
                          <button
                            onClick={() => requestToJoinHandler(item._id)}
                            className={`my-2 w-100 ${styles.buttons}`}
                          >
                            JOIN +
                          </button>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : user.role[0] === "Admin"
              ? allGroups?.data?.findGroups?.map((item, index) => {
                  return (
                    <Col lg="3" md="6" sm="6" key={index + 1}>
                      <div className={`${styles.mapWrapper}`} key={index + 1}>
                        <div>
                          <img
                            className={styles.imgWrapper}
                            src={item.groupdp}
                            key={index + 1}
                            alt={index + 1}
                          />
                        </div>
                        <div
                          className={`${styles.NewRequestNamePanel} text-center py-3`}
                        >
                          <h3 key={index}>{item.groupName}</h3>
                          <h5 className="py-2">{`${
                            item.groupDesc ? null : "No Description"
                          }`}</h5>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <h5 id="city" className="m-0">
                              {item.city}
                            </h5>
                            <span></span>
                            <h5 className="m-0">{`${item.members} Members`}</h5>
                            <span></span>
                            <h5 className="m-0">{`${
                              item.groupType ? null : "Public"
                            }`}</h5>
                          </div>
                        </div>
                        <div className="w-75">
                          <button
                            onClick={() =>
                              navigate(`/Manage-Group/${item._id}`)
                            }
                            className={`my-2 w-100 ${styles.buttons}`}
                          >
                            Manage
                          </button>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AllGroup;
