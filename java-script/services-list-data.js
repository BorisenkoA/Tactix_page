const servicesList = [
  {
    img: "../images/flash.svg",
    heading: "Search Engine Optimization",
    describe:
      "Enhance your online visibility and drive organic traffic to your website with our expert SEO strategies.",
  },
  {
    img: "../images/cursor.svg",
    heading: "Pay-Per-Click Advertising",
    describe:
      "Accelerate your digital growth with targeted PPC campaigns tailored to your business goals.",
  },
  {
    img: "../images/person.svg",
    heading: "Social Media Marketing",
    describe:
      "Engage your audience and build brand loyalty with our comprehensive social media marketing solutions.",
  },
  {
    img: "../images/bookmark.svg",
    heading: "Content Marketing",
    describe:
      "Fuel your digital strategy with high-quality content that resonates with your audience and drives meaningful engagement.",
  },
];

const servicesListToPaste = servicesList
  .map((item) => {
    return `
    <div class="services-list-item">
        <div class="services-list-icon-container">
            <img src="${item.img}" alt="service-icon">
        </div>
        <h3 class="services-list-heading">${item.heading}</h3>
        <p class="services-list-describe">${item.describe}</p>
    </div>
    `;
  })
  .join("");

const servicesListContainer = document.querySelector(".services-list");

servicesListContainer.insertAdjacentHTML("afterbegin", servicesListToPaste);