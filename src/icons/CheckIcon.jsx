export default function CheckIcon({ size = 24, color = "#2cb879" }) {
  return (
    <svg
      style={{ color: color }}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check h-4 w-4 text-ingredient-available shrink-0"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}
