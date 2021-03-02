import React from 'react';
import {Grid} from '@material-ui/core';
import Prodcut from './Prodcut/Prodcut'
const prodcuts=[
    {id:1,name:'shoes',description:'running shoes',price:'$4' ,image:'https://v.nike.com/news/nike-adapt-bb'},
    {id:2,name:'shirt',description:'uniform'      ,price:'$3' ,image:'/shoes.jpg'}];


    const ProdcutS=()=>
    {
        return(
            <main>
            <Grid container justify="center" spacing={4}>
                 {
                     prodcuts.map((prodcut)=> (
                         <Grid item key={prodcut.id} xs={12} sm={6} md={4} lg={3}>
                             <Prodcut  prodcut={prodcut}/>
                             </Grid>
                     ) )  }
            </Grid>
        </main>
        )
      
    }

    export default ProdcutS;
    