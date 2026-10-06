export const Button = ({ link, title }: { link: string; title: string }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="group inline-flex h-11 items-center gap-2 rounded-xl bg-fg px-5 text-4 font-normal text-bg transition-[background-color,transform] duration-200 hover:bg-fg/85 active:scale-[0.98]"
    >
      {title}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        <path
          d="M5 11 11 5M6 5h5v5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};
