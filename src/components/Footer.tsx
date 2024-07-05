const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-white bg-black lg:mt-40 lg:py-20">
      <div className="mod-container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col lg:w-4/6">
            <div>
              <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase text-blue-400 lg:mb-4">
                Interested in working together? Drop a mail.
              </h4>{" "}
              <a
                href="mailto:me@a2ys.dev"
                className="text-white big-email anchor-link"
              >
                me@a2ys.dev
              </a>
            </div>
            <div className="phone-socials">
              <h4 className="mt-8 mb-4 text-sm font-semibold tracking-wider uppercase text-blue-400">
                My socials
              </h4>{" "}
              <nav>
                <a
                  href="https://github.com/a2ys"
                  title="Link to GitHub"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/a2ys"
                  title="Link to LinkedIn page"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/unreal_sapien"
                  title="Link to Twitter"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://blog.a2ys.dev"
                  title="Link to Blog"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/_cococolastic_"
                  title="Link to Instagram"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </nav>
            </div>
          </div>{" "}
          <div className="hidden lg:block lg:w-3/12 xl:w-1/6">
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-blue-400">
              Quick Links
            </h4>{" "}
            <nav>
              <a
                href="/work"
                title="Link to Work page"
                className="block mb-1 text-white"
              >
                <span className="anchor-link">Work</span>
              </a>
              <a
                href="/about"
                title="Link to About page"
                className="block mb-1 text-white"
              >
                <span className="anchor-link">About</span>
              </a>
            </nav>
            <h4 className="mt-4 mb-4 text-sm font-semibold tracking-wider uppercase text-blue-400">
              My socials
            </h4>{" "}
            <nav>
              <a
                href="https://github.com/a2ys"
                title="Link to GitHub"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/a2ys"
                title="Link to LinkedIn page"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/unreal_sapien"
                title="Link to Twitter"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://blog.a2ys.dev"
                title="Link to Blog"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://instagram.com/_cococolastic_"
                title="Link to Instagram"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
