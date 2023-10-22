import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import AccessoryList from '@/components/AccessoryList';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ITool } from '@/typedefs';
import { AppDispatch, RootState } from '@/store';
import { fetchAccessoryList } from '@/features/accessorySlice';
import { useDispatch } from 'react-redux';

export default function ToolDetail() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const toolCode = typeof router.query.tid === 'string' ? router.query.tid : '';
  const searchTools = useSelector((state: RootState) => state.tools.tools);
  const currentTool = searchTools.find((item: ITool) => item.code === toolCode);
  const accessoryList = useSelector((state: RootState) => state.accessory.accessoryList);
  const accessoryTypeList = useSelector((state: RootState) => state.accessory.accessoryTypeList);

  const [cart, setCart] = useState(false);

  const handleCart = () => {
    setCart(true);
  }

  useEffect(() => {
    dispatch(fetchAccessoryList(currentTool?.code));
  }, [currentTool?.code, dispatch, toolCode]);

  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <Link href={`/`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        {
          cart == true ? 
          <div className="">
            <div className="pt-8 bg-[url('/elwotools-green.png')] bg-no-repeat bg-bottom bg-cover">
              <Image className="mx-auto" src="/cart-check.png" alt="Cart Check" width={150} height={150} />
            </div>
            <div className="pt-5 text-center">
              <p className="text-4xl font-bold">Added to cart!</p>
            </div>
          </div>
          :
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="col-span-1 px-5 bg-[url('/elwotools-green.png')] bg-no-repeat bg-center bg-contain">
                <div className="grid grid-cols-2">
                  <div className="col-start-2 col-span-1">
                    <Image className="mx-auto my-auto" src={currentTool?.url ?? ''} alt="Tool Logo" width={400} height={400} />
                  </div>
                </div>
              </div>
              <div className="col-span-1 pt-5 sm:pt-0 px-5 mx-auto my-auto">
                <p className="opacity-75 text-lg mb-2">My selected tool</p>
                <p className="text-3xl font-bold mb-1">{currentTool?.name}</p>
                <p className="text-xl">{currentTool?.description}</p>
              </div>
            </div>
            <div className="py-8">
              {
                accessoryList.length == 0 ?
                <p className="text-lg mb-2">No accessories found.</p>
                :
                <p className="text-lg mb-2">Accessories compatible with this tool :</p>
              }
            </div>
          </div>
        }
        <div className="">
          <AccessoryList accessoryList={accessoryList} accessoryTypeList={accessoryTypeList} handleCart={handleCart} />
        </div>
      </div>
    </Layout>
  )
}
