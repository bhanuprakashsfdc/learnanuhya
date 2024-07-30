const blogData = [
  {
    id: 1,
    title: "Introduction to cloud computing 101",
    slug: "introduction-to-cloud-computing-101",
    tag: "Salesforce",
    keywords: "Introduction to cloud computing 101",
    description: "Introduction to cloud computing is Agile, scalable, secure. Offers diverse types (public, private, hybrid). Empowers with flexible infrastructure, cost efficiency, and robust security. Enables seamless scalability, fostering innovation and global accessibility.",
    createdDate: "2024-04-01",
    imageUrl: "/assets/img/blogs/introduction-to-cloud-computing-101/introduction-to-cloud-computing-101.jpg",
    signupUrl: "https://learn.anuhyadigital.com/introduction-to-cloud-computing-101/",
    content: `
     <div id="types-of-cloud-services">
        <h2>TYPES OF CLOUD SERVICES</h2>
        <div id="saas">
          <h3>SOFTWARE AS A SERVICES</h3>
          <p>Software as a service refers to a software distribution model where applications are hosted by a third-party provider and made available to customers over the Internet.</p>
        </div>
        <div id="paas">
          <h3>PLATFORM AS A SERVICES</h3>
          <p>Platform as a service is a cloud computing model that provides a platform allowing customers to develop run and manage applications.</p>
        </div>
        <div id="iaas">
          <h3>INFRASTRUCTURE AS A SERVICES</h3>
          <p>Infrastructure as a Service is a cloud computing model that provides virtualized computing resources over the internet.</p>
        </div>
      </div>
      <div id="cloud-characteristics">
        <h2>CLOUD CHARACTERISTICS</h2>
        <div id="agility">
          <h3>Agility</h3>
          <p>Improves user’s ability to re-design technological infrastructure resources as per requirement.</p>
        </div>
        <div id="api">
          <h3>Application programming interface (API)</h3>
          <p>Cloud services/hardware should be programmable to customize and utilize the cloud resources.</p>
        </div>
        <!-- Add more content as needed -->
      </div>
      <div id="types-of-clouds">
        <h2>Types of Clouds in Cloud Computing</h2>
        <div id="private-cloud">
          <h3>Private Cloud</h3>
          <p>Private cloud computing resources such as server storage and networking infrastructure are provisioned and maintained for the exclusive use of the organization.</p>
        </div>
        <div id="public-cloud">
          <h3>Public Cloud</h3>
          <p>Public cloud where computing environment resources, such as servers, storage, and networking infrastructure is owned and operated by a third-party cloud services.</p>
        </div>
        <!-- Add more content as needed -->
      </div>
      <div id="cloud-deployments">
        <h2>Cloud Deployments in Cloud Computing</h2>
        <div id="network-dependency">
          <h3>Network dependency</h3>
          <p>Organizations need a stable and high-speed internet connection to ensure seamless access to their cloud resources.</p>
        </div>
        <!-- Add more content as needed -->
      </div>
`,
  faqs: [
    {
      question: "Who is the father of cloud computing?",
      answer: "Joseph Carl Robnett Licklider."
    },
    {
      question: "What are the three main service models in cloud computing?",
      answer: "The three main service models in cloud computing are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)."
    },
    {
      question: "What is the difference between public, private, and hybrid clouds?",
      answer: "Public clouds are hosted and managed by third-party providers, private clouds are dedicated to a single organization and managed either internally or by a third party, while hybrid clouds combine elements of both public and private clouds."
    },
    {
      question: "What are cloud computing examples?",
      answer: "Emails, calendars, Skype, and WhatsApp."
    },
    {
      question: "What are the key benefits of cloud computing?",
      answer: "Some key benefits of cloud computing include cost savings, scalability, flexibility, accessibility, and improved reliability and security compared to traditional on-premises IT infrastructure."
    }
  ],
  },
];

module.exports = blogData;
