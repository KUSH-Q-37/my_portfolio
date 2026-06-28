function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-slate-300 leading-8 text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
