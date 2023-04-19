export const Button = ({ link, title }: any) => {
  return (
    <a target="_blank" href={link}>
      <div className="grey-200 text-black  bg-white py-4 px-4 rounded-[10px] border border-grey-200 cursor-pointer hover:opacity-50">
        <div className="flex items-center space-x-2">
          <div>{title}</div>
        </div>
      </div>
    </a>
  );
};
