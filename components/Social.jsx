import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = [
  {
    url: "https://www.linkedin.com/in/mohd-anees/",
    icon: faLinkedin,
  },
  {
    url: "https://github.com/muhdanees",
    icon: faGithub,
  },
  {
    url: "https://twitter.com/aneesoffice",
    icon: faTwitter,
  },
  {
    url: "https://www.facebook.com/anees.person",
    icon: faFacebook,
  },
];

function SocialList({ url, icon }) {
  return (
    <li>
      <Link href={url}>
        <a aria-label="Code Payer Social Links">
          <FontAwesomeIcon icon={icon} />
        </a>
      </Link>
    </li>
  );
}

function SocialLists({ socialLinks }) {
  return (
    <ul>
      {socialLinks.map((socialLink) => (
        <SocialList key={socialLink.url} {...socialLink} />
      ))}
    </ul>
  );
}

function Social() {
  return (
    <div className="social-icons">
      <SocialLists socialLinks={SocialLinks} />
    </div>
  );
}

export default Social;
