import React from 'react'
import Exercises01 from './component1+2/Exercises01'
import Exercises02 from './component1+2/Exercises02'
import Exercise03 from './component3/Exercise03'
import Parent_Comp from './component4/Parent_Comp'
import Bt5 from './component5/Bt5'
import Bt6 from './component6/Bt6'
import ListPost from './component7/ListPost'
import ListProduct from './component8/ListProduct'

export default function App() {
  return (
    <div>Bài 1
      <Exercises01></Exercises01>
      Bài 2
      <Exercises02></Exercises02>
      bài 3
      <Exercise03></Exercise03>
      bài 4
      <Parent_Comp></Parent_Comp>
      bài 5
      <Bt5></Bt5>
      bài 6
      <Bt6></Bt6>
      bài 7
      <ListPost></ListPost>
      bài 8
      <ListProduct></ListProduct>
    </div>
  )
}