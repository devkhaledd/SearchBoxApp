export interface Article {
  title: string;
  date: string;
  content: string;
}

const articles: Article[] = [
  {
    title: "Introduction to React",
    date: "August 15, 2023",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently. With React, you can use a declarative syntax to describe how your UI should look based on the current state of the data. This approach makes it easier to reason about your UI and helps in building interactive and dynamic web applications.",
  },
  {
    title: "Getting Started with Node.js",
    date: "August 20, 2023",
    content:
      "Node.js is a runtime environment that allows developers to execute JavaScript code on the server side. It provides an event-driven, non-blocking architecture for building scalable and fast applications. With Node.js, you can handle I/O operations efficiently and build real-time applications using technologies like WebSockets. Its vast ecosystem of packages and modules, available through npm, makes it a popular choice for backend development.",
  },
  {
    title: "CSS Flexbox Layout",
    date: "August 25, 2023",
    content:
      "Flexbox is a layout model in CSS that allows you to design flexible and responsive layouts with a single-dimensional layout approach. It makes it easier to distribute space and align content within containers. With flex properties like `flex-direction`, `justify-content`, and `align-items`, you can create complex layouts that adapt to different screen sizes. Whether you are building a simple card layout or a complex navigation menu, Flexbox provides a powerful toolset for designing modern web interfaces.",
  },
  {
    title: "Responsive Web Design",
    date: "September 5, 2023",
    content:
      "Responsive web design is an approach to building websites that ensures optimal viewing and interaction across various devices and screen sizes. It involves using flexible layouts, media queries, and fluid grids to adapt the layout and content to different screens. With responsive design, websites can provide a seamless user experience on both desktop and mobile devices.",
  },
  {
    title: "JavaScript ES6 Features",
    date: "September 10, 2023",
    content:
      "ES6, also known as ECMAScript 2015, introduced several new features to the JavaScript language. These include arrow functions, template literals, destructuring, spread and rest operators, classes, and more. These features enhance the readability, maintainability, and expressiveness of JavaScript code, making it a more powerful language for building modern web applications.",
  },
  {
    title: "Introduction to GraphQL",
    date: "September 15, 2023",
    content: `GraphQL is a query language for APIs that allows clients to request exactly the data they need and nothing more. It provides a more efficient and flexible way to retrieve data compared to traditional REST APIs. With GraphQL, clients can avoid over-fetching or under-fetching data, resulting in faster and more efficient data retrieval. It's widely adopted for building APIs that power modern web and mobile applications.`,
  },
];

export default articles;
