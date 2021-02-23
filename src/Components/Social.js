import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = [
  {
    url: 'https://www.linkedin.com/in/mohd-anees/',
    icon: faLinkedin
  },
  {
    url: 'https://github.com/muhdanees',
    icon: faGithub
  },
  {
    url: 'https://twitter.com/aneesoffice',
    icon: faTwitter
  },
  {
    url: 'https://www.facebook.com/anees.person',
    icon: faFacebook
  }
];

function SocialList({ url, icon }) {
  return (
    <li>
      <Link to={url}>
        <FontAwesomeIcon icon={icon} />
      </Link>
    </li>
  )
}


function SocialLists({ SocialLinks }) {
  return (
    <ul>
      {SocialLinks.map(socialLink => <SocialList key={socialLink.url} {...socialLink} />)}
    </ul>
  )
}



function Social() {
  return (
    <div className="social-icons">
      <SocialLists SocialLinks={SocialLinks} />
    </div>
  );
}

export default Social;
