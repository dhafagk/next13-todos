"use client";

export const Input = ({
  placeholder,
  handleSubmit,
  title,
  handleChangeInput,
}: {
  placeholder: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  return (
    <form onSubmit={() => handleSubmit}>
      <div className="form-control py-10">
        <div className="input-group input-group-sm justify-center">
          <input
            type="text"
            placeholder={placeholder}
            className="input input-sm w-full max-w-xs sm:max-w-none input-bordered"
            value={title}
            onChange={handleChangeInput}
          />
          <button className="btn btn-square btn-sm" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};
