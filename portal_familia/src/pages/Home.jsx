import React, { Fragment, useState, useRef, useContext} from "react";
import {TheContext}from "../Global_Context";
import useTheme from "../Components/useTheme";
import {Worker} from "@react-pdf-viewer/core"
import PdfViewer from "../Components/PdfViewer"
import {Link} from "react-router-dom"
import "./main.css";
function Home() {
  const [data_open, setData] = useState(true);
  const [Menu, setMenu] = useState();
  const more_info = useRef(Array(2)); 
  const calendar_ref = useRef(); 
  const [calendar_conteiner_state, setCalendarState] = useState()
  const [calendar, open_calendar] = useState(false)
  const {isDark} = useContext(TheContext)
  const Toggle = useTheme()
  const handleClick = () => {
    more_info.current[1].style.display = "block"
    if (data_open) {
        setMenu({animation:"fade-in-more-info 500ms forwards"});
      } else {
        setMenu({animation:"fade-out-more-info 500ms forwards"});
        more_info.current[0].addEventListener("animationend",()=>more_info.current[1].style.display = "none", {once: true})
      }
      setData((prev) => !prev);
  };
  const handleClickCalendar = () => {
    setCalendarState({backgroundColor:"green"})
    if (calendar) {
        setCalendarState({animation:"fade-out-calendar 500ms forwards"})
    } else {
        setCalendarState({animation:"fade-in-calendar 500ms forwards"})
      }
      calendar_ref.current.addEventListener("animationend", ()=>open_calendar(prev=>!prev), {once:true})
  };
  const Calendar = () =>{
      return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <PdfViewer fileUrl="/Calendario Prepa 2022.pdf" />
        </Worker>
      )
  }
  return (
    <Fragment>
      <header className="header_home">
        <img src="../../src/assets/Prepa_Ibero.svg" alt="Brnad_logo" />
        <h2>Portal Familias</h2>
        <h2 className="profile" id="clicable_icon" onClick={handleClick}>
          <i className="fa-solid fa-user"></i>
        </h2>
        <div
          className="more_info_conteiner"
          onClick={handleClick}
          ref={(ele) => (more_info.current[1] = ele)}
        >
          <div
            className="more_info"
            style={Menu}
            ref={(ele) => (more_info.current[0] = ele)}
          >
            <span className="info">
              000000-0 <br />
              nombre.apellido@prepaibero.mx
            </span>
            <a href="#">Cambiar la contraseña</a>
            <a href="#">Actulizar los datos personales</a>
            <Toggle style="HomeToggle"/>
            <a href="/PortalFamilias_Redisen-o/login" className="salir">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </a>
          </div>
        </div>
      </header>
      <main className="main_home">
        <div className="main_content">
          <div className="other_options">
              <ul>
                <li>
                  <Link to="/PortalFamilias_Redisen-o/calificaciones">
                    <i className="fas fa-clipboard"></i>
                    <span>Calificaciones</span>
                  </Link>
                </li>
                <li>
                  <Link to="/PortalFamilias_Redisen-o/reglamento">
                    <i className="fa-solid fa-book"></i>
                    <span>Reglamento</span>
                  </Link>
                </li>
                <li>
                  <Link to="/PortalFamilias_Redisen-o/horario">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Horario</span>
                  </Link>
                </li>
                <li id="cuenta_big" onClick={handleClick}>
                  <i className="fa-solid fa-user"></i>
                  <span>Cuenta</span>
                </li>
              </ul>
          </div>
          <div className="notification_conteiner">
            <span className="noti_asig">
              <i className="fa-solid fa-bell"></i>
              NOTIFICACIONES
            </span>
            <div>
              <a href="#">
                Evaluacion de tutores&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <a href="#">
                La evaluacion de profesores ya esta aquí&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <a href="#">
                Inscripcion de talleres&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </a>
            </div>
            <div>
              <Link to="/PortalFamilias_Redisen-o/pago">
                Pago de colegiaturas&nbsp;
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
            <a href="#" id="Hist_incidentes">
              Historial de incidentes
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
        <div className="OnlyCompHome" style={{ boxShadow: isDark && "none" }}>
          <span>Noticias</span>
          <div className="OnlyCompHome_news_conteiner">
            <div className="news_conteiner">
              <div>
                <img src="https://picsum.photos/250/150?random=3" alt="img_noticia" />
              </div>
              <div>
                <h4>Noticia 1</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=2"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 2</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 3</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=1"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 4</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="pdf_caldendario_sec">
        <div className="open_calendar" onClick={handleClickCalendar}>
          <h3>
            {calendar ? <i className="fa-solid fa-chevron-down"></i>: <i className="fa-solid fa-chevron-right"></i>}
            &nbsp;Eventos importantes
          </h3>
        </div>
        <div className="pdf_conteiner" style={calendar_conteiner_state} ref={calendar_ref}>
          <div className="pdf_caldanrio_pdfViewer" >
            { calendar && <Calendar/>}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
