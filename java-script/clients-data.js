const clientsLeftColumn = [
  {
    name: "Sarah Jhonson",
    position: "CEO of Floor",
    about:
      "Collaborating proved to be a pivotal moment for our business trajectory. Their innovative strategies, coupled with the dedication of their team, not only met but exceeded our expectations, leading to a level of success we hadn't previously imagined possible.",
    img: "",
  },
  {
    name: "John Smith",
    position: "Marketing Director at ZSystem",
    about:
      "The level of professionalism and expertise displayed by Tactix is unmatched. They truly understand our industry and consistently deliver results that exceed our expectations.",
    img: "",
  },
  {
    name: "Emily Brown",
    position: "Founder of Mooneys",
    about:
      "Their collaborative approach and attention to detail have been instrumental in our digital success. Thank you for your support!",
    img: "",
  },
  {
    name: "Mark Taylor",
    position: "Marketing Manager at Avandor",
    about:
      "Partnering with Tactix has been a truly transformative journey for our brand. Their insights, coupled with their personalized approach to our needs, have not only elevated our digital presence but also enabled us to forge deeper connections with audience.",
    img: "",
  },
];

const clientsRightColumn = [
  {
    name: "Jessica Lee",
    position: "Financial Director at StrOke",
    about:
      "From the start, Tactix impressed us with their professionalism and dedication. They consistently go above and beyond, delivering results that speak for themselves.",
    img: "",
  },
  {
    name: "David Miller",
    position: "Director of Marketing at SILK",
    about:
      "Their expertise have helped us navigate the complexities of digital marketing with ease.",
    img: "",
  },
  {
    name: "Jennifer White",
    position: "CEO of Fillmenty",
    about:
      "The team is exceptional. Their passion for what they do is evident in the results they deliver. We're grateful to have them as a trusted partner in our journey.",
    img: "",
  },
  {
    name: "Michael Harris",
    position: "Founder of Tracker",
    about:
      "Working closely with Tactix has truly been a delightful experience from the outset to the completion of our projects. Their unwavering professionalism, creativity, and attention to detail have left an mark on the success and trajectory of our brand. We are immensely grateful for their partnership and the contributions they have made to our journey.",
    img: "",
  },
];

const clientsLeftColumnToPaste = clientsLeftColumn
  .map((client) => {
    return `
      <div class="clients-item">
        <div class="clients-person">
          <div class="clients-person-image">
            <img src="${client.img}" alt="" />
          </div>
          <div class="clients-person-info">
            <p class="clients-person-name">${client.name}</p>
            <p class="clients-person-position">${client.position}</p>
          </div>
        </div>
        <p class="clients-item-about">${client.about}</p>
      </div>
    `;
  })
  .join("");

const clientsRightColumnToPaste = clientsRightColumn
  .map((client) => {
    return `
      <div class="clients-item">
        <div class="clients-person">
          <div class="clients-person-image">
            <img src="${client.img}" alt="" />
          </div>
          <div class="clients-person-info">
            <p class="clients-person-name">${client.name}</p>
            <p class="clients-person-position">${client.position}</p>
          </div>
        </div>
        <p class="clients-item-about">${client.about}</p>
      </div>
    `;
  })
  .join("");

const clientsListLeftColumn = document.querySelector(".clients-left");
const clientsListRightColumn = document.querySelector(".clients-right");

clientsListLeftColumn.insertAdjacentHTML(
  "afterbegin",
  clientsLeftColumnToPaste
);

clientsListRightColumn.insertAdjacentHTML(
  "afterbegin",
  clientsRightColumnToPaste
);