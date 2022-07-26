import React, { useContext, useEffect, useRef, useState } from "react";
import KalendarKontekst from "./context/KalendarKontekst";

const boje = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function () {
  const {
    setPrikazatiEventModal,
    selektovaniDan,
    dispatchSacuvaniDogadjaji,
    selektovaniDogadjaj,
    setSelektovaniDogadjaj,
  } = useContext(KalendarKontekst);
  const [opis, setOpis] = useState(
    selektovaniDogadjaj ? selektovaniDogadjaj.opis : ""
  );
  const [naslov, setNaslov] = useState(
    selektovaniDogadjaj ? selektovaniDogadjaj.temaDiplomskogRada : ""
  );

  // mozda mi bude trebala selektovana labela
  const [selektovanaLabela, setSelektovanaLabela] = useState(boje[0]);
  let modalRef = useRef();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const calendarEvent = {
  //     opis,
  //     naslov,
  //     day: selektovaniDan.valueOf(),
  //     id: Date.now(),
  //   };
  //   if (selektovaniDogadjaj) {
  //     dispatchSacuvaniDogadjaji({ type: "update", payload: calendarEvent });
  //   } else {
  //     dispatchSacuvaniDogadjaji({ type: "push", payload: calendarEvent });
  //     setPrikazatiEventModal(false);
  //     setSelektovaniDogadjaj(null);
  //   }
  // }

  return (
    <div
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center"
      onClick={(event) => {
        if (!modalRef.current.contains(event.target))
          setPrikazatiEventModal(false);
        setSelektovaniDogadjaj(null);
      }}
    >
      <form ref={modalRef} className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selektovaniDogadjaj && (
              <span
                className="material-icons-outlined text-gray-400 cursor-pointer"
                onClick={() => {
                  dispatchSacuvaniDogadjaji({
                    type: "delete",
                    payload: selektovaniDogadjaj,
                  });
                  setPrikazatiEventModal(false);
                  setSelektovaniDogadjaj(null);
                }}
              >
                delete
              </span>
            )}
            <button
              onClick={() => {
                setPrikazatiEventModal(false);
                setSelektovaniDogadjaj(null);
              }}
            >
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="naslov"
              placeholder="Add naslov"
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus: outline-none focus: ring-0 focus:border-blue-500"
              value={naslov}
              onChange={(e) => setNaslov(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{selektovaniDan.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="opis"
              placeholder="Add opis"
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus: outline-none focus: ring-0 focus:border-blue-500"
              value={opis}
              onChange={(e) => setOpis(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {boje.map((bojeClass, i) => (
                <span
                  key={i}
                  className={`bg-${bojeClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  <span className="material-icons-outlined text-gray-400">
                    check
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            // onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
