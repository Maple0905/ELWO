import { IProduct } from '@/components/Product'
import { GetStaticProps } from 'next'
import ProductList from '@/components/ProductList'
import Layout from '@/components/Layout'
import { useState } from 'react'

export default function Home() {
  
  const [ productName, setProductName ] = useState("");

  return (
    <Layout>
      <div className="max-w-7xl">
        <input className="text-lg w-full border-b border-gray-300 from-zinc-200 py-6 lg:static lg:rounded-xl lg:border lg:px-5" placeholder="Find your power tool by model, article number or EAN..." onChange={(e) => setProductName(e.target.value)} />
        <div className="px-5 py-5"><span className="text-md">Please select your tool : </span></div>
        {
          productName != "" ? <ProductList products={products} /> : ''
        }
      </div>
    </Layout>
  )
}

export const products: IProduct[] = [
  {
    id: "1",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "2",
    name: "Bosch GSR 12V",
    type: "-15",
    url: "/product.png"
  },
  {
    id: "3",
    name: "Bosch GSR 12V",
    type: "-35",
    url: "/product.png"
  },
  {
    id: "4",
    name: "Bosch GSR 12V",
    type: "-35 FC",
    url: "/product.png"
  },
  {
    id: "5",
    name: "Bosch GSR 12V",
    type: "-35 HX",
    url: "/product.png"
  },
  {
    id: "6",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "7",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "8",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
]

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products
    }
  }
}
