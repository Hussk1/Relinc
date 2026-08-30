export const LoaderScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#171717]">
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-[-18px] rounded-full border-2 border-primary/20 border-t-primary" />

          <img
            src="/images/favicon.webp"
            alt="Relinc"
            className="h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(171,255,61,0.45)]"
          />
        </div>

        <p className="mt-8 text-lg font-semibold text-white">
          Laddar Relinc
          <span>...</span>
        </p>
      </div>
    </div>
  );
};