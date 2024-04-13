export default function InfoCursosBar() {
  return (
    <>
      <div className="flex space-x-2 stats text-xs p-1 ">
        <div className="stat flex space-x-0.5 place-items-center justify-center">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          </div>
          <div className="stat-desc">4.5</div>
          <div className="stat-value text-gray-500">(31K)</div>
        </div>

        <div className="stat flex space-x-1 place-items-center justify-center">
          <div className="stat-figure text-secondary">
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 210.233 210.233"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M208.351,97.776c-1.17-0.726-2.626-0.788-3.858-0.174l-41.859,20.929v-17.387c0-10.933-8.879-19.827-19.794-19.827
            H19.794C8.879,81.317,0,90.211,0,101.144v75.378c0,10.934,8.879,19.828,19.794,19.828h123.044
            c10.916,0,19.795-8.894,19.795-19.827v-13.42l41.859,20.93c1.232,0.61,2.688,0.546,3.858-0.174
            c1.17-0.723,1.883-1.999,1.883-3.374V101.15C210.233,99.775,209.521,98.498,208.351,97.776z M202.3,174.064l-41.859-20.93
            c-1.232-0.612-2.692-0.548-3.858,0.174c-1.17,0.723-1.883,1.999-1.883,3.374v19.839c0,6.558-5.322,11.894-11.861,11.894H19.794
            c-6.539,0-11.861-5.336-11.861-11.894v-75.379c0-6.558,5.322-11.894,11.861-11.894h123.044c6.539,0,11.862,5.336,11.862,11.894
            v23.806c0,1.375,0.713,2.652,1.883,3.374c1.166,0.722,2.622,0.785,3.858,0.174l41.859-20.929V174.064z"
                    />
                    <path
                      d="M105.117,73.383c16.405,0,29.75-13.345,29.75-29.75c0-16.405-13.345-29.75-29.75-29.75
            c-16.405,0-29.75,13.345-29.75,29.75C75.367,60.038,88.712,73.383,105.117,73.383z M105.117,21.817
            c12.028,0,21.817,9.787,21.817,21.817c0,12.03-9.789,21.817-21.817,21.817S83.3,55.663,83.3,43.633
            C83.3,31.603,93.089,21.817,105.117,21.817z"
                    />
                    <path
                      d="M49.583,73.383c12.028,0,21.817-9.787,21.817-21.817c0-12.03-9.789-21.816-21.817-21.816s-21.817,9.787-21.817,21.817
            C27.766,63.597,37.556,73.383,49.583,73.383z M49.583,37.683c7.654,0,13.883,6.229,13.883,13.883S57.238,65.45,49.583,65.45
            c-7.655,0-13.883-6.229-13.883-13.883S41.929,37.683,49.583,37.683z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="stat-value">2</div>
          <div className="stat-title">sessions</div>
        </div>

        <div className="stat flex space-x-0.5 place-items-center justify-center">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9.03V7h2v5l4.25 2.52-.75 1.23L11 13.97z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div className="stat-value">8</div>
          <div className="stat-title">hours</div>
        </div>
      </div>
    </>
  );
}
