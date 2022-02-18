import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const CountryDetails = () => {
  const { country } = useParams();

  const [currentCountry, setCurrentCountry] = useState();

  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get(
          `http://api.countrylayer.com/v2/alpha/${country}?access_key=${process.env.REACT_APP_COUNTRY_LAYER}`
        );
        setCurrentCountry(res.data);
      } catch (error) {
        setError(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    if (country) getCountry();
  }, [country]);

  return (
    <div className="bg-white m-20 flex-1">
      {error ? (
        <div className="my-auto py-16 sm:py-32 relative  mx-auto">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            {error.status} {error.statusText}
          </p>
          <h1 className="mt-2 text-1xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
            {error.data.error.message}
          </h1>
          <p className="mt-2 text-base text-gray-500">
            {error.data.error.code}
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Go back home<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      ) : currentCountry ? (
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
            <img
              src={`https://www.countryflags.io/${currentCountry.alpha2Code}/flat/64.png`}
              alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
              className="h-full w-full object-center object-contain lg:h-full lg:w-full"
            />
          </div>

          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-gray-500">
                {currentCountry.region}
              </h2>
              <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
                {currentCountry.name}
              </p>
              <p className="mt-4 text-gray-500">{currentCountry.capital}</p>

              <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {currentCountry.altSpellings.map((altSpelling) => (
                  <div key={altSpelling}>
                    <dt className="font-medium text-gray-900">{altSpelling}</dt>
                    {/* <dd className="mt-2 text-gray-500">
                      {altSpelling.description}
                    </dd> */}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ) : (
        <div className="content-center flex-1 flex justify-content-center">
          <ClipLoader loading={isLoading} size={150} />
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
