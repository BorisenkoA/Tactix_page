const questionsList = [
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a comprehensive range of digital marketing services, including SEO, PPC advertising, social media marketing, content creation, email marketing, and more. Our goal is to provide tailored solutions to meet your specific needs and objectives.",
  },
  {
    question:
      "How do I know which digital marketing strategies are right for my business?",
    answer:
      "We use a variety of metrics to measure the success of our campaigns, including website traffic, conversion rates, return on investment (ROI), and customer engagement. We provide regular reports and analytics to keep you informed about the performance of your campaigns.",
  },
  {
    question: "What sets your agency apart from others?",
    answer:
      "Our approach to SEO involves a combination of on-page optimization, technical SEO, and off-page strategies. We conduct thorough keyword research, optimize website content, improve site speed, and build high-quality backlinks to enhance your search engine rankings.",
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "We create and manage social media campaigns tailored to your target audience. This includes content creation, scheduling posts, engaging with followers, and analyzing performance metrics to optimize future campaigns.",
  },
  {
    question: "How much does digital marketing services cost?",
    answer:
      "Our content creation process involves researching your industry, understanding your target audience, and developing high-quality, engaging content that aligns with your brand voice. We also focus on SEO best practices to ensure your content ranks well in search engines.",
  },
  {
    question: "Do you provide reports and analytics to track progress?",
    answer:
      "Our team regularly attends industry conferences, participates in webinars, and follows leading digital marketing blogs and publications. We also invest in continuous education to ensure we are always up-to-date with the latest trends and best practices.",
  },
];

const questionsListToPaste = questionsList
  .map((item) => {
    return `
    <div class="questions-item">
      <div class="questions-item-question">
        <h3 class="questions-item-ask">${item.question}</h3>
        <div class="questions-item-arrow">
          <img src="./images/arrow-open.svg" alt="arrow-open" />
        </div>
      </div>
      <p class="questions-item-answer">${item.answer}</p>
    </div>
    `;
  })
  .join("");

const questionsListContainer = document.querySelector(".questions-container");

questionsListContainer.insertAdjacentHTML("afterbegin", questionsListToPaste);

const questionsItemArrow = document.querySelectorAll(".questions-item-arrow");

questionsItemArrow.forEach((item) => {
  item.addEventListener("click", () => {
    const parentElement = item.closest(".questions-item");
    const questionAnswer = parentElement.querySelector(".questions-item-answer");
    const arrowImage = item.querySelector("img");

    const isOpen = questionAnswer.style.maxHeight && questionAnswer.style.maxHeight !== "0px";

    if (isOpen) {
      questionAnswer.style.maxHeight = "0";
      questionAnswer.style.opacity = "0";
      parentElement.classList.remove("active");
      arrowImage.src = "./images/arrow-open.svg";
    } else {
      questionAnswer.style.maxHeight = questionAnswer.scrollHeight + "px";
      questionAnswer.style.opacity = "1";
      parentElement.classList.add("active");
      arrowImage.src = "./images/arrow-close.svg";
    }
  });
});
