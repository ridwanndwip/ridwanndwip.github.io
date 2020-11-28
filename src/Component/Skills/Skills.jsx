// import React,{Component, Fragment} from 'react';
// import './Skills.scss';
// import {data} from './data';
// import Card from './card.jsx'

// const ProductList = (props) => {
//     return(
//         <Fragment>
//         <div>
//             <button value="design" onClick={props.filterBtn}> Design </button>
//             <button value="language" onClick={props.filterBtn}>Language </button>
//             <button value="programming" onClick={props.filterBtn}> Programming </button>
//         </div>
//         <div>
//             {props.products.map(product=>{
//                 return <Card key={product.id} product={product}
//             /> })}
//         </div>
//         </Fragment>
//     )
// }

// export default class Skills extends Component {
//     state = {
//         products : data,
//         productCopy: [
//             {
//             id : 'Service',
//             cat : 'programming',
//             title : 'photoshop',
//             desc : 'navbar__link',
//             src : '../../Assets/img/logo.png'
//         },
//         {
//             id : 'Achievement',
//             cat : 'programming',
//             title : 'excel',
//             desc : 'navbar__link'
//         },
//         {
//             id : 'Achievement',
//             cat : 'programming',
//             title : 'excel',
//             desc : 'navbar__link'
//         }
//     ]
//     }

//     filterBtn =(e)=>{
//         let productCopy;

// // Jika menggunakan If Else
// // if(e.target.value==="All"){
// // productCopy=this.state.products;
// // }
// // else{
// // productCopy=this.state.products.filter(item=>item.cat===e.target.value)
// // }

//         productCopy=this.state.products.filter(item=>item.cat===e.target.value)

//         this.setState({
//             productCopy:productCopy
//         })

//     }

//     render(){
//         return(
//             <div>
//                 <ProductList products={this.state.productCopy} filterBtn={this.filterBtn}/>
//             </div>
//         )
//     }
// }