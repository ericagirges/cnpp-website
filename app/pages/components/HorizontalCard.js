const HorizontalCard = () => {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="bg-sbaBlue pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://i.ibb.co/t4Msj7p/hcard.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center lg:col-span-2 lg:m-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20 ">
              <div>
                <p className="font-base mt-6 text-3xl text-white md:text-5xl">
                  How can CNPP help you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HorizontalCard
