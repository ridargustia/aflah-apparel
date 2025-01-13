import React, { useState } from "react";

const FaqSection = () => {
  const [accordion, setAccordion] = useState<any>({});

  return (
    <div className="transform-none">
      <div className="relative">
        <div className="lg:py-24 py-16 mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl text-center font-bold tracking-wide text-blue-950">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-16 flex flex-wrap flex-row w-full md:px-14 px-0">
            <div
              className="hs-accordion-group w-full mb-3 bg-gray-50 px-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className={`hs-accordion ${accordion.question1 && "active"}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-900 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                  aria-expanded={accordion.question1 ? "true" : "false"}
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  onClick={() =>
                    setAccordion({
                      question1: !accordion.question1,
                    })
                  }
                >
                  Question #1
                  {accordion.question1 ? (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden duration-300 transition-all ease-in-out px-4 ${
                    accordion.question1
                      ? "h-auto opacity-100 pb-4"
                      : "h-0 opacity-0 pb-0"
                  }`}
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800">
                    <em>This is the third items accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion-group w-full mb-3 bg-gray-50 px-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div
                className={`hs-accordion ${accordion.question2 && "active"}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-900 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                  aria-expanded={accordion.question2 ? "true" : "false"}
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  onClick={() =>
                    setAccordion({
                      question2: !accordion.question2,
                    })
                  }
                >
                  Question #2
                  {accordion.question2 ? (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden duration-300 transition-all ease-in-out px-4 ${
                    accordion.question2
                      ? "h-auto opacity-100 pb-4"
                      : "h-0 opacity-0 pb-0"
                  }`}
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800">
                    <em>This is the third items accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion-group w-full mb-3 bg-gray-50 px-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className={`hs-accordion ${accordion.question3 && "active"}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-900 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                  aria-expanded={accordion.question3 ? "true" : "false"}
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  onClick={() =>
                    setAccordion({
                      question3: !accordion.question3,
                    })
                  }
                >
                  Question #3
                  {accordion.question3 ? (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden duration-300 transition-all ease-in-out px-4 ${
                    accordion.question3
                      ? "h-auto opacity-100 pb-4"
                      : "h-0 opacity-0 pb-0"
                  }`}
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800">
                    <em>This is the third items accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion-group w-full mb-3 bg-gray-50 px-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div
                className={`hs-accordion ${accordion.question4 && "active"}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-900 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                  aria-expanded={accordion.question4 ? "true" : "false"}
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  onClick={() =>
                    setAccordion({
                      question4: !accordion.question4,
                    })
                  }
                >
                  Question #4
                  {accordion.question4 ? (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden duration-300 transition-all ease-in-out px-4 ${
                    accordion.question4
                      ? "h-auto opacity-100 pb-4"
                      : "h-0 opacity-0 pb-0"
                  }`}
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800">
                    <em>This is the third items accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hs-accordion-group w-full mb-3 bg-gray-50 px-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div
                className={`hs-accordion ${accordion.question5 && "active"}`}
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-700 hover:text-gray-900 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                  aria-expanded={accordion.question5 ? "true" : "false"}
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  onClick={() =>
                    setAccordion({
                      question5: !accordion.question5,
                    })
                  }
                >
                  Question #5
                  {accordion.question5 ? (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  ) : (
                    <svg
                      className="block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden duration-300 transition-all ease-in-out px-4 ${
                    accordion.question5
                      ? "h-auto opacity-100 pb-4"
                      : "h-0 opacity-0 pb-0"
                  }`}
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800">
                    <em>This is the third items accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
