export const ROLE_TAG = "<developer>";

export default function InfoCard() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-x-5">
          <div className="pt-5 md:pt-0">
            <img
              src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg"
              className="w-full bg-yellow-200"
            />
          </div>
          <div className="md:col-span-2 pt-3 md:pt-0 text-white">
            <p className="text-center text-2xl"> {ROLE_TAG} </p>
            <h2 className="text-center pt-2">
              Hi, I'm Jake!
            </h2>
            <p className="text-center pt-3">
        I'm an enthusiastic
              <span className="font-bold text-blue-100"> junior developer </span>
              based in Yorkshire with a solid background in software and web development using
              <span className="font-bold text-blue-100"> agile methodologies</span>.
              My entrance into the tech realm began with a deep-seated drive to tackle challenges through coding, and I've been embarking on a thrilling path of perpetual growth ever since.
            </p>
          </div>
        </section>
    );
}
