import Image from "next/image"
import Link from "next/link"
import styles from '../public/css/custom.module.css';

export interface IAccessory {
  id: string
  toolId: string
  name: string
  type: string
  sku: string
  prevPrice: string
  currentPrice: string
  fee: string
  url: string
}

interface IAccessoryProps {
  accessory: IAccessory,
  handleCart: (cart: boolean) => void,
}

const Accessory = (props: IAccessoryProps) => {

  const handleCart = () => {
    props.handleCart(true);
  }

  return (
    <div className="col-span-1 bg-gray-200 bg-[url('/elwotools-border-white.png')] bg-no-repeat bg-center bg-contain">
      <div className="relative">
        <div className={`rounded-bl-lg bg-red-600 text-sm text-white py-3 px-3 ${styles.wishlist}`}>
          Wish
        </div>
      </div>
      <Link href={`/tool/${props.accessory.toolId}/accessory/${props.accessory.id}`} className="py-5">
        <div className="my-3 px-5">
          <h1 className="text-red-600 text-xl font-black text-left">BOSCH</h1>
          <Image
            className="mx-auto"
            src={props.accessory.url}
            alt="Accessory Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="py-3 text-center">
          <p className="text-xl font-black px-3">{props.accessory.name}</p>
          <p className="text-lg py-2">{props.accessory.type}</p>
          <div className="mx-auto">
            <div className="flex items-center justify-center pb-3">
              <div className="flex justify-center items-center">
                <span className="text-md font-black z-20"><span className={styles.accessoryList}>{props.accessory.prevPrice + ':-'}</span></span>
                <span className="ml-2 text-red-600 text-xl font-black">{props.accessory.currentPrice + ':-'}</span>
              </div>
              {/* <div className="relative">
                <div className={`absolute text-red-600 text-xl ${styles.accessoryListFee1}`}>{'-'}</div>
              </div> */}
              <div className="relative flex justify-center items-center">
                <div className={`absolute text-white text-xl font-black ${styles.accessoryListFee2}`}>{'-'}</div>
                <div className="ml-1 bg-red-600 text-white text-md font-black rounded-sm">
                  <p className="ml-2 mr-1">{props.accessory.fee + '%'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="">
        <button className="bg-green-600 hover:bg-green-800 text-white py-3 w-full flex justify-center items-center" onClick={handleCart}>
          <p>Add to cart</p>
          <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
            <g transform="translate(0 0)">
              <g>
                <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Accessory;
