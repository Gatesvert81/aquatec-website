import React, { useContext } from "react";
import Button from "./Button";
import Image from "./Image";
import AnchorLink from "./AnchorLink";
import { NavContext } from "./Context";
import FooterLogo from "./FooterLogo";

function Footer() {
  const [page, setPage] = useContext(NavContext);
  return (
    <footer className="w-full h-fit bg-dark-blue flex flex-col md:flex-row gap-3 justify-center items-center p-10 text-white">
      <div className="">
        <FooterLogo />
      </div>
      <div className="w-full md:fit flex md:flex-col justify-center md:items-center gap-2">
        <AnchorLink route="/">
          <Button
            style={`footer-btn ${page === "home" ? "page" : null} `}
            click={() => setPage("home")}
          >
            Home
          </Button>
        </AnchorLink>
        <AnchorLink route="/about">
          <Button
            style={`footer-btn ${page === "about" ? "page" : null} `}
            click={() => setPage("about")}
          >
            About us
          </Button>
        </AnchorLink>
        <AnchorLink route="/projects">
          <Button
            style={`footer-btn ${page === "projects" ? "page" : null} `}
            click={() => setPage("projects")}
          >
            Projects
          </Button>
        </AnchorLink>
        <AnchorLink route="/store">
          <Button
            style={`footer-btn ${page === "store" ? "page" : null} `}
            click={() => setPage("store")}
          >
            Online Shop
          </Button>
        </AnchorLink>
        <AnchorLink route="/contact">
          <Button
            style={`footer-btn ${page === "contact" ? "page" : null} `}
            click={() => setPage("contact")}
          >
            Contact
          </Button>
        </AnchorLink>
      </div>
      <div>
        <div className="text-center capitalize">
          <h6 className="capitalize font-medium">94, Swaniker Street</h6>
          <h6 className="capitalize font-medium">GA-092-9410</h6>
          <h6 className="capitalize font-medium">Abelemkpe, Accra Ghana</h6>
          <AnchorLink route="tel:+233302768758">
            <h6 className="capitalize font-medium flex flex-col">
              <span>(+233) 302 768 758</span>
              <span>(+233) 544 313 279</span>
            </h6>
          </AnchorLink>
          <AnchorLink route="mailto:info@aquatecghana.com">
            <h6 className="lowercase font-medium">info@aquatecghana.com</h6>
          </AnchorLink>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <div className="icon">
            <AnchorLink
              route="https://www.facebook.com/aquatecghana/"
              pass={true}
              target={true}
            >
              <Image
                src="/icons/fb.png"
                alt="Dream pool"
                layout="fill"
                className="object-contain"
              />
            </AnchorLink>
          </div>
          {/* <div className="icon">
            <AnchorLink
              route="https://www.facebook.com/aquatecghana/"
              pass={true}
              target={true}
            >
              <Image
                src="/icons/ig.png"
                alt="Dream pool"
                layout="fill"
                className="object-contain"
              />
            </AnchorLink>
          </div>
          <div className="icon">
            <AnchorLink
              route="https://www.facebook.com/aquatecghana/"
              pass={true}
              target={true}
            >
              <Image
                src="/icons/twitter.png"
                alt="Dream pool"
                layout="fill"
                className="object-contain"
              />
            </AnchorLink>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
