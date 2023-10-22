import Tool from "./Tool";
import { ITool } from "@/typedefs";

interface IToolListProps {
  loading: boolean;
  searchTools: ITool[];
}

const ToolList = (props: IToolListProps) => {
  return (
    <div>
      { !props.loading && 
        (
          props.searchTools.length > 0 ?
            <p className="py-5 px-5">Please select your tool</p>
            :
            <p className="py-5 px-5">No products found.</p>
        )
      }
      <div className="mb-32 grid gap-8 text-left mb-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        props.loading ? (
          <p className="py-5 px-5">Loading ...</p>
        ) : (
          props.searchTools.map((tool, index) => <Tool tool={tool} key={index} />)
        )
      }
      </div>
    </div>
  )
}

export default ToolList;
