import React from "react";

export default function News2() {
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full top-0 left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div className="absolute top-4 flex md:block">
          <div className="flex flex-wrap justify-evenly gap-16 p-2">
            <div className="md-full p-6 mx-20 my-2 rounded-[15px] bg-cyan-200/80 ">
              <h3 className="font-semibold py-2">Ministerbriefe zum IfSG</h3>
              <p>Montag, 20. September 2022</p>
              <p>Sehr geehrte Damen und Herren, </p>
              <br />
              <p>
                anbei erhalten Sie die Briefe des Kultusministers zum geänderten
                Infektionsschutzgesetz. Ich bitte um Weiterleitung über Ihre
                üblichen Verteiler und bedanke mich für Ihre Unterstützung!
              </p>
              <br />
              <p>
                {" "}
                Danke, dass ihr die Verantwortung übernehmt. Ich wünsche euch
                allen eine erfolgreiche Zeit!{" "}
              </p>
              <p> Herzliche Grüße aus Hannover</p>
              <p> i. A. Nina Graf</p>
              <p>Niedersächsisches Kultusministerium </p>
              <br />
              <p>Mit freundlichen Grüßen </p>
              <p>Dr. Ulrike Begemann, StD'</p>
              <p>stellvertretende Schulleiterin</p>
              <a
                href="https://schulnetzmail.nibis.de/files/c8f590833f2afabf3093260ba244f083/2022-09-19_Brief_an_Eltern.pdf"
                className="text-blue-600 underline"
              >
                Corona Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
