import React from "react";

export default function News1() {
  return (
    <div className="w-full h-full relative z-1 ">
      <div className="absolute w-full h-full left-0 flex justify-center bg-slate-300/100 text-gray-800">
        <div className="absolute top-4 flex md:block">
          <div className="flex flex-wrap justify-evenly gap-16 p-2">
            <div className="md-full p-6 mx-20 my-2 rounded-[15px] bg-purple-100/80 ">
              <h3 className="font-semibold py-2">
                Wahl der KlassensprecherInnen und der KonferenzvertreterInnen
              </h3>
              <p>Liebe 5e</p>
              <p>lieber Herr Loock, </p>
              <br />
              <p>
                heute hat in der KL-Stunde die Wahl der KlassensprecherInnen und
                der KonferenzvertreterInnen stattgefunden. Aufgrund des neuen
                Stundenplanes hat sich die Wahl ja leider etwas verzögert. Bei
                der geheimen Wahl haben wir natürlich auch die krankgemeldeten
                SchülerInnen berücksichtig.
              </p>
              <p>
                Ich freue mich, folgenden Schülern und Schülerinnen zu ihrem
                neuen Amt gratulieren zu können:{" "}
              </p>
              <br />
              <p> Klassensprecher: Philip - Vertretung: Caylan</p>
              <p> Klassensprecherin: Marieke - Vertretung: Alina </p>
              <p>
                KonferenzvertreterInnen: Martha, Laya, Jana - Vertretungen:
                Jakob (Hestermann), Sinavera, Mia
              </p>
              <br />
              <p>
                Danke, dass ihr die Verantwortung übernehmt. Ich wünsche euch
                allen eine erfolgreiche Zeit!
              </p>
              <p> Mit freundlichen Grüßen</p>
              <p> Judith Denda, StR'</p>
              <p>Klassenleitung 5e </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
