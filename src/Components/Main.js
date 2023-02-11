import React from "react";
import FooterImage from "../Buildo.png";

export default function Main() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-space fw-bold">Build A Free Website 🔥</h1>
        <div className="col-lg-5 mx-auto">
          <p className="lead mb-4">
            Our website builder is focused on design and simplicity. Using the
            power of Buildo platform, you can easily create, customise, and sell
            a great website that is search engine ready all on your own.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a href="https://mailchimp.com/en-gb/pricing/marketing/">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
              >
                Start Free Trail
              </button>
            </a>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="container-1 px-5">
            <img
              src="https://eep.io/images/yzco4xsimv0y/1jLvkI1ssXliXkyATh9h5D/3765c84774f2dae75d78ded45b5e26f8/AUI_Website-Builder_01-Hero.png?w=780&fm=webp&q=70"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width={500}
              loading="lazy"
            />
          </div>
        </div>
        <div className="display-space">
          <p class="display-6">Attractive Web Design With Simplicity 🤯</p>
          <p className="lead mb-4">
            No design or coding skills is needed to use our website builder to
            help bring your unique vision to life. Within an hour, you can
            create a customizable, mobile-optimized website. You only need a
            domain name and a concept for your website to get started. Buildo
            can help you create a small web site, an online store, or whatever.
          </p>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://eep.io/images/yzco4xsimv0y/3psDMongeHHj0eseGdep8X/f75a8b7bb6b5e990769d5018ded74ef2/22_Website-Builder_AUI.png?w=760&fm=webp&q=70"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-1 fw-bold lh-1 mb-3">
              Promote & Build An Audience With Our Platform 🤑
            </h1>
            <p className="lead-1">
              We use our simple website builder to help you build your brand,
              look like a pro, and advance the rankings of search results.
              Customize your website on a no-code platform so you don't have to
              pay anybody else to help.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="https://mailchimp.com/en-gb/pricing/commerce/">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Start Now!
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-4 py-5">
          <h2 className="pb-2 border-bottom">
            Decide if Buildo is right for you 😎
          </h2>
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
              <h3 className="fw-bold">
                Reach more people with your Mailchimp website
              </h3>
              <p className="text-muted">
                Grow and engage a bigger, higher quality customer base with
                intelligent tools that speak to an interested audience when
                they’re most willing to listen.
              </p>
              <a href="https://mailchimp.com/en-gb/resources/mailchimp-comparisons/" className="btn btn-primary btn-lg">
                Learn More!
              </a>
            </div>
            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col d-flex flex-column gap-2">
                  <h4 className="fw-semibold mb-0">Domains</h4>
                  <p className="text-muted">
                    Purchase a domain or connect an existing one to your
                    website.
                  </p>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <h4 className="fw-semibold mb-0">SEO Tools</h4>
                  <p className="text-muted">
                    Custom social posts, SSL certificates, rapid speed,
                    responsive design, and more.
                  </p>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <h4 className="fw-semibold mb-0">Google Workshop</h4>
                  <p className="text-muted">
                    Add Google Workspace to your domain purchase to use Google
                    suite features.
                  </p>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <h4 className="fw-semibold mb-0">Built-In Forms</h4>
                  <p className="text-muted">
                    Capture the attention of your website visitors with a custom
                    pop-up form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">
              Ready to start building your new site?
            </h1>
            <p className="lead fw-normal">Launch your website right away.</p>
            <a className="btn btn-outline-secondary" href="https://mailchimp.com/en-gb/pricing/marketing/">
              Start Building For Free
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img className="logo-2" src={FooterImage} alt="" width={50} />
            </a>
            <p className="text-muted">© 2023</p>
          </div>
          <div className="col-1">
            <h5 className="ftr">Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/resources/free-marketing-features-overview/" className="nav-link p-0 text-muted">
                  Marketing Library
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/marketing-glossary/" className="nav-link p-0 text-muted">
                  Free Marketing Tools
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Marketing Glossary
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/integrations/" className="nav-link p-0 text-muted">
                  Integrations Directory
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <h5 className="ftr">Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/andco/" className="nav-link p-0 text-muted">
                  Agencies & Freelancers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/developer/" className="nav-link p-0 text-muted">
                  Developers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/events/" className="nav-link p-0 text-muted">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <h5 className="ftr">Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/contact/" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/experts/" className="nav-link p-0 text-muted">
                  Hire an Expert
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/help/" className="nav-link p-0 text-muted">
                  Help Center
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://mailchimp.com/en-gb/contact/?primaryTopic=prospective" className="nav-link p-0 text-muted">
                  Talk to Sales
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
