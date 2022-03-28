// import classNames from 'classnames';
// import React from 'react'
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

// const AccordionLayout = ({
//   date,
//   children,
//   index,
//   activeIdx,
//   setActiveIdx,
// }) => {
//   const isExpanded = activeIdx.find(i => i === index) !== undefined;
//   const handleToggle = () => {
//     if (isExpanded) {
//       setActiveIdx(activeIdx.filter(i => i !== index));
//     } else {
//       setActiveIdx(activeIdx.concat(index));
//     }
//   }

//   return (
//     <div className="accordion-item border-b-2 border-gray-200 bg-white">
//       <h5 className="accordion-header mb-0">
//         <button
//           onClick={handleToggle}
//           className="
//         accordion-button
//         relative
//         flex
//         justify-between
//         w-full
//         items-center
//         rounded-none
//         border-0
//         bg-white py-4 px-5
//         text-left
//         text-base
//         text-gray-800
//         transition
//         focus:outline-none"
//           type="button"
//         >
//           <div className='border-l-4 border-sbaYellow pl-1 font-bold uppercase text-xl'>{date}</div>

//           <div>
//             {isExpanded ? (
//               <BsChevronUp className="h-8 w-8" />
//             ) : (
//               <BsChevronDown className="h-8 w-8" />
//             )}
//           </div>
//         </button>
//       </h5>

//       <div className={classNames('accordion-body py-4 px-5 mx-12 text-xl text-neutral-500', {
//         'line-clamp-2': !isExpanded,
//         truncate: !isExpanded
//       })}>{children}</div>
//     </div>
//   )
// }

// export default AccordionLayout
