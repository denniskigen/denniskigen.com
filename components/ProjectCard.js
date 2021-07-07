export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        {icon == "reactweather" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">React Weather</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 bg-green-200 stroke-current text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
        )}
        {icon == "ampathforms" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">AMPATH Forms</span>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <path d="M104.9 99.3c-5.7 3.8-7.9 8.1-7.9 15.2 0 5.3.4 6.8 2.9 10.2 6.2 8.6 18.7 9.8 26.5 2.5 8-7.5 7.2-20.8-1.7-27.3-5.3-3.9-14.5-4.2-19.8-.6zM159.4 98.9c-7.8 4.7-10.8 16-6.5 23.8 6.8 11.9 23.9 12.3 30.7.7 2.3-3.8 2.6-5.4 2.2-10.5-.5-6.6-2.4-10-7.8-13.7-4.4-2.9-14-3.1-18.6-.3zM214.1 98.7c-1.8.9-4.5 3.4-6 5.7-2.1 3.2-2.6 5.1-2.6 10.2 0 5.4.4 6.7 3.1 10.1 5.9 7.4 15.1 9.4 22.9 5 12.4-7 12-24.7-.7-31.3-3.6-1.9-12.5-1.7-16.7.3zM267.9 99.3c-11.9 8-11.3 24.4 1.2 30.7 7.8 4 16.5 1.9 22.3-5.3 2.7-3.4 3.1-4.7 3.1-10.1 0-11.1-6.5-17.6-17.8-17.6-4 0-6.3.6-8.8 2.3zM322 99.2c-5.4 3.7-7.3 7.1-7.8 13.7-.4 5.1-.1 6.7 2.2 10.5 6.8 11.6 23.9 11.2 30.7-.7 4.4-8 .9-20.1-7.1-24.2-4.6-2.4-14-2-18 .7zM375.3 99.9c-13.8 10-6.5 32.2 10.5 32.1 14.9-.1 23.1-17.6 13.6-29-3.8-4.4-7.5-6-14.2-6-4.9 0-6.6.5-9.9 2.9zM106.5 152.6c-7 3.6-9.5 7.9-9.5 16.2 0 10.1 5.8 16.3 15.9 17 5.1.4 6.7.1 10.5-2.2 11.5-6.7 11.2-23.9-.5-30.5-4.4-2.5-12.1-2.8-16.4-.5zM159.5 153.3c-7.8 4.4-10.8 15.2-6.5 23.7 2.8 5.5 7.2 8.3 14.1 8.8 6.9.5 11.9-1.6 15.7-6.6 2.3-3.1 2.7-4.5 2.7-10.6 0-5.8-.4-7.7-2.3-10.4-5.1-7-15.9-9.3-23.7-4.9zM215.5 152.3c-1.7.8-4.5 3-6.2 5-9.7 11.1-1.7 28.7 13.1 28.7 18.1 0 25-21.5 10.4-32.3-3.5-2.6-13-3.3-17.3-1.4zM269.5 152.4c-6.5 2.8-11.4 12-10.1 18.9.8 4.2 4.1 9.3 7.8 12 4.2 3.2 13.6 3.5 18.5.8 9.9-5.6 12.3-18.5 5-26.8-1.7-2-4.6-4.2-6.4-4.9-4.1-1.7-10.9-1.7-14.8 0zM322.8 153c-5.4 2.9-8.1 7.3-8.6 14.1-.5 6.9 1.6 11.9 6.6 15.7 3.1 2.3 4.5 2.7 10.6 2.7 5.8 0 7.7-.4 10.4-2.3 10.1-7.2 9.4-23.9-1.3-29.9-5.1-2.9-12.5-3-17.7-.3zM377 153c-8.1 4.9-11.1 14.9-7 23.4 5.3 11.1 21.4 13.1 29.3 3.7 6.7-8 5.4-19.4-2.9-25.8-5-3.7-14.2-4.4-19.4-1.3zM106.2 207.1c-5.7 2.9-8.5 7-9 13.5-.6 6.9.2 9.6 3.8 13.8 8.3 9.4 22.6 7.9 28.7-2.9 8.5-15.1-8-32.3-23.5-24.4zM161.5 206.3c-4.3 2-9.3 8-10.1 12.2-.9 5.1.1 11.4 2.4 14.4 4.6 6.3 12.5 9.2 19.3 7.2 19.1-5.7 16.4-33.5-3.4-34.8-3-.2-6.5.2-8.2 1zM215.5 206.7c-4.4 2.3-6.5 4.4-8.6 8.5-5.4 10.6 1.6 23.5 13.8 25.4 3.5.5 5.3.1 9.7-2 4.7-2.3 5.9-3.5 8.2-8.2 3.2-6.5 2.8-11.6-1.2-17.7-4.4-6.8-15-9.7-21.9-6zM269.3 206.9c-5 2.3-8.9 7.8-9.9 13.8-.5 3.5-.1 5.3 2 9.7 2.3 4.7 3.5 5.9 8.2 8.2 4.4 2.1 6.2 2.5 9.7 2 12.2-1.9 18.9-14.1 13.8-25.1-2.2-4.8-4.4-6.9-9.4-9-4.8-2-9.3-1.9-14.4.4zM324.5 206.5c-7.1 3.3-10.5 8.7-10.5 16.6 0 15.2 17.3 23.1 29.1 13.2 7.8-6.6 7.9-19.3.3-26.5-5.2-4.8-12.8-6.2-18.9-3.3zM378.5 206.6c-4.4 2.2-7.6 5.5-9.1 9.1-6.2 14.5 8.7 29.8 22.8 23.5 14.3-6.3 15.2-25.5 1.5-32.1-5.1-2.5-11-2.7-15.2-.5zM108 260.6c-7.4 3.2-11 8.6-11 16.4 0 6.7 2.4 11.5 7.2 14.8 11.4 7.5 26.5.4 27.6-13.1.7-8.6-3.6-15.5-11.5-18.3-4.9-1.7-8-1.7-12.3.2zM161.5 260.9c-18.9 8.7-10.4 37.1 10.2 33.8 13.2-2.2 19.1-19.6 10-29.6-2.8-3-9.4-6.1-13.2-6.1-1.6 0-4.8.9-7 1.9zM217.8 260c-10.4 3.1-15.7 15.3-10.9 24.8 2.3 4.6 4.6 6.7 9.4 8.7 10.7 4.5 22.4-2.4 24.3-14.2.5-3.5.1-5.3-2-9.7-2.2-4.6-3.5-5.9-7.8-8-5.3-2.7-8.3-3-13-1.6zM269.3 261.5c-4.4 2.2-5.7 3.5-7.9 8.1-2.1 4.4-2.5 6.2-2 9.7 1.9 11.8 13.6 18.7 24.3 14.2 5-2.1 7.2-4.2 9.4-9 5.1-11.1-1.8-23.5-14.1-25.1-3.6-.4-5.5 0-9.7 2.1zM325 260.6c-7.4 3.2-11 8.6-11 16.5 0 15.2 17.4 23.5 28.7 13.6 10.2-8.9 8.1-24.2-4.2-29.8-4.8-2.2-8.8-2.3-13.5-.3zM379.7 260.4c-4.8 1.8-7.4 4.1-9.8 8.8-7.6 15 8.4 31.2 23.5 23.8 13.8-6.6 13.3-25.7-.9-32.1-4.7-2.2-7.7-2.3-12.8-.5zM107 315.1c-3.2 1.3-6.8 4.7-8.6 8.1-1.8 3.6-1.8 13.1.1 16.8 4.1 8 16.2 11.5 24.2 7.1 15.9-9 9.8-33.3-8.3-33-2.7 0-6 .5-7.4 1zM162 314.7c-13.3 5.4-14.9 25-2.5 32 7.8 4.4 18.6 2.1 23.6-4.9 3.1-4.3 3.8-13.2 1.4-18.2-2.9-6-7.7-9-14.9-9.3-3.3-.1-6.8 0-7.6.4zM214 316.1c-7.1 4.1-10.6 13.4-8.1 21.2 1.6 4.6 8 10.4 12.6 11.3 5.1.9 11.4-.1 14.4-2.4 9-6.6 10.3-19 2.8-27.1-4.9-5.3-15.3-6.8-21.7-3zM267.9 316.3c-6.9 4.6-10.1 12.6-8 19.8 4.2 13.9 21.2 17.5 30.8 6.6 7.2-8.2 4.9-21.2-4.8-26.6-5.2-3-13.5-2.8-18 .2zM323.2 315.6c-1.8 1-4.5 3.3-6 5.2-2.3 3.1-2.7 4.5-2.7 10.6 0 5.8.4 7.7 2.3 10.4 7.3 10.2 23.8 9.3 30-1.6 4.3-7.7 2-18.4-5-23.3-4.3-3.1-13.8-3.7-18.6-1.3zM376.3 316.5c-11.3 6.8-10.8 23.9 1 30.6 5.5 3 14.1 2.4 19.1-1.5 8.3-6.3 9.6-17.7 2.9-25.7-5.4-6.4-15.5-7.9-23-3.4zM106.3 369.9c-6.1 2.8-9.3 8.1-9.3 15.4 0 6.6 1.6 10.3 6 14.1 8.8 7.3 22.5 4.4 27.1-5.8 7.2-15.8-8-30.8-23.8-23.7zM161.5 369.4c-7.3 3.3-10.9 9.4-10.3 17.7 1.1 14.7 17.6 21.7 28.9 12.2 9.3-7.8 7.4-24-3.4-29.2-4.9-2.4-10.8-2.6-15.2-.7zM215.1 369.8c-8.9 4.5-12.4 14.8-8.1 23.6 6.8 14.1 26.6 13.1 32.5-1.6 5.8-14.5-10.5-29.1-24.4-22zM268.5 370.3c-10.8 6.1-12.3 20.4-2.9 28.6 9 7.9 22.2 5.3 27.4-5.5 7.5-15.5-9.5-31.6-24.5-23.1zM323.2 370.1c-10.7 5.4-12.5 21.4-3.3 29.2 8 6.7 19.4 5.4 25.7-2.9 3.9-5 4.5-13.6 1.5-19.1-4.8-8.4-15.3-11.6-23.9-7.2zM378.5 369.4c-15.6 7-13.1 30 3.6 33.7 12.3 2.8 24.1-9.3 20.8-21.3-.6-2.4-2-5.6-3.2-7.2-4-5.6-14.4-8.2-21.2-5.2z" />
            </svg>
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
