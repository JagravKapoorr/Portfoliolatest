import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
           Python Developer | AI/ML Explorer |
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Jagrav Kapoor, a Python-focused full‑stack developer passionate
                about building clean, efficient, and scalable applications.
                I love simplifying developer workflows and crafting tools that make coding
                faster and more intuitive.
                </p>
              <p className="text-white">
                I specialize in backend development with Django, FastAPI, and modern API
                design, while continuously improving my skills in frontend engineering.
                My goal is to build seamless, performant web applications that provide a
                great user experience end‑to‑end
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner driven by curiosity, consistency, 
                    and a desire to contribute meaningful tools to the developer 
                    ecosystem. I’m also expanding my work into Artificial Intelligence 
                    and Machine Learning, exploring ways to blend AI-assisted development 
                    with efficient full‑stack engineering. My focus is on building practical, 
                    real‑world AI solutions while continuing to grow as a backend and full‑stack developer.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Jagrav Kapoor
                    </cite>
                    <div className="flex items-center gap-2">
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
