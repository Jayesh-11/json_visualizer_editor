import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { Textarea } from '@chakra-ui/react'
import ResultViewPort from "./ResultViewPort"
import { jsonValidator } from "./homepageUtils"
import { useMainStore } from "../../zustand/store"


const Homepage = () => {
  const [currentJSON, setCurrentJSON] = useState<string | null>(null)
  const [isJsonValid, setIsJsonValid] = useState<boolean>(false)
  const isBubbleViewOpen = useMainStore(state => state.isBubbleViewOpen)
  const isJSONTreeViewOpen = useMainStore(state => state.isJSONTreeViewOpen)
  const setIsBubbleViewOpen = useMainStore(state => state.setIsBubbleViewOpen)
  const setIsJSONTreeViewOpen = useMainStore(state => state.setIsJSONTreeViewOpen)
  const textChangeHandler = (json: string) => {
    setCurrentJSON(json)
    setIsJsonValid(jsonValidator(json))
  }

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }} >
        <Textarea
          placeholder='Insert JSON here'
          style={{ height: '450px', width: "600px", display: 'flex', justifyContent: 'column' }}
          value={currentJSON ?? ""}
          onChange={(e) => textChangeHandler(e.target.value)}
          isInvalid={!isJsonValid}
        />
        <Button
          isDisabled={!isJsonValid}
          colorScheme={isBubbleViewOpen ? 'orange' : 'blue'}
          onClick={() => { setIsBubbleViewOpen(!isBubbleViewOpen) }}>Show Bubble Tree
        </Button>
        <Button
          isDisabled={!isJsonValid}
          colorScheme={isJSONTreeViewOpen ? 'orange' : 'blue'}
          onClick={() => setIsJSONTreeViewOpen(!isJSONTreeViewOpen)}>
          Show JSON tree
        </Button>
      </div>
      {currentJSON && isJsonValid && <ResultViewPort currentJSON={currentJSON} />}
    </div>
  )
}

export default Homepage