import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div
      id="testimonial"
      className="mx-auto px-6 max-w-7xl space-y-20 pt-12 lg:pt-36"
    >
      <h2
        className="font-semibold text-center text-5xl max-sm:text-3xl
         text-white tracking-wider leading-normal"
      >
        What people are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.user}
            className="flex flex-col justify-center gap-6 border
           border-amber-600 border-opacity-20 rounded-md p-6
           hover:border-amber-700 cursor-pointer max-lg:max-w-96 mx-auto
           "
          >
            <p className="text-md max-sm:text-sm tracking-wide text-white">
              {testimonial.text}
            </p>
            <div className="flex gap-4 items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-sm md:text-md">{testimonial.user}</h4>
                <p className="tetx-sm md:text-md text-gray-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
