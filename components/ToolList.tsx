import Tool, { ITool } from "./Tool";

interface IToolListProps {
  toolList: ITool[]
}

const ToolList = (props: IToolListProps) => {
  return (
    <div className="mb-32 grid gap-8 text-left mb-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.toolList.map((tool, index) => <Tool tool={tool} key={index} />)}
    </div>
  )
}

export default ToolList;
