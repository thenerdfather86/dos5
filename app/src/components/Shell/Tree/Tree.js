import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

const TreeNode = props => {
  const [state, dispatch] = useStore()
  const { currentDrive, currentFolder, currentFile, tree, colors } = state.dos
  const { node } = props
  const subfolders = node.children.filter(node => node.ext === 'DIR')

  const StyledNode = styled.div`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75em;
  `

  const NodeIcon = () => {
    const hasChildren = subfolders.length > 0
    console.log(node.filename, hasChildren, subfolders)
    return `[${!hasChildren ? ' ' : node.isExpanded ? '-' : '+'}] `
  }

  const NodeName = () => {
    const isCurrent = node.id === currentFolder

    const StyledName = styled.div`
      background: ${isCurrent ? colors.selectedBackground : 'none'};
      color: ${isCurrent ? colors.selectedText : colors.text};
    `

    return <StyledName>{node.filename}</StyledName>
  }

  // const subfolders = node.children.filter(node => node.ext === 'DIR')

  return <><StyledNode>
     <NodeIcon />
     <NodeName />
  </StyledNode>
  {/* {subfolders.map(node => (
    <TreeNode key={node.id} node={node} />
  ))} */}
  </>
}

const Tree = props => {
  const StyledTree = styled.div`
    padding-left: 1em;
  `

  const { nodes } = props

  const folders = nodes[0].children.filter(node => node.ext === 'DIR')

  return <StyledTree>
    <TreeNode node={nodes[0]} />
    {folders.map(node => (
      <TreeNode key={node.id} node={node} />
    ))}
  </StyledTree>
}

export const DirTree = props => {
  const [state] = useStore()
  const { tree } = state.dos

  return <Tree nodes={tree} />
}