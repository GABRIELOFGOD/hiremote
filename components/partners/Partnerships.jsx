

const Partnerships = () => {
  return (
    <div>
      <div className="flex flex-col gap-[2rem] md:flex md:flex-row md:justify-between px-[1rem] py-[2rem] mx-auto md:px-[8rem] md:py-[5rem] bg-neutral-200">
        <div className="flex-1 flex h-full justify-center flex-col gap-[1rem]">
          <h1 className="font-bold md:text-5xl text-3xl text-primary">
            Become Hiremote Partner
          </h1>
          <p className="font-medium">
            Hiremote Africa is proud to partner with governments and
            organizations to create lasting social impact through remote work
            education. Our partnerships aim to enhance employability, boost
            productivity, and provide sustainable solutions to workforce
            challenges.
          </p>
          <button className="bg-primary text-white rounded-[0.5rem] border-none outline-none px-4 py-2 w-fit">
            Become a partner
          </button>
        </div>
        <div className="">
          <img
            className="flex-[2] rounded-[1rem] md:w-full"
            src="/images/partner1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bg-white py-12 px-6">
        <div className="text-center mb-[3rem]">
          <h1 className="font-semibold text-2xl">The Partner Program</h1>
          <p>
            Join us in transforming ideas into impactful solutions. Let's grow
            together as partners.
          </p>
        </div>
        <div class="mx-auto md:px-[8rem]">
          <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                For Government
              </h2>
              <p class="text-gray-600 mb-6">
                We collaborate with government institutions to provide youth
                training for the future of work. By equipping young people with
                remote job skills, we help address unemployment and create
                opportunities for them to enter the global digital economy.
              </p>
              <h3 class="text-1xl font-semibold text-gray-800 mb-3">
                Features:
              </h3>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Job creation:</strong> Prepare young individuals for
                  in-demand remote roles.
                </li>
                <li>
                  <strong>Digital skill development:</strong> Equip participants
                  with skills aligned with global industry needs.
                </li>
                <li>
                  <strong>Long-term social impact:</strong> Address unemployment
                  challenges and foster economic growth through digital literacy
                  and employment.
                </li>
              </ul>
            </div>
            <div class="flex justify-center">
              <img
                src="/images/leader2.jpg"
                alt="Youth training for remote jobs"
                class="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div class="flex justify-between md:flex-row-reverse gap-10 items-center">
            <div className="flex-1">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                For Businesses/Organizations
              </h2>
              <p class="text-gray-600 mb-6">
                Our upskilling programs are designed to help
                businesses/organizations enhance the productivity of their staff
                without the need to expand their teams. If your organization is
                working on a tight budget, we can help your employees become
                more efficient and better equipped for remote and hybrid work.
              </p>
              <h3 class="text-1xl font-semibold text-gray-800 mb-3">
                Features:
              </h3>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Cost-effective training solutions:</strong> Upskill
                  your current workforce without the need for additional hires.
                </li>
                <li>
                  <strong>Productivity enhancement:</strong> Equip your team
                  with tools and skills to increase output and manage remote
                  operations efficiently.
                </li>
                <li>
                  <strong>Tailored programs:</strong> Customizable training
                  packages that fit your organization’s specific needs.
                </li>
              </ul>
            </div>
            <div class="flex flex-1 justify-center">
              <img
                src="/images/leader1.jpg"
                alt="Business leaders discussing training strategies"
                class="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="text-center md:px-[8rem] md:py-[3rem]">
          <h2 className="font-bold">The Partner Program</h2>
          <p>
            Join us in transforming ideas into impactful solutions. Let's grow
            together as partners.
          </p>
        </div>

        <div className=" md:px-[8rem]">
          <div>
            <h4>For Government</h4>
            <p className="flex-1">
              We collaborate with government institutions to provide youth
              training for the future of work. By equipping young people with
              remote job skills, we help address unemployment and create
              opportunities for them to enter the global digital economy.
            </p>
            <div>
              <h2>Features:</h2>
              <p>
                - Job creation: Prepare young individuals for in-demand remote
                roles.
              </p>
              <p>
                - Digital skill development: Equip participants with skills
                aligned with global industry needs.
              </p>
              <p>
                - Long-term social impact: Address unemployment challenges and
                foster economic growth through digital literacy and employment.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Partnerships;
