import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link aria-label="Lee Robinson" href="/">
      <motion.svg
        className="h-[50px] md:h-[37px]"
        width="57"
        height="39"
        viewBox="0 0 57 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M3.63484 29.02H5.13484L11.6448 10.06H15.7848L22.2948 29.02H23.7948V31H15.0048V29.02H17.4048L15.9648 24.61H9.12484L7.68484 29.02H10.0848V31H3.63484V29.02ZM9.72484 22.54H15.4248L12.6048 13.72H12.4848L9.72484 22.54ZM25.0014 29.02H26.8014V11.59L25.0014 11.2V9.49L31.3614 8.2V29.02H33.1614V31H25.0014V29.02ZM39.1366 13.21C38.2966 13.21 37.6366 12.98 37.1566 12.52C36.6966 12.06 36.4666 11.44 36.4666 10.66V10.51C36.4666 9.73 36.6966 9.11 37.1566 8.65C37.6366 8.19 38.2966 7.96 39.1366 7.96C39.9766 7.96 40.6266 8.19 41.0866 8.65C41.5666 9.11 41.8066 9.73 41.8066 10.51V10.66C41.8066 11.44 41.5666 12.06 41.0866 12.52C40.6266 12.98 39.9766 13.21 39.1366 13.21ZM35.0866 29.02H36.8866V18.31L35.0866 17.92V16.21L41.4466 14.92V29.02H43.2466V31H35.0866V29.02ZM48.5484 31.36C47.6684 31.36 46.9984 31.11 46.5384 30.61C46.0784 30.09 45.8484 29.47 45.8484 28.75V28.63C45.8484 27.91 46.0784 27.3 46.5384 26.8C46.9984 26.28 47.6684 26.02 48.5484 26.02C49.4284 26.02 50.0984 26.28 50.5584 26.8C51.0184 27.3 51.2484 27.91 51.2484 28.63V28.75C51.2484 29.47 51.0184 30.09 50.5584 30.61C50.0984 31.11 49.4284 31.36 48.5484 31.36Z"
          fill="url(#paint0_linear_1_598)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_598"
            x1="50.1625"
            y1="27.444"
            x2="6.89286"
            y2="27.2935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB147" />
            <stop offset="0.520264" stopColor="#FF6C63" />
            <stop offset="1" stopColor="#B86ADF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </Link>
  );
}
