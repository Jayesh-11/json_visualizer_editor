import { useMainStore } from '../../zustand/store'
import BubbleViewer from '../JSONView/BubbleViewer'
import TreeViewer from '../JSONView/TreeView/TreeViewer'

const ResultViewPort = ({ currentJSON }: { currentJSON: string }) => {
  const isBubbleViewOpen = useMainStore(state => state.isBubbleViewOpen)
  const isJSONTreeViewOpen = useMainStore(state => state.isJSONTreeViewOpen)
  if (isBubbleViewOpen) {
    return <BubbleViewer data={JSON.parse(currentJSON)} />
  }
  if (isJSONTreeViewOpen) {
    return <TreeViewer data={JSON.parse(currentJSON)} />
  }
  return (
    <div>Hey, did you forget to select view or import json?</div>
  )
}

export default ResultViewPort