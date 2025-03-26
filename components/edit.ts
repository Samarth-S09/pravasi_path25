// // Draw all nodes as square buttons
// Object.entries(activeCoordinates).forEach(([node, [x, y]]) => {
//     const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//     const [scaledX, scaledY] = scaleCoordinates(x, y, svgSize);
//     rect.setAttribute('x', (scaledX - 14).toString()); // Center the 26px square
//     rect.setAttribute('y', (scaledY - 14).toString()); // Center the 26px square
//     rect.setAttribute('width', '28');
//     rect.setAttribute('height', '28');
//     rect.setAttribute('fill', 'transparent');
//     rect.setAttribute('stroke', '#00ff00');
//     rect.setAttribute('stroke-width', '2');
//     rect.setAttribute('data-node', node);

//     if (node === "kiosk") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//     }

//     if (node === "e52") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "mb2") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "mb4") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "lb2") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e51") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e11") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e12") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "ub1") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "ub2") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "ub3") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "ub4") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e61") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e62") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e2") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e3") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e41") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "ub0") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "lb4") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "e42") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     if (node === "lb1") {
//       rect.setAttribute('fill', '#00ff00');
//       rect.setAttribute('filter', 'url(#glow)');
//       rect.setAttribute('x', (scaledX - 9).toString()); // Center the 26px square
//       rect.setAttribute('y', (scaledY - 9).toString()); // Center the 26px square
//       rect.setAttribute('width', '18');
//       rect.setAttribute('height', '18');
//       rect.setAttribute('fill', 'transparent');
//       rect.setAttribute('stroke', 'transparent');
//       rect.setAttribute('stroke-width', '2');
//       pathGroup.appendChild(rect);  
//     }

//     nodesGroup.appendChild(rect);
//   });