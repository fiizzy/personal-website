export const Button = ({ link, title }: any) => {
  return (
    <a target="_blank" href={link}>
      <div className="mb-4 md:mb-0 grey-200 text-black  bg-white py-4 px-4 rounded-[10px] border border-grey-200 cursor-pointer hover:opacity-50">
        <div className=" items-center space-x-2 text-center">
          <div className="">{title}</div>
        </div>
      </div>
    </a>
  );
};
