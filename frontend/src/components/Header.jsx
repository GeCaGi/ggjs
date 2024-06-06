import { Icon } from "design-react-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCookie,
  deleteCookie,
  validateCookies,
  getInfoFromCookies,
  setSessionCookies
} from '../utils/cookieUtils';

export default function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") return;
    const userInfo = getInfoFromCookies();
    if (!userInfo) {
      deleteCookie("username");
      navigate("/login");
    } else {
      setUsername(userInfo.username);
      setSessionCookies(userInfo.username);
    }
  }, [navigate]);

  return (
    <div className="it-header-wrapper">
      <div className="it-nav-wrapper">
        <div className="it-header-center-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-header-center-content-wrapper">
                  <div className="it-brand-wrapper">
                    <a href="#">
                      <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.0" height="341.000000pt" viewBox="0 0 543.000000 341.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,341.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
                          <path d="M1250 3160 c-54 -5 -131 -23 -209 -49 -122 -41 -327 -135 -366 -170 -11 -9 -31 -24 -45 -33 -34 -22 -243 -197 -252 -212 -3 -6 54 -71 136 -154 l143 -143 64 60 c220 205 457 301 742 301 192 0 417 -65 560 -163 122 -82 301 -280 345 -379 12 -29 32 -38 32 -15 1 6 9 30 20 52 11 22 19 46 20 53 0 20 92 200 136 267 9 13 13 32 10 42 -8 24 -155 176 -231 239 -84 69 -134 103 -211 142 -11 5 -32 16 -49 25 -53 27 -192 78 -297 108 -94 27 -120 30 -283 34 -99 2 -218 0 -265 -5z" />
                          <path d="M3760 3160 c-47 -4 -114 -17 -150 -28 -36 -11 -78 -23 -95 -27 -30 -6 -216 -87 -286 -123 -172 -89 -431 -343 -536 -526 -24 -44 -92 -183 -111 -231 -37 -92 -62 -242 -72 -430 -16 -304 -72 -493 -203 -680 -100 -143 -245 -266 -407 -346 -203 -101 -533 -118 -783 -40 -70 21 -141 56 -227 110 -59 37 -260 234 -298 291 -56 86 -68 108 -89 160 -12 30 -33 92 -47 138 l-24 82 201 0 c111 0 423 1 692 3 l490 2 3 208 2 207 -900 0 -900 0 1 -227 c0 -219 1 -232 29 -333 38 -143 59 -199 115 -310 85 -169 241 -355 405 -484 61 -48 86 -65 187 -129 71 -45 230 -106 360 -138 121 -30 133 -31 341 -30 187 0 227 3 292 21 41 11 95 25 119 30 24 6 66 20 93 30 26 11 72 29 101 41 61 25 188 100 235 141 18 15 36 28 40 28 16 0 228 218 281 290 71 95 91 127 139 225 91 187 131 364 132 598 0 43 9 128 21 190 56 305 186 515 430 698 90 68 128 88 244 127 132 44 214 57 365 56 296 0 516 -89 721 -290 l67 -65 141 141 c78 77 141 144 141 149 0 15 -168 158 -265 226 -142 98 -298 171 -475 219 -80 22 -122 27 -265 30 -93 3 -208 1 -255 -4z" />
                          <path d="M3574 1905 c-11 -28 1 -329 14 -352 6 -12 22 -25 34 -30 13 -4 302 -6 643 -5 341 1 637 0 658 -4 32 -5 37 -9 37 -32 0 -15 -12 -54 -25 -87 -14 -33 -25 -64 -25 -70 -1 -23 -72 -149 -126 -222 -130 -177 -314 -315 -498 -374 -200 -65 -489 -65 -693 0 -203 65 -449 270 -548 457 -35 67 -43 72 -50 38 -4 -16 -17 -54 -31 -85 -13 -31 -24 -60 -24 -65 0 -8 -32 -71 -89 -175 -11 -21 -28 -44 -37 -54 -16 -15 -12 -21 57 -92 41 -42 92 -92 113 -112 22 -20 47 -43 55 -52 24 -23 107 -81 181 -126 112 -68 288 -132 477 -175 23 -5 147 -8 275 -6 231 3 234 4 343 37 227 69 342 124 494 239 90 67 281 256 281 277 0 8 4 15 8 15 8 0 92 114 92 125 0 4 11 21 25 39 14 18 25 38 25 45 0 6 7 22 16 35 24 37 61 146 89 262 29 122 45 278 45 447 l0 117 -905 0 c-794 0 -906 -2 -911 -15z" />
                        </g>
                      </svg>
                      <div className="it-brand-text">
                        <div className="it-brand-title">IIS Giorgi - Milano</div>
                        <div className="it-brand-tagline d-none d-md-block">Area Riservata Al Personale Scolastico</div>
                      </div>
                    </a>
                  </div>

                  <div className="it-right-zone">
                    <div className="it-search-wrapper">
                      <span className="d-none d-md-block">{username ? username : "Login"}</span>
                      <a className="search-link rounded-icon" aria-label="Entra nell'Area Riservata al Personale Scolastico" href={username ? "#" : "/login"}>
                        <Icon icon="it-user" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
