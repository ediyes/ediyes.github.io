import { NAME } from "./constants.sidebar";

export const ABOUT = "Sobre mi";
export const KNOW_MORE = "Know Me More";
//
export const ABOUT_HELLO = (
  <>
    I'm <span className="text-primary">{NAME},</span> a Super woman
  </>
);

export const ABOUT_P1 =
  "I help you build brand for your business at an affordable price.  Thousands of clients have procured exceptional results while  working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const ABOUT_P2 =
  "Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.";

export const ABOUT_LINKS = [
  { id: "name", text: NAME, type: "text" },
  { id: "email", text: "chat@simone.com", type: "email" },
  { id: "age", text: "25", type: "text" },
  { id: "from", text: "Los Angeles, California", type: "text" },
];

export const ABOUT_CV_TEXT = "Download CV";
export const ABOUT_STATS = [
  {
    number: (
      <>
        <span>10</span>+
      </>
    ),
    text: "Years Experiance",
  },
  {
    number: (
      <>
        <span>10</span>+
      </>
    ),
    text: " Happy Clients",
  },
  {
    number: (
      <>
        <span>10</span>+
      </>
    ),
    text: "Projects Done",
  },
  {
    number: (
      <>
        <span>10</span>+
      </>
    ),
    text: "Get Awards",
  },
];
