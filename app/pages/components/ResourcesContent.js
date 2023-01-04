import Link from 'next/link'
import GetConnected from './GetConnected'
import SmallBizContent from '../../page-content/BusinessResourcesContent'

const TextComponent = () => (
  <div className="mx-3 sm:mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 className="text-2xl font-extrabold text-sbaBlue md:text-3xl">
      Available Small Business Grants & Relief
    </h1>
    <p className="mt-9 text-base text-black md:text-lg">
      As America continues its economic recovery, there are a variety of
      federal, state, and local opportunities to access small business grants
      and relief. Because these options change regularly, the best way to learn
      about options available to you is through an IRC CNPP business counselor.
      Contact us today to{' '}
      <Link href="/contact">
        <u className="cursor-pointer">get connected</u>
      </Link>
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Small Business Relief Available through IRC's Center for Economic
      Opportunity (CEO)
    </h2>
    <p className="mt-9 text-base text-black md:text-lg">
      The International Rescue Committee's Center for Economic Opportunity (CEO)
      is a non-profit lender specializing in making small-dollar loans to
      refugees and immigrants. CEO is a certified by the U.S. Treasury as a
      national Community Development Financial Insitituion (CDFI) and currently
      has operations in 14 states. CEO does not charge any late fees and is
      flexible with modifying loans or deferring payments to help clients
      protect their credit and overcome financial turbulence. Some products and
      rates that are available CEO include:
      <ul className="indent my-2 list-disc pl-10">
        <li>Credit Building loans of up to $1,000 with 0% APR</li>
        <li>Business Recovery loans of up to $10,000 with 0% APR</li>
      </ul>
    </p>
    <p className="mt-3 text-base text-black md:text-lg">
      <Link href="/contact">
        <u className="cursor-pointer">Get Connected</u>
      </Link>{' '}
      with a business counselor today to learn more about how you can access
      available CEO loans.
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Available Grants & Relief
    </h2>
<p><b>Young Farmer Grant (18-40 years)</b>: The National Young Farmers Coalition – Young Farmers, has partnered with Chipotle to support young and beginning farmers and ranchers to start up and grow their businesses with a flexible funding opportunity each spring. The program provides 75 farmers and ranchers with $5,000 grants. Grant recipients also received a one-year membership to the National Young Farmers Coalition. There are no preferences for what applicants produce on their operations or for the current scale of the farm. Applications in Spanish and English are available. Application deadline is <b>January 13, 2023</b>. <u><a href="https://www.youngfarmers.org/youngfarmergrants/">Application Link</a></u> | <u><a href="https://rescue.box.com/s/ke4ppkiqamsfqux8frii2ufsbn1wabvh">Sample & FAQ</a></u></p>
<p>*** </p>
<p><b>The Fruit Guys Community Fund</b>:The Fruit Guys Community Fund grants range from $2,000 to $5,000 for projects that help small farms and orchards operate more environmentally and economically, as well as strengthen community outreach. The applicant farm must be an established working farm with at least 1 year of experience that is looking to improve operations, Farm is small to medium-sized as determined by acreage in agricultural production (less than 300 acres). Application link details project preferences. Farms can submit a Letter of Intent for the initial round via our online application portal. It will be linked on the application page during the open application window. Projects that are chosen as finalists by our public volunteer grant review committee are invited to complete a second, more-detailed application.  Applications are due <b>January 30</b>. <u><a href="https://fruitguyscommunityfund.org/apply/">Application Link</a></u></p> 
<p>*** </p>
<p><b>Farmer Veteran Fellowship Fund</b>: A small grant program that provides direct assistance to veterans who are in their beginning years of farming or ranching. The Fellowship Fund does not give money directly to the veteran, but rather to third-party vendors for items the veteran has identified will make a crucial difference in the launch of their farm business. Awards range from $1,000 to $5,000. Must have a business plan and proof of service. Application deadline is <b>February 14, 2023</b>. <u><a href="https://farmvetco.org/fvfellowship/">Application Link</a></u> | <u><a href="https://rescue.box.com/s/n87r4o6jdjbcg72jipp5aepeu41bivqd">Sample & FAQ</a></u></p>
<p>*** </p>
<p><b>Halstead Grant</b>: The Halstead Grant is an annual award for emerging silver jewelry artists. The experience is designed to help jewelry entrepreneurs create a strategy to kick-start their careers. The grand prize is a $7,500 cash grant and $1,000 in merchandise as well as recognition in the industry. Submissions are mailed and business must have started on or after 2018. Applications close <b>May 1, 2023</b>. <u><a href="https://grant.halsteadbead.com/application"> Application Link</a></u> | <u><a href="https://rescue.box.com/s/u779sfwb4vfmmyftmnfxmdlgzqmugjsr">Application Sample</a></u> | <u><a href="https://youtu.be/1pa2GOa4RPA">Video Overview</a></u></p>
<p>*** </p>
<p><b>FedEx Small Business Grant</b>: Ten Grand Prize winners receive $30,000 each. Additional prizes may be available and will be posted to the FedEx website. Opens at the end of the month, but businesses can prepare- create a FedEx account, confirm eligibility, think about a short company bio, gather logo and high-resolution photos, develop ideas for a 2-minute video, and review tips and examples on the website. Applications close <b>February 21, 2023</b>. <u><a href="https://www.fedex.com/en-us/small-business/grant-contest.html"> Application Link</a></u></p>
<p>*** </p>
</div>
)
const gridComponent = (arr) => (
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
      {arr.map((feature) => (
        <div key={feature.name} className="pt-6">
          <Link href={feature.hyperlink}>
            <div className="flow-root rounded-lg bg-gray-200 px-6 pb-8 hover:ring hover:ring-sbaBlue">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-sbaGray p-3 shadow-lg">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
const ResourcesContent = () => (
  <>
    <div className="relative mb-10 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-14 md:pb-16 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-sbaBlue xl:inline">
                  {SmallBizContent.header.title}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {SmallBizContent.header.description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={SmallBizContent.header.image}
          alt={SmallBizContent.header.imageAlt}
        />
      </div>
    </div>
    <TextComponent />
    <div className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Learning Resources
        </h2>
        <p className="mx-auto mt-10 max-w-prose text-2xl text-gray-500 underline">
          Workshops &#38; Videos
        </p>
        {gridComponent(SmallBizContent.videos)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Downloadable Learning Resources
        </p>
        {gridComponent(SmallBizContent.downloads)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Translated Documents
        </p>
        {gridComponent(SmallBizContent.documents)}
      </div>
    </div>
    <GetConnected />
  </>
)

export default ResourcesContent
