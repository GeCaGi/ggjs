import {Icon, Button} from "design-react-kit"

export default function Navbar(){
    return (
        <div className="it-header-navbar-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12">
          
          <nav className="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
            <Button className="custom-navbar-toggler" type="button" aria-controls="nav0" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav0" style={{backgroundColor: "black"}}>
              <Icon icon="it-burger"></Icon>
            </Button>
            <div className="navbar-collapsable" id="nav0" style={{display: "none"}}>
              <div className="overlay" style={{display: "none"}}></div>
              <div className="close-div">
                <button className="btn close-menu" type="button">
                  <span className="visually-hidden">Nascondi la navigazione</span>
                  <svg className="icon"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-close-big"></use></svg>
                </button>
              </div>
              <div className="menu-wrapper">
                <ul className="navbar-nav">
                  <li className="nav-item active"><a className="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                  <li className="nav-item"><a className="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="#"><span>Link 3</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="#"><span>Link 4</span></a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdown0">
                      <span>Menu Dropdown</span>
                      <svg className="icon icon-xs"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-expand"></use></svg>
                    </a>
                    <div className="dropdown-menu" role="region" aria-labelledby="mainNavDropdown0">
                      <div className="link-list-wrapper">
                        <ul className="link-list">
                          <li><a className="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                          <li><a className="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                          <li><a className="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                          <li><span className="divider"></span></li>
                          <li><a className="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  
                  <li className="nav-item dropdown megamenu">
                    <button type="button" className="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-2" data-focus-mouse="false">
                        <span>Megamenu</span><svg role="img" className="icon icon-xs ms-1"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-expand"></use></svg>
                    </button>
                    <div className="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-2">
                      <div className="megamenu pb-5 pt-3 py-lg-0">
                        <div className="row">
                          <div className="col-xs-12 col-lg-4 px-0">
                            <div className="row">
                              <div className="col-12 it-vertical it-description pb-lg-3">
                                <div className="description-content ps-4 ps-sm-5 ms-3">
                                  <div className="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                    <figure className="figure">
                                      <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" className="figure-img img-fluid rounded" alt="Segnaposto"/>
                                    </figure>
                                  </div>
                                  <p>
                                    Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="it-heading-link-wrapper">
                              <a className="it-heading-link" href="#"><svg role="img" className="icon icon-sm me-2 mb-1"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Esplora la sezione megamenu</span>
                              </a>
                            </div>
                            <div className="row">
                              <div className="col-12 col-lg-6">
                                <div className="link-list-wrapper">
                                  <ul className="link-list">
                                    <li>
                                      <a className="list-item dropdown-item" href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 1</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="list-item dropdown-item" href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 2</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="list-item dropdown-item " href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 3</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="link-list-wrapper">
                                  <ul className="link-list">
                                    <li>
                                      <a className="list-item dropdown-item" href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 4</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="list-item dropdown-item" href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 5</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="list-item dropdown-item " href="#">
                                        <svg role="img" className="icon icon-sm me-2"><use href="/bootstrap-italia/2-8-3/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                        <span>Link lista 6</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
    )
}