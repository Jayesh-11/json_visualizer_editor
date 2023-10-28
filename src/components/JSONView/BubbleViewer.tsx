import { useEffect } from 'react'
import { select, hierarchy, tree, linkHorizontal } from 'd3'
import { ToJsonTree } from './BubbleTreeUtils';

const BubbleViewer = ({ data }: { data: any }) => {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  const treeLayout = tree().size([height, width])
  useEffect(() => {
    const svg = select(document.getElementById("treeViewSvg"))
    svg.selectAll('*').remove()

    svg.attr('width', width).attr('height', height)


    const root = hierarchy(ToJsonTree(data, 'parent'))
    const paths = treeLayout(root).links();
    const pathGenerator = linkHorizontal().x(d => d.y).y(d => d.x)
    console.log(root, paths)
    svg.selectAll('path')
      .data(paths)
      .enter()
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-width', 2)
      .attr('d', pathGenerator)

    svg.selectAll('text')
      .data(root.descendants())
      .enter()
      .append('text')
      .attr('color', '#000')
      .attr('font-size', '0.75rem')
      .attr('x', d => d.y)
      .attr('y', d => d.x)
      .text(({ data }) => data.name)

  }, [])

  return <div>
    <svg id="treeViewSvg"></svg>
  </div>
}

export default BubbleViewer

