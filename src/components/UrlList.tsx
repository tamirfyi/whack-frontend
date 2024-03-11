import axios from 'axios';
import { useEffect, useState } from 'react';

const getUrls = async (setUrls: any) => {
  try {
    await axios.get('http://localhost:3000/url').then((res) => {
      console.log(res.data);
      setUrls(res.data);
    });
  } catch (error) {}
};

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls(setUrls);
  }, []);

  return (
    <section>
      <p className="font-semibold">recently created links:</p>
      {urls.map(
        (url: {
          id: string;
          original: string;
          short: string;
          createdAt: string;
          updatedAt: string;
        }) => {
          return (
            <div>
              <p>
                {`${url.original} -> `}
                <span>
                  <a
                    href={`http://localhost:3000/url/${url.short}`}
                    target="_blank"
                    className="text-gray-400 transition hover:text-gray-700 ease"
                  >{`whack.sh/${url.short}`}</a>
                </span>
              </p>
            </div>
          );
        }
      )}
    </section>
  );
};

export default UrlList;
