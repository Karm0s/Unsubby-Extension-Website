import Image from "next/image";
import FirefoxLogo from "@/assets/firefox.svg";
import ChromeLogo from "@/assets/chrome.svg";

export default function AddButton({browser}:{browser: "Firefox" | "Chrome"}) {
  const storeLinks = {
    "Firefox": "https://addons.mozilla.org/en-US/firefox/addon/unsubby/", 
    "Chrome": "https://chromewebstore.google.com/",
  };
  const icon = {
    "Firefox": FirefoxLogo,
    "Chrome": ChromeLogo
  };
  return (
    <a href={storeLinks[browser]} className="inline-block">
      <button className="btn btn-neutral w-60 mx-2">Add to {browser} <Image src={icon[browser]} width={25} alt="browser icon"></Image></button>
    </a>
  );
}
