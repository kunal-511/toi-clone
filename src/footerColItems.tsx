import React from 'react'
interface FooterColItemsProps{
  footerItems1:string;
  footerItems2:string;
  footerItems3:string;
  footerItems4:string;
  footerItems5:string | null;
  footerItems6:string | null;
}
const footerColItems:React.FC<FooterColItemsProps> = ({footerItems1, footerItems2, footerItems3, footerItems4, footerItems5, footerItems6}) => {
  return (
    <>
     <ul>
              <li>{footerItems1} </li>
              <li>{footerItems2} </li>
              <li>{footerItems3} </li>
              <li>{footerItems4} </li>
              <li>{footerItems5} </li>
              <li>{footerItems6} </li>
              
            </ul>
      
    </>
  )
}

export default footerColItems
