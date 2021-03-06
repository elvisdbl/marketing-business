import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../API/index";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const requestServices = async () => {
      setServices(await getServices());
    };

    requestServices();
  }, []);

  return (
    <>

        <section className="section-white" id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="section-title">Discover Our Services</h2>

                <p className="section-subtitle">
                  We solve your digital marketing problems all over the country.
                </p>
              </div>
            </div>
          </div>

          <div className="services-wrapper">
            <div className="container">
              <div className="row">
                {services.map(({ id_service, title, description, image }) => (
                  <div key={id_service} className="col-md-4">
                    <div className="main-services">
                      <img
                        src={`http://localhost:5000/${image}`}
                        className="width-100"
                        alt={title}
                      />
                      <h3>
                        <Link to={`/service/${id_service}`}>{title}</Link>
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Services;
