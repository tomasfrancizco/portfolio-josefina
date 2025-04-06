"use client";
import React from "react";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

export default function SocialLinks() {
  return (
    <div className="bg-white">
      <AnimatedElement
        className="flex space-x-4 py-6 md:py-8 px-4 md:px-12 lg:px-18"
        threshold={0.2}
        delay={100}
      >
        {/* Behance */}
        <Link
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 transition-colors hover:bg-gray-900 hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 1.794 0 2.01zm6.758-7.73h-3.486v1.67h3.486c1.043 0 1.369-1.67 0-1.67zm-6.758 3.73h-2.228v-2.01h2.261c1.616 0 1.766 2.01 0 2.01zm10.661-7.01h-14.667v-2h14.667v2zm-14.667 16h-1.989v-14h16.977v14h-14.988zm8.624-3.939c1.2.41 1.607 1.938 1.179 2.998-.331.811-1.022 1.155-1.845 1.267-.555.07-1.109.06-1.668.06v.584h-2.627c0-2.837.049-5.628 0-8.382h4.705c1.523 0 2.666.65 3.033 1.976.36 1.358-.036 2.868-1.381 3.53.244.236.478.472.604.769z" />
          </svg>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 transition-colors hover:bg-gray-900 hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </Link>

        {/* Twitter */}
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 transition-colors hover:bg-gray-900 hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </Link>

        {/* Dribbble */}
        <Link
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 transition-colors hover:bg-gray-900 hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
          </svg>
        </Link>
      </AnimatedElement>
    </div>
  );
}
