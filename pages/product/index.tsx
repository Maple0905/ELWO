import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import { IProduct } from '@/components/Product';
import ProductList from '@/components/ProductList';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Products() {

  const [searchProducts, setSearchProducts] = useState<IProduct[]>([]);
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        await axios.get(`https://staging-et01.jinoteco.se/api/v1/fitment/model/name?search=${query.name}`)
          .then((res) => {
            console.log(res.data);
            if (isMounted) {
              setSearchProducts(res.data);
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }

    }
  
    getProducts();
  
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <Link href={`/`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <input className="block px-5 py-5 w-full text-lg text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[url('/elwotools-green.png')] bg-no-repeat bg-center bg-contain" value={query.name} disabled />
        <p className="py-5 px-5">Please select your tool</p>
        <ProductList products={searchProducts} />
      </div>
    </Layout>
  )
}
