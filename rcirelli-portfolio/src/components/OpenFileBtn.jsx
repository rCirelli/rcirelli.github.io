import Translate from "./Translate";

function OpenFileBtn({ file }) {
  return (
    <a
      className="flex space-x-2 justify-center w-fit rounded-lg
      relative overflow-hidden border border-cyan-400 group focus:outline-none focus:ring"
      href={file}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span class="absolute inset-y-0 left-0 w-0 transition-all duration-150 ease-in-out bg-cyan-400 group-hover:w-full group-active:bg-cyan-500" />
        <span class="pl-6 pr-5 py-3.5 leading-6 relative text-sm font-semibold text-slate-200 transition-colors group-hover:text-slate-900 flex gap-3">
          <Translate>View Resume</Translate>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-file-text"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <line x1="9" y1="9" x2="10" y2="9"></line>
            <line x1="9" y1="13" x2="15" y2="13"></line>
            <line x1="9" y1="17" x2="15" y2="17"></line>
          </svg>
        </span>
      </div>
    </a>
  );
}

export default OpenFileBtn;
