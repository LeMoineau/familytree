import { GENDERS, PersonData } from "../common/interfaces/person-data";
import { useTabtore } from "../common/stores/tabStore";

export default function FamilyTab() {
  const tabTarget: PersonData | undefined = useTabtore(
    (state: any) => state.target
  );
  const tabIsOpen: boolean = useTabtore((state: any) => state.open);
  const closeTab = useTabtore((state: any) => state.closeTab);
  const formatter = new Intl.DateTimeFormat("fr", {
    month: "short",
    year: "numeric",
  });

  return (
    <div
      style={{ display: tabIsOpen ? "flex" : "none" }}
      className="fixed top-0 right-0 z-30 h-screen w-screen sm:z-10 sm:w-1/2 md:w-1/3 bg-white drop-shadow flex flex-col justify-center"
    >
      <button
        className="absolute top-0 right-0 w-10 h-10 p-3 bg-white rounded-full drop-shadow m-2"
        onClick={() => closeTab()}
      >
        <img
          className="w-full h-full transform rotate-45"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nO2UMQqAMAxF3/Gsg3j/wULVQS8Rl05FpGATpeTBX/MgCR+cnzMDJ3AAk6V4ByRnsxRLERerIb5qK6SbVY9AvBn8NhEIT+KkIK1quPSVOACLgnQBBhrQz1fX4mIzxG9sRSzKwYwArDlNGslBiwtYs6fhOILl9QAAAABJRU5ErkJggg=="
        />
      </button>
      <div className="grid grid-cols-2 gap-2 text-lg">
        <p className="text-right font-medium">Prénom</p>
        <p>{tabTarget?.firstname}</p>
        <p className="text-right font-medium">Nom</p>
        {tabTarget?.lastname ? (
          <p>{tabTarget.lastname}</p>
        ) : (
          <p className="w-1/2 border-b border-gray-300 bg-white drop-shadow"></p>
        )}
        <p className="text-right font-medium">Sexe</p>
        <p>
          {tabTarget?.gender === GENDERS.MALE && "Homme ♂️"}
          {tabTarget?.gender === GENDERS.FEMALE && "Femme ♀"}
          {tabTarget?.gender === GENDERS.OTHER && "Autre"}
        </p>
        <p className="text-right font-medium">Date de naissance</p>
        {tabTarget?.birthDate ? (
          <p>{formatter.format(tabTarget.birthDate)}</p>
        ) : (
          <p className="w-1/2 border-b border-gray-300 bg-white drop-shadow"></p>
        )}
        <p className="text-right font-medium">Date de mort</p>
        {tabTarget?.deathDate ? (
          <p>{formatter.format(tabTarget.deathDate)}</p>
        ) : (
          <p className="w-1/2 border-b border-gray-300 bg-white drop-shadow"></p>
        )}
      </div>
    </div>
  );
}
