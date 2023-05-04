import Tool, { ITool } from '@/components/Tool'
import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetail() {
  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <Link href={`/`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Start page</p>
          </div>
        </Link>
        <div className="">
          <div className="pt-8 bg-[url('/elwotools-green-lg.png')] bg-no-repeat bg-bottom bg-cover">
            <Image className="mx-auto" src="/cart-check.png" alt="Cart Check" width={150} height={150} />
          </div>
          <div className="pt-5 text-center">
            <p className="text-4xl font-bold">Added to cart!</p>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-xl sm:text-2xl mb-3">Interested in any of these compatible accessories?</p>
          <hr className="bg-black" />
          <div className="pt-5 mb-32 text-center grid gap-8 grid-cols-2 md:grid-cols-3 lg:mb-0 lg:grid-cols-4 lg:text-left">
            {tools.map((tool, index) => <Tool tool={tool} key={index} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tools: ITool[] = [
  {
    id: "1",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "2",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "3",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "4",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
]

export const product = {
  id: "1",
  name: "Bosch GSR 12V",
  description: "Flexible 12V drill driver with 30Nm and up to 1300 revolutions per minute. Including bit holder adapter, offset angle adapter and angle adapter.",
  url: "/product.png"
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      product,
    },
  }
}
