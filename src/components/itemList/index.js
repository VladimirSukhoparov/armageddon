import React from 'react'
import { cn as bem } from "@bem-react/classname";
import "style.css"

const ItemList = () => {
    const cn = bem("ItemList")
  return (
    <div className={cn()}>ItemList</div>
  )
}

export default ItemList