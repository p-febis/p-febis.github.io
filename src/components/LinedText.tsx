export const LinedText = ({ title }: { title: string }) => (
  <div className="mb-16">
    <div className="mb-6 flex items-center gap-3">
      <div className="bg-border h-px flex-grow"></div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="bg-border h-px flex-grow"></div>
    </div>
  </div>
);
