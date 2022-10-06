import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-400/70 w-screen box-border  p-2 flex items-center overflow-hidden fixed bottom-0">
      <div className="animate">
        {React.Children.toArray(
          [0, 1].map(i => (
            <div className="text-blue-500 py-1 whitespace-nowrap inline-flex items-center justify-center">
              <p className="text-blue-900 text-xl">
                Gymnasium Soltau _ Ernst-August-Straße 17 _ 29614 Soltau _
                Tel.:(0 5191) 9801-01 Fax.:(05195) 9801-99 _ Email:
                sekretariat@gym-soltau.de _ http://www.gymnsium-soltau.de
              </p>
              <div className="flex mx-2">
                <FaFacebook className="mx-2" size={25} />
                <FaInstagram className="mx-2" size={25} />
                <FaTwitter className="mx-2" size={25} />
                <FaYoutube className="mx-2" size={25} />
                <FaPinterest className="mx-2" size={25} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
