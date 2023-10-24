import { TriangleDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

const TreeViewDropDown = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TriangleDownIcon style={{ rotate: isOpen ? '0deg' : '-90deg' }} onClick={() => setIsOpen(!isOpen)} />
        <strong>{title}{isOpen && ':'}</strong>
      </div>

      {isOpen && <div style={{ paddingLeft: '10px' }}>{children}</div>}
    </div>
  )
}

export default TreeViewDropDown