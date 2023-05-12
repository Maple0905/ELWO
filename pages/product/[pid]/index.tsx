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

export default function ProductDetail() {

  const router = useRouter();
  const productId = typeof router.query.pid === 'string' ? router.query.pid : '';

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

    const getProductDetail = async () => {
      try {
        await axios.get(`${process.env.API_URL}/products/${productId}`)
          .then(async (res) => {
            const productCode = res.data.sku;
            const productName = res.data.description.name;
            const productDescription = res.data.description.description;
            const productUrl = res.data.image.imageUrl;

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
                    url: item.image.imageUrl
                  };
                  toolData.push(tool);
                });

                if (isMounted) {
                  setProduct({
                    tools: toolData,
                    name: productName,
                    description: productDescription,
                    url: productUrl
                  });
                }
              })
              .catch((err) => console.log(err));
          })
      } catch (err) {
        console.log(err);
      }
    }

    getProductDetail();

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
