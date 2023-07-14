"use client"
import { useRef } from "react"
import Image from "next/image"
import Ticket from "../app/ticket.json"
function Home() {
  const componentRef = useRef(null);

  function handleClick() {
    console.log(componentRef)
  }




  return (  
    <div className='text-stone-50 bg-stone-950  p-4'>
      {console.log(Ticket)}
      <div className="grid grid-cols-3 gap-8">
        {Ticket.map((node) =>
        (
          <div key={node.id} className="shadow rounded-md flex flex-col p-4 bg-stone-50 text-stone-950">
            <Image src={node.posterUrl1} width={200} height={200} alt="" />
            <h2 className=" ">{node.headline}</h2>
            <p>{}</p>
            <button data-ticketId={node.id} ref={componentRef} onClick={handleClick} >anjay</button>
            <a href={node}></a>
            {/* {node.sale.map((price)=>(
              <div key={price.id} className="flex flex-col py-4">
                <h4>{price.category}</h4>
                <p >{price.price}</p>
              </div>
            ))} */}
          </div>
        )
        )}
      </div>

    </div>
  )
}

export default Home