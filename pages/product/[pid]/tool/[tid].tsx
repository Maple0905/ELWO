import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ToolDetail() {

  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <Link href={`/product/${tool.productId}`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1 px-5 bg-[url('/elwotools-green-lg.png')] bg-no-repeat bg-center bg-contain">
            <Image className="mx-auto" src={tool.url} alt="Tool Logo" width={1000} height={1000} />
          </div>
          <div className="col-span-1 px-5 flex flex-col content-between">
            <div className="">
              <div>
                <p className="text-xl font-semibold">{tool.description1}</p>
                <p className="text-xl">{tool.description2}</p>
              </div>
              <div className="py-5">
                <p className="text-5xl font-bold mb-1">{tool.name}</p>
              </div>
              <div className="">
                <p className="text-xl">{tool.description3}</p>
              </div>
            </div>
            <div className="pt-8">
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tool = {
  id: "",
  productId: "1",
  name: "Bosch GSR 12V",
  description1: "TELCO S2",
  description2: "ART NR 207-1567",
  description3: "Bosch Professional - Machines and accessories such as batteries and chargers from Bosch Professional are only compatible with other products in the same series, i.e. the blue Bosch Professional series. This means that you cannot use blue Bosch products together with products from the green Bosch DIY series. Bosch 12V Li-ion 3.0Ah stick battery. Fits Bosch 10.8V and 12V cordless tools.",
  Voltage: "12V",
  EAN: "3165140730358",
  url: "/tool.png"
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      tool,
    },
  }
}
