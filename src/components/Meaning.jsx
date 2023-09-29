import Extra from "./Extra";

export default function Meaning({
  partOfSpeech,
  definitions,
  antonyms,
  synonyms,
}) {
  return (
    <div className="noun py-6">
      <div className="title flex gap-4 items-center">
        <div className="font-bold text-[1.5rem] italic">{partOfSpeech}</div>
        <div className="hl flex-1 border-t-[1px] border-t-[#f4f4f4]"></div>
      </div>

      <div className="text-[#84849a] py-6">Meaning</div>
      <ul className="list-disc pl-5">
        {definitions.map((x, index) => (
          <li key={index} className="">
            <div className="pb-2">{x.definition}</div>
            <div className="pt-2 text-[#84849a]">{x.example}</div>
          </li>
        ))}
      </ul>

      <div className="extras py-3">
        <Extra title="Synonyms" arr={synonyms} />
        <Extra title="Antonyms" arr={antonyms} />

        
      </div>
    </div>
  );
}