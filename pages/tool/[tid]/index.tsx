import { useState, useEffect } from 'react';
import { IAccessory } from '@/components/Accessory';
import AccessoryList from '@/components/AccessoryList';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

interface ITool {
  accessoryList: IAccessory[],
  name: string,
  description: string,
  url: string
}

export default function ToolDetail() {

  const router = useRouter();
  const toolId = typeof router.query.tid === 'string' ? router.query.tid : '';

  const [cart, setCart] = useState(false);
  const [tool, setTool] = useState<ITool>({
    accessoryList: [],
    name: "",
    description: "",
    url: "",
  });

  const handleCart = () => {
    setCart(true);
  }

  useEffect(() => {
    let isMounted = true;

    const getToolDetail = async () => {
      try {
        await axios.get(`${process.env.API_URL}/products/${toolId}`)
          .then(async (res) => {
            const toolCode = res.data.sku;
            const toolName = res.data.description.name;
            const toolDescription = res.data.description.description;
            const toolUrl = res.data.image.imageUrl;

            await axios.get(`${process.env.API_URL}/products?page=0&count=20&fitment=${toolCode}&lang=sv`)
              .then((res) => {
                const data = res.data;
    
                let accessoryData: IAccessory[] = [];
                data['products'].map((item: any) => {
                  const accessory: IAccessory = {
                    id: item.id,
                    toolId: toolId,
                    name: item.description.name,
                    type: item.type.description.name,
                    sku: item.sku,
                    prevPrice: "2.545",
                    currentPrice: "1.745",
                    fee: "15",
                    url: item.image.imageUrl
                  };
                  accessoryData.push(accessory);
                });

                if (isMounted) {
                  setTool({
                    accessoryList: accessoryData,
                    name: toolName,
                    description: toolDescription,
                    url: toolUrl
                  });
                }
              })
              .catch((err) => console.log(err));
          })
      } catch (err) {
        console.log(err);
      }
    }

    getToolDetail();

    return () => {
      isMounted = false;
    }

  }, [toolId]);

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
                    <Image className="mx-auto my-auto" src={tool.url} alt="Tool Logo" width={400} height={400} />
                  </div>
                </div>
              </div>
              <div className="col-span-1 pt-5 sm:pt-0 px-5 mx-auto my-auto">
                <p className="opacity-75 text-lg mb-2">My selected tool</p>
                <p className="text-3xl font-bold mb-1">{tool.name}</p>
                <p className="text-xl">{tool.description}</p>
              </div>
            </div>
            <div className="py-8">
              <p className="text-lg mb-2">Accessories compatible with this tool :</p>
            </div>
          </div>
        }
        <div className="">
          <AccessoryList accessoryList={tool.accessoryList} handleCart={handleCart} />
        </div>
      </div>
    </Layout>
  )
}
