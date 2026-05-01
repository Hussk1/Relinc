import { ArrowRight } from "lucide-react";

export const TextImageBlock = () => {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h2 className="text-[42px] font-medium leading-12 mb-6">
            Starta ditt företag med rätt grund
          </h2>
          <p className="py-1 text-lg font-medium leading-6">
            Vi hjälper dig att förverkliga din idé och finns med dig hela vägen
            från första tanke till färdigt varumärke och digital närvaro. Vi
            bygger en stark grund genom att skapa din företagsidentitet med
            logotyp, grafisk profil och design som speglar ditt företag, och
            därefter utvecklar vi en modern och professionell webbplats anpassad
            efter dina mål som hjälper dig att nå dina kunder.
          </p>
          <p className="py-1 text-lg font-medium leading-6">
            Bygg ditt paket efter dina behov.
          </p>
          <p className="py-4 text-lg font-medium leading-6">Från 12 900 kr.</p>
          <div className="inline-block">
            <a
              href=""
              className="flex items-center gap-2 h-10 px-6 rounded-full bg-secondary font-semibold text-[#1b1b1b] leading-none"
            >
              Till erbjudandet
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
        <div>
          <img src="../images/textimageblock-1.webp" alt="" />
        </div>
      </div>
    </section>
  );
};
