type Props = {
  color?: string;
};

const OpenTabIcon = ({ color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in ${color ? `text-${color}` : ""}`}
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <rect x="3" y="7" width="14" height="14" rx="2" ry="2" />
  </svg>
);

export default OpenTabIcon;
