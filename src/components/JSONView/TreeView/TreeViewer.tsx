import { isObject } from '../../homepage/homepageUtils'
import TreeViewDropDown from './TreeViewDropDown'

const TreeViewer = ({ data, index }: { data: any, index?: number }) => {
  console.log(data)
  if (isObject(data)) {
    return Object.keys(data).map((instance) => {
      return <TreeViewDropDown title={instance}>
        <TreeViewer data={data[instance]} key={JSON.stringify(data[instance])} />
      </TreeViewDropDown>
    })
  }
  if (Array.isArray(data)) {
    return data.map((instance, index) => {
      return <TreeViewer data={instance} key={JSON.stringify(data[instance])} index={index} />
    })
  }

  return <div style={{ textAlign: 'start', backgroundColor: '#BC7DDA', width: 'fit-content', borderRadius: '4px' }}>{index}:{JSON.stringify(data)}</div>
}

export default TreeViewer