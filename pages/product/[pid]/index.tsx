import { useState, useEffect } from 'react';
import { ITool } from '@/components/Tool'
import { GetServerSideProps } from 'next'
import ToolList from '@/components/ToolList'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';

interface IProduct {
  tools: ITool[],
  name: string,
  description: string,
  url: string
}

export default function ProductDetail(props: any) {

  const router = useRouter();
  const query = router.query;
  const productId = typeof query.pid === 'string' ? query.pid : '';
  const productName = typeof query.productName === 'string' ? query.productName : '';
  const productCode = typeof query.productCode === 'string' ? query.productCode : '';

  const [cart, setCart] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    tools: [],
    name: "",
    description: "",
    url: "",
  });

  const handleCart = () => {
    setCart(true);
  }

  useEffect(() => {
    let isMounted = true;

    const getTools = async () => {
      try {
        await axios.get(`${process.env.API_URL}/products?page=0&count=20&fitment=${productCode}&lang=sv`)
          .then((res) => {
            const data = res.data;
    
            let toolData: ITool[] = [];
            data['products'].map((item: any) => {
              const tool: ITool = {
                id: item.id,
                productId: productId,
                name: item.description.name,
                type: item.type.description.name,
                sku: item.sku,
                prevPrice: "2.545",
                currentPrice: "1.745",
                fee: "15",
                url: "/tool.png"
              };
              toolData.push(tool);
            });

            if (isMounted) {
              setProduct({
                tools: toolData,
                name: productName,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                url: "/product.png",
              });
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
    
    getTools();

    return () => {
      isMounted = false;
    }

  }, []);

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
                    <Image className="mx-auto my-auto" src={product.url} alt="Tool Logo" width={400} height={400} />
                  </div>
                </div>
              </div>
              <div className="col-span-1 pt-5 sm:pt-0 px-5 mx-auto my-auto">
                <p className="opacity-75 text-lg mb-2">My selected tool</p>
                <p className="text-3xl font-bold mb-1">{product.name}</p>
                <p className="text-xl">{product.description}</p>
              </div>
            </div>
            <div className="py-8">
              <p className="text-lg mb-2">Accessories compatible with this tool :</p>
            </div>
          </div>
        }
        <div className="">
          <ToolList tools={product.tools} handleCart={handleCart} />
        </div>
      </div>
    </Layout>
  )
}
