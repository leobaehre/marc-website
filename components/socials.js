import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";

export default function Socials() {
  return (
    <>
      <div className="bg-white rounded-lg w-100 h-100 p-2 font-azo-sans-web">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <PhoneIcon />
            <p className="p-2">+31 612345678</p>
          </div>
          <div className="flex flex-row">
            <EmailIcon className="pl-2" />
            <p className="p-1 pl-4">mdekoning@hotmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
