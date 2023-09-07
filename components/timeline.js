export default function Timeline({ top, date, position = "left" }) {
    return (
        <div className="h-full w-fit flex flex-col items-center">
          {top && <p className="mb-5">Present Day</p>}
          <div className="w-2 h-20 bg-accent-400">
            {top && (
                <svg height="24" width="24" className="-translate-x-2 -translate-y-1 text-accent-400 ">
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                </svg>
            )}
          </div>
          <div className="grid grid-cols-3 mt-0 h-full justify-items-center">
            {position === "left" ? <p>{date}</p> : <div/>}
            <div className="h-full w-2 bg-accent-400">
              <svg height="24" width="24" className="-translate-x-2 -translate-y-1 text-accent-400 ">
                <circle cx="12" cy="12" r="12" fill="currentColor" />
              </svg>
            </div>
            {position === "right" && (<p>{date}</p>)}
          </div>
        </div>
    )
}
