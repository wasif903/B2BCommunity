import styles from "./ManageDataStyles/ManageGroup.module.css";
import Header from "../../Components/Header";
import LadyPic from "../../assets/my_acc.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faCheckDouble,
  faEnvelope,
  faClipboardCheck,
  faCalendarDays,
  faStopwatch,
  faBook,
  faCircleExclamation,
  faGear,
  faBell,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useGetSingleGroupQuery } from "../../REDUX/Reducers/groups/GroupSlice";

function ManageGroup() {

  const { id } = useParams();

  const getSingleGroups = useGetSingleGroupQuery(id);



  console.log(id);

  return (
    <>
      <Header />

      <Row
        className={`${styles.Heading} d-flex justify-content-center align-items-center m-0`}
      >
        <p className="w-auto m-0 text-white">Manage Groups</p>
      </Row>
      <Container className={`${styles.CardContainer} mt-5 pt-2`}>
        <div className={`${styles.mapWrapper}`}>
          <div>
            <img
              className={styles.imgWrapper}
              src={
                getSingleGroups?.data?.groupdp !== null
                  ? getSingleGroups?.data?.groupdp
                  : LadyPic
              }
            />
          </div>
          <div className={`${styles.NewRequestNamePanel} text-center py-3`}>
            <h3>{getSingleGroups?.data?.groupName}</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <h5 className="m-0">
                {getSingleGroups?.data?.grouplocation !== null
                  ? getSingleGroups?.data?.grouplocation
                  : "Location Not Available"}
              </h5>
              <span></span>
              <h5 className="m-0">{`2054 Members`}</h5>
            </div>
          </div>
          <p className="w-auto">
            {getSingleGroups?.data?.groupType !== null
              ? getSingleGroups?.data?.groupType
              : "PUBLIC"}
          </p>
        </div>
      </Container>
      <div className={styles.line}></div>
      <Container className={` ${styles.LowerPartContainer} mt-5 pt-2 `}>
        <Link to="/home" className="text-decoration-none">
          <Row className={styles.LowerPartRow}>
            <div
              className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
            >
              <span className={styles.Options}>
                <FontAwesomeIcon
                  className={styles.Optionsicon}
                  icon={faHouse}
                />
              </span>
              <p className={`${styles.OptionName} w-auto m-0`}>Home</p>
            </div>
          </Row>
        </Link>
        <h1 className={styles.LowerPartHeading}>Admin tools</h1>

        <Link to={`/New-Request/${id}`}>
          <Row className={`${styles.LowerPartRow} my-4`}>
            <div
              className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
            >
              <span className={styles.Options}>
                <FontAwesomeIcon
                  className={styles.Optionsicon}
                  icon={faUserGroup}
                />
              </span>
              <p className={`${styles.OptionName} w-auto m-0`}>Member requests</p>
            </div>
          </Row>
        </Link>

        <Link to={`/All-Members/${id}`}>
          <Row className={`${styles.LowerPartRow} my-4`}>
            <div
              className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
            >
              <span className={styles.Options}>
                <FontAwesomeIcon
                  className={styles.Optionsicon}
                  icon={faCheckDouble}
                />
              </span>
              <p className={`${styles.OptionName} w-auto m-0`}>
                All Members
              </p>
            </div>
          </Row>
        </Link>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon
                className={styles.Optionsicon}
                icon={faEnvelope}
              />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Pending posts</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon
                className={styles.Optionsicon}
                icon={faClipboardCheck}
              />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Post topics</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon
                className={styles.Optionsicon}
                icon={faCalendarDays}
              />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Scheduled posts</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon
                className={styles.Optionsicon}
                icon={faStopwatch}
              />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Activity Log</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faBook} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Group rules</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon
                className={styles.Optionsicon}
                icon={faCircleExclamation}
              />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>
              Member-Reported Content Posts
            </p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faGear} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>Group Settings</p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faBell} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>
              Manage Membership
            </p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faImage} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>
              Check Group Photos
            </p>
          </div>
        </Row>
        <Row className={`${styles.LowerPartRow} my-4`}>
          <div
            className={`${styles.OptionWrapper} d-flex align-items-center gap-3`}
          >
            <span className={styles.Options}>
              <FontAwesomeIcon className={styles.Optionsicon} icon={faVideo} />
            </span>
            <p className={`${styles.OptionName} w-auto m-0`}>
              Check Group Videos
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ManageGroup;
