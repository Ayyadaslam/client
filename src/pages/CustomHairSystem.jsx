import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";
import "./CustomHairSystem.css";

const CustomHairSystem = () => {
  const { t } = useTranslation();
  // Modal state for template selection
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const navigate = useNavigate();
  // Template size options
  const templateOptions = [
    {
      id: "partial",
      name: t("customHairSystem.template.partial"),
      description: t("customHairSystem.template.partialDesc"),
      price: 0,
      image: "/src/assets/images/template-partial.png",
    },
    {
      id: "regular",
      name: t("customHairSystem.template.regular"),
      description: t("customHairSystem.template.regularDesc"),
      price: 40,
      image: "/src/assets/images/template-regular.png",
    },
    {
      id: "oversize",
      name: t("customHairSystem.template.oversize"),
      description: t("customHairSystem.template.oversizeDesc"),
      price: 90,
      image: "/src/assets/images/template-oversize.png",
    },
    {
      id: "fullcap",
      name: t("customHairSystem.template.fullcap"),
      description: t("customHairSystem.template.fullcapDesc"),
      price: 150,
      image: "/src/assets/images/template-fullcap.png",
    },
  ];

  // Handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const features = [
    {
      title: t("customHairSystem.feature1.title"),
      description: t("customHairSystem.feature1.description"),
      image:
        "/src/assets/images/HeroSectionImAges/Laguna_Beach_by_BelleTress_in_Milkshake_Blonde_R_K_1.webp",
    },
    {
      title: t("customHairSystem.feature2.title"),
      description: t("customHairSystem.feature2.description"),
      image:
        "/src/assets/images/HeroSectionImAges/Laguna_Beach_by_BelleTress_in_Milkshake_Blonde_R_K_2.webp",
    },
    {
      title: t("customHairSystem.feature3.title"),
      description: t("customHairSystem.feature3.description"),
      image: "/src/assets/images/HeroSectionImAges/Model_Mode_RW.webp",
    },
    {
      title: t("customHairSystem.feature4.title"),
      description: t("customHairSystem.feature4.description"),
      image:
        "/src/assets/images/HeroSectionImAges/2604_hphero_WeatherProof_d_1.webp",
    },
  ];
  // route to customize hair system
  const routeToCustomizeHairSystem = () => {
    navigate(`/hair-customization`);
  };

  return (
    <div className="custom-hair-system-page">
      {/* Hero Section */}
      <Banner
        badge={t("customHairSystem.badge")}
        title={t("customHairSystem.title")}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        backgroundImage="/src/assets/images/HeroSectionImAges/CON_APRIL_BTF_springrefresh_d.webp"
      />

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              {t("customHairSystem.featuresTitle")}
            </h2>
            <p className="section-subtitle">
              {t("customHairSystem.featuresSubtitle")}
            </p>
          </div>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Design Section */}
      <section className="design-section">
        <Container>
          <div className="design-banner">
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="design-content">
                  <h2 className="design-title">
                    {t("customHairSystem.designTitle")}
                  </h2>
                  <p className="design-description">
                    {t("customHairSystem.designDescription")}
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="design-btn"
                    onClick={() => routeToCustomizeHairSystem()}
                  >
                    <span>{t("customHairSystem.createButton")}</span>
                  </Button>
                </div>
              </Col>
              <Col lg={6}>
                <div className="design-image">
                  <img
                    src="/src/assets/images/Frame_97_(2).png"
                    alt="Hair System Design"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Before After Section */}
      <section className="before-after-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              {t("customHairSystem.beforeAfterTitle")}
            </h2>
            <p className="section-subtitle">
              {t("customHairSystem.beforeAfterSubtitle")}
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/download.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/2604_hphero_TheCut_d_5eaf1f49-17de-4ef3-b949-a37566947f1a.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/2604_PCP_TheCut_d.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/2604_hphero_NAES_d_8f751b1c-c596-42ae-a4b3-e8cdf55f8b85.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/Untitled_design_43_41ac396b-deaf-4c1e-81c0-5b3bb8b6d69a.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="before-after-card">
                <img
                  src="/src/assets/images/HeroSectionImAges/BlogProduct_Page_Image_43_a984ba26-750f-480c-b541-51b2c830b07c.webp"
                  alt="Hair System Result"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default CustomHairSystem;
