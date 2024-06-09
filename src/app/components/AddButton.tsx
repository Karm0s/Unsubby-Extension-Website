import Image from "next/image";
import { headers } from "next/headers";
import FirefoxLogo from "@/assets/firefox.svg";
import ChromeLogo from "@/assets/chrome.svg";

export default function AddButton() {
  const userAgent = headers().get("user-agent");
  let browser = "";
  let browserImage;
  if (userAgent?.includes("Firefox")) {
    browser = "Firefox";
    browserImage = FirefoxLogo;   
  } else if (userAgent?.includes("Chrome") || userAgent?.includes("Chromium")) {
    browser = "Chrome";
    browserImage = ChromeLogo;   
  }

  return (
    <button className="btn btn-neutral w-60 mt-8">Add to {browser} <Image src={browserImage} width={25} alt="browser icon"></Image></button>
  );
}
