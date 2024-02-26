import React, { useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllChars, getAllEpisodes, removeState } from "../../redux/action";
import logo from "../../../src/logo r&m.png";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

export default function Nav(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const { logout, user } = useAuth0();
  console.log(user);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div className={styles.cntNav}>
      {location.pathname !== "/" && (
        <div className={styles.navBar}>
          <div className={styles.divLinks}>
            <img className={styles.logo} src={logo} alt="" />

            <Link
              className={styles.links}
              to="/home"
              onClick={() => dispatch(getAllChars())}
            >
              <p className={styles.p}>Home</p>
            </Link>

            <Link className={styles.links} to="/episodes">
              <p className={styles.p}>Episodes</p>
            </Link>
            <Link className={styles.links} to="/favorites">
              <p className={styles.p}>Favorites</p>
            </Link>
          </div>
          <div className={styles.searchBar}>
            {" "}
            <SearchBar />
          </div>

          <div ref={ref}>
            <img
              src={user?.picture}
              className={styles.imgAvatar}
              onClick={handleClick}
            />

            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Header as="h3">{user?.name}</Popover.Header>
                <Popover.Body>
                  <div
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className={styles.item}
                  >
                    Cerrar sesion
                  </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
        </div>
      )}
    </div>
  );
}
