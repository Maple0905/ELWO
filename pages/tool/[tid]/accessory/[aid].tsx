import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../../../../public/css/custom.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

interface IAccesorryDetail {
  id: string,
  name: string,
  type1: string,
  type2: string,
  description: string,
  prevPrice: string,
  currentPrice: string,
  fee: string,
  imgs: string[]
}

export default function AccessoryDetail() {

  const router = useRouter();
  const { tid, aid } = router.query;

  const [ ratingValue, setRatingValue ] = useState(0);
  const [ ratingHover, setRatingHover ] = useState(-1);
  const [ cartCount, setCartCount ] = useState(1);
  const [ accessory, setAccessory ] = useState<IAccesorryDetail>({
    id: "",
    name: "",
    type1: "",
    type2: "",
    description: "",
    prevPrice: "",
    currentPrice: "",
    fee: "",
    imgs: [],
  });

  useEffect(() => {
    let isMounted = true;

    const getAccessoryData = async () => {
      try {
        await axios.get(`${process.env.API_URL}/products/${aid}`)
          .then((res) => {
            const data = res.data;

            let imgData: string[] = [];
            imgData.push(data['image'].imageUrl);
            // data['images'].map((item: any) => {
            //   const url = item.imageUrl;
            //   imgData.push(url);
            // });

            if (isMounted) {
              setAccessory({
                id: typeof tid === 'string' ? tid : '',
                name: data.description.name,
                description: data.description.description,
                type1: "TELCO S2",
                type2: "ART NR " + data.sku,
                prevPrice: "2.545",
                currentPrice: "1.795",
                fee: "15",
                imgs: imgData
              });
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }

    getAccessoryData();

    return () => {
      isMounted = false;
    }
  }, [tid, aid]);

  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <Link href={`/tool/${tid}`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 px-5 bg-[url('/elwotools-green.png')] bg-no-repeat bg-center bg-contain">
            <div>
              <Carousel showThumbs={true} thumbWidth={100}>
                {
                  accessory.imgs.map((item, index) => 
                    <div key={index}>
                      <img src={item} />
                      {/* <div className="carousel=image-wrapper">
                        <Image src={item} alt="Accessory Image" layout="fill" objectFit="cover" />
                      </div> */}
                    </div>
                  )
                }
              </Carousel>
            </div>
          </div>
          <div className="col-span-1 px-5 flex flex-col justify-between">
            <div className="">
              <div>
                <p className="text-xl font-semibold">{accessory.type1}</p>
                <p className="text-xl">{accessory.type2}</p>
              </div>
              <div className="py-5">
                <p className="text-5xl font-bold mb-1">{accessory.name}</p>
              </div>
              <div className="pb-8">
                <p className="text-xl">{accessory.description}</p>
              </div>
            </div>
            <div className="">
              <div className="flex pb-3 w-full">
                <div className="flex justify-content-center items-center">
                  <span className="text-4xl font-black z-20"><span className={styles.accessoryDetail}>{accessory.prevPrice + ':-'}</span></span>
                  {/* <div className="relative">
                    <div className={`absolute text-5xl ${styles.accessoryDetailFee3}`}>{'-'}</div>
                  </div> */}
                  <span className="ml-1 text-red-600 text-5xl font-black">{accessory.currentPrice + ':-'}</span>
                </div>
                {/* <div className="relative">
                  <div className={`absolute text-red-600 text-5xl ${styles.accessoryDetailFee1}`}>{'-'}</div>
                </div> */}
                <div className="relative">
                  <div className={`absolute text-white font-black text-5xl ${styles.accessoryDetailFee2}`}>{'-'}</div>
                  <div className="ml-2 bg-red-600 text-white text-4xl font-black rounded">
                    <div className="ml-3 mr-1 py-1">{accessory.fee + '%'}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 pr-5">
                <div className="col-span-1 sm:col-start-6 sm:col-span-7">
                  <div className="grid justify-items-center py-5">
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={ratingValue}
                        precision={0.1}
                        onChange={(event, newValue: any) => {
                          setRatingValue(newValue);
                        }}
                        onChangeActive={(event, newHover: any) => {
                          setRatingHover(newHover);
                        }}
                        size="large"
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      {ratingValue !== null && (
                        <Box className="text-sky-600 text-xl my-auto" sx={{ ml: 2 }}>{ratingValue}</Box>
                      )}
                    </Box>
                  </div>
                  <div className="grid justify-items-center">
                    <div className="flex w-full">
                      <input type="number" className="w-20 p-2.5 z-20 text-lg text-gray-900 border-4 border-green-700" min={1} value={cartCount} onChange={(e) => setCartCount(parseInt(e.target.value))} />
                      <div className="top-0 right-0 left-20 p-2.5 w-full flex items-center text-lg font-medium text-white bg-green-700 border border-green-700 hover:bg-green-800">
                        <svg className="mx-auto my-auto flex items-center" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                          <g transform="translate(0 0)">
                            <g>
                              <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                              <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                              <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
