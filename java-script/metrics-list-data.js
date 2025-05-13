const metricsList = [
  {
    metric: "17.6%",
    heading: "Conversion Rate",
    describe:
      "Experience the power of effective digital marketing with a remarkable 17.6% conversion rate.",
  },
  {
    metric: "100K",
    heading: "Potential Customers",
    describe:
      "Witness the impact of our digital campaigns as we extend your reach to over 100,000 potential customers.",
  },
  {
    metric: "$5.2M",
    heading: "Latest Project Revenue",
    describe:
      "Unprecedented growth with our proven digital strategies, driving revenue to surpass the $5 million milestone.",
  },
  {
    metric: "300%",
    heading: "Impressive ROI",
    describe:
      "Unlock the full potential of your digital investments with an impressive 300% return on investment.",
  },
];

const metricsListToPaste = metricsList
  .map((item) => {
    return `
    <div class="metrics-list-item">
      <h2 class="metrics-list-metric">${item.metric}</h2>
      <div class="metrics-list-text-container">
        <h3 class="metrics-list-heading">${item.heading}</h3>
        <p class="metrics-list-describe">${item.describe}</p>
      </div>
    </div>
    `;
  })
  .join("");

const metricsListContainer = document.querySelector(".metrics-list");

metricsListContainer.insertAdjacentHTML("afterbegin", metricsListToPaste);

