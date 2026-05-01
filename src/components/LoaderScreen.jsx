import { motion } from "framer-motion";

export const LoaderScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f7f1e7]">
      {/* Marbella atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, rgba(255,214,170,0.28) 0%, transparent 34%),
            radial-gradient(circle at 82% 18%, rgba(111,168,201,0.16) 0%, transparent 34%),
            linear-gradient(180deg, #f9f5ee 0%, #f5ede3 52%, #efe4d3 100%)
          `,
        }}
      />

      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16),transparent,rgba(214,191,160,0.10))]" />

      <div className="relative flex flex-col items-center justify-center">
        {/* logo / icon */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex items-end justify-center"
        >
          <svg
            width="260"
            height="220"
            viewBox="0 0 260 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_20px_40px_rgba(174,146,107,0.18)]"
          >
            {/* island */}
            <ellipse cx="130" cy="150" rx="72" ry="14" fill="#5a4a3d" opacity="0.95" />

            {/* left palm */}
            <path
              d="M88 73C82 104 84 124 95 150"
              stroke="#3f342d"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path d="M86 66C73 58 60 58 48 65" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M87 64C77 49 62 44 47 45" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M88 63C89 47 82 35 69 26" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M89 64C101 49 117 43 134 45" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M89 66C104 60 118 61 131 69" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />

            {/* right palm */}
            <path
              d="M173 90C169 112 168 129 160 150"
              stroke="#3f342d"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path d="M176 85C188 78 200 79 211 87" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M174 83C183 70 197 64 210 64" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M173 82C173 67 180 56 191 48" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M172 83C162 70 148 64 135 66" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />
            <path d="M171 85C158 79 145 80 133 88" stroke="#3f342d" strokeWidth="5" strokeLinecap="round" />

            {/* birds */}
            <path d="M132 36C138 27 146 24 154 22C149 28 144 34 132 36Z" fill="#3f342d" />
            <path d="M146 56C156 43 170 38 184 35C175 45 166 54 146 56Z" fill="#3f342d" />
            <path d="M110 28C118 20 127 17 136 16C130 22 124 28 110 28Z" fill="#3f342d" />

            {/* luxury car silhouette */}
            <path
              d="M92 139C96 130 105 124 117 122H146C154 122 161 125 166 131L174 139H180C184 139 187 142 187 146V149H181C180 154 176 158 170 158C164 158 160 154 159 149H108C107 154 103 158 97 158C91 158 87 154 86 149H80V146C80 142 83 139 87 139H92Z"
              fill="#c3975d"
            />
            <path
              d="M111 124L102 138H167L158 128C155 125 151 124 147 124H111Z"
              fill="#d8b07a"
            />
            <circle cx="97" cy="149" r="8" fill="#3f342d" />
            <circle cx="170" cy="149" r="8" fill="#3f342d" />

            {/* sea lines */}
            <path d="M80 166C101 172 122 173 147 170C162 168 176 167 190 169" stroke="#1f99c6" strokeWidth="3" strokeLinecap="round" />
            <path d="M88 174C107 179 126 180 145 177C160 175 172 174 182 176" stroke="#1f99c6" strokeWidth="3" strokeLinecap="round" />
            <path d="M95 182C111 186 126 187 141 184C153 182 164 181 174 183" stroke="#1f99c6" strokeWidth="3" strokeLinecap="round" />
            <path d="M102 190C116 193 128 194 140 192C150 190 159 189 166 190" stroke="#1f99c6" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#c3975d]">
            Marbella Luxury Rental
          </p>
          <h2 className="mt-4 font-['Playfair_Display'] text-4xl text-[#4d4036] sm:text-5xl">
            Preparing Your
            <span className="block italic text-[#6fa8c9]">Arrival</span>
          </h2>
        </motion.div>

        {/* loading dots */}
        <div className="mt-8 flex items-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-3 w-3 rounded-full bg-[#c3975d]"
              animate={{
                y: [0, -8, 0],
                opacity: [0.35, 1, 0.35],
                scale: [0.95, 1.15, 0.95],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};