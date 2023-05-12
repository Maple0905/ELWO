import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import { ITool } from '@/components/Tool';
import ToolList from '@/components/ToolList';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Tools() {

  const [searchTools, setSearchTools] = useState<ITool[]>([]);
  const router = useRouter();
  const searchName = typeof router.query.name === 'string' ? router.query.name : '';

  useEffect(() => {
    let isMounted = true;

    const getTools = async () => {
      try {
        await axios.get(`${process.env.API_URL}/fitment/model/name?search=${searchName}`)
          .then(async (res) => {
            const data = res.data;

            let toolIds: any[] = [];
            data.map((item: any) => {
              if (item.productId != null) {                
                const id = item.productId;
                toolIds.push(id);
              }
            });

            let toolData: ITool[] = [];
            await Promise.all(toolIds.map((item: any) => fetch(`${process.env.API_URL}/products/${item}`)))
              .then(responses => Promise.all(responses.map(async res => await res.json())))
              .then((res: any) => {

                res.map((item: any) => {
                  const fTool: ITool = {
                    id: item.id,
                    name: item.description.name,
                    description: item.description.description,
                    type: item.type.description.name,
                    toolId: item.id,
                    code: item.sku,
                    url: item.image.imageUrl,
                  }

                  toolData.push(fTool);
                });

                if (isMounted) {
                  setSearchTools(toolData);
                }
              });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }

    getTools();

    return () => {
      isMounted = false;
    };
  }, [searchName]);

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <Link href={`/`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <input className="block px-5 py-5 w-full text-lg text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[url('/elwotools-green.png')] bg-no-repeat bg-center bg-contain" value={router.query.name} disabled />
        <p className="py-5 px-5">Please select your tool</p>
        <ToolList toolList={searchTools} />
      </div>
    </Layout>
  )
}
