import { Icon } from "@iconify/react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>
        Contacts:{" "}
        <a href="https://github.com/LoreMaru" target="_blank">
          <Icon icon="jam:github" />
        </a>
        <a
          href="https://www.linkedin.com/in/lorena-marullo-443072138/"
          target="_blank"
        >
          <Icon icon="mdi:linkedin" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
