import { isObject } from '../homepage/homepageUtils'

const BubbleViewer = ({ data }: { data: any }) => {
  if (isObject(data)) {
    return Object.keys(data).map((instance) => {
      return <BubbleViewer data={instance} />
    })
  }
  if (Array.isArray(data)) {
    return data.map((instance) => {
      return <BubbleViewer data={instance} />
    })
  }

  return <div>{JSON.stringify(data)}</div>
}

export default BubbleViewer