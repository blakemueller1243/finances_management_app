// import React, { useState } from 'react';
// import { Box as MuiBox } from '@mui/material';
// import { ResizableBox } from 'react-resizable';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import Header from "../../../components/Header";
// import LineChart from "../../../components/LineChart";
// import CalendarChart from "../../../components/CalendarChart";
// import BarChart from "../../../components/BarChart";
// import StatBox from "../../../components/StatBox";
// import ProgressCircle from "../../../components/ProgressCircle";
// import ProgressBar from "../../../components/ProgressBar";
// import BusinessDashboardSwitcher from "../../../components/BusinessDashboardSwitcher";

// const type = 'BOX';

// const DraggableBox = ({ id, children }) => {
//   const [, ref] = useDrag({
//     type,
//     item: { id },
//   });
  
//   return (
//     <MuiBox ref={ref} style={{ border: '4px solid black' }}>
//       {children}
//     </MuiBox>
//   );
// };

// const DroppableArea = ({ id, onDrop, children }) => {
//   const [, ref] = useDrop({
//     accept: type,
//     drop(item) {
//       onDrop(item.id, id);
//     },
//   });
  
//   return (
//     <MuiBox ref={ref}>
//       {children}
//     </MuiBox>
//   );
// };

// const ResizableDraggableBox = ({ id, findBox, moveBox, children }) => {
//   return (
//     <ResizableBox width={600} height={400} style={{ border: '4px solid black' }}>
//       <DraggableBox id={id}>
//         {children}
//       </DraggableBox>
//     </ResizableBox>
//   );
// };

// const DynamicDashboard = () => {
//   const [boxes, setBoxes] = useState([
//     { id: 1, component: <Header /> },
//     { id: 2, component: <CalendarChart /> },
//     { id: 3, component: <BarChart /> },
//     { id: 4, component: <LineChart /> },
//     { id: 5, component: <StatBox /> },
//     { id: 6, component: <BusinessDashboardSwitcher /> },
//   ]);

//   const moveBox = (fromId, toId) => {
//     const fromIndex = boxes.findIndex(box => box.id === fromId);
//     const toIndex = boxes.findIndex(box => box.id === toId);

//     if (fromIndex !== -1 && toIndex !== -1) {
//       const [movedBox] = boxes.splice(fromIndex, 1);
//       boxes.splice(toIndex, 0, movedBox);
//       setBoxes([...boxes]);
//     }
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         {boxes.map((box, i) => (
//           <DroppableArea key={box.id} id={box.id} onDrop={moveBox}>
//             <ResizableDraggableBox id={box.id}>
//               {box.component}
//             </ResizableDraggableBox>
//           </DroppableArea>
//         ))}
//         <button onClick={() => setBoxes([...boxes, { id: boxes.length + 1, component: 'New Box' }])}>
//           Add New Component
//         </button>
//       </div>
//     </DndProvider>
//   );
// };

// export default DynamicDashboard;
