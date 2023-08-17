import React, {useState} from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Wallet = () =>{
    const data = [{title:'Transferencia realizada',price:'-$3.000',fecha:'10 dic. 15:43',id:'1',color:'red',type:'transf',status:'ok'},
                  {title:'Ingreso recibido',price:'+$7.000',fecha:'4 dic. 22:31',id:'2',color:'green',type:'ingr',status:'ok'}, 
                  {title:'Pago realizado',price:'-$4.582,34',fecha:'25 nov. 12:17',id:'3',color:'red',type:'pago',status:'ok'},
                  {title:'Pago realizado',price:'-$10.032',fecha:'25 nov. 11:01',id:'4',color:'red',type:'pago',status:'ok'},
                  {title:'Pago denegado',price:'-$12.121,09',fecha:'16 nov. 16:54',id:'5',color:'red',type:'pago',status:'error'},
                  {title:'Ingreso recibido',price:'+$20.000',fecha:'21 oct. 19:20',id:'6',color:'green',type:'ingr',status:'ok'},
                  {title:'Ingreso recibido',price:'+$2.000',fecha:'21 oct. 18:32',id:'7',color:'green',type:'ingr',status:'ok'},
                  {title:'Transferencia denegada',price:'$5.000',fecha:'19 oct 15:22',id:'8',color:'red',type:'transf',status:'error'}
     ]
    const [open,setOpen] = useState(true)  
   
       return (
               <View
               style={styles.container}>
                   <View style={styles.header}>
                        <Text style={styles.t3}>Hola,Juan!</Text>
                        <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                          <Image source={require('../../../assests/slicebanner.png')}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                          <Text style={[styles.t3,{position:'absolute',right:6,bottom:5}]}>Wallet</Text>
                        </View>
                   </View> 
                   <View style={styles.actions}>
                       <Text style={[styles.t3,{color:'black'}]}>Total</Text>
                       <View style={{flexDirection:'row', alignItems:'center',}}>
                         {
                           (open)?
                           (
                             <Text style={styles.t1}>$12.462</Text>
                           )
                           :
                           (<Text style={styles.t1}>****</Text>)
                         }
                         <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center'}} 
                         onPress={open ? ()=>setOpen(false): ()=>setOpen(true) }>
                           {open?
                           <Icon 
                               name="eye-outline"
                               color="black"
                               size={ 25 }
                           />
                           :
                           <Icon 
                               name="eye-off-outline"
                               color="black"
                               size={ 25 }
                           />}
                         </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row', width:'100%',justifyContent:'space-around'}}>
                         <View style={[styles.actionsBtnPos]}>
                             <TouchableOpacity style={styles.actionsBtn}>
                               <Icon 
                               name="cash-outline"
                               color="black"
                               size={ 18 }
                               />
                               <Icon 
                               name="arrow-back-outline"
                               color="black"
                               size={ 17 }
                               />
                             </TouchableOpacity>
                             <Text style={[styles.t3,{color:'black'}]}>
                                 Transferir
                             </Text>
                         </View>
                         <View style={[styles.actionsBtnPos]}>
                             <TouchableOpacity style={styles.actionsBtn}>
                               <Icon 
                               name="cash-outline"
                               color="black"
                               size={ 18 }
                               />
                               <Icon 
                               name="arrow-forward-outline"
                               color="black"
                               size={ 17 }
                               />
                             </TouchableOpacity>
                             <Text style={[styles.t3,{color:'black'}]}>
                                 Ingresar
                             </Text>
                         </View>
                         <View style={[styles.actionsBtnPos]}>
                             <TouchableOpacity style={styles.actionsBtn}>
                               <Icon 
                                 name="ellipsis-vertical-outline"
                                 color={"black"}
                                 size={ 30 }
                               />
                             </TouchableOpacity>
                             <Text style={[styles.t3,{color:'black'}]}>
                                 Más
                             </Text>
                         </View>
                       </View>
                   </View>
                   <View style={styles.activity}>
                   <Text style={[styles.t2,{color:'black'}]}>Movimientos</Text>
                     <FlatList
                     data={data}
                     keyExtractor={(e)=>e.id}
                     renderItem={({item})=>(
                       <View style={styles.itemActivity}>
                         <View style={{flexDirection:'row'}}>
                           <View style={[styles.type,{backgroundColor:item.status=== 'ok'? "#ADFF9F": "#FBA2A2"}]}>
                           <Icon 
                             name="cash-outline"
                             color={item.status=== 'ok'? "green": "red"}
                             size={ 18 }
                           />
                           <Icon 
                             name={item.type=== 'transf'||item.type==='pago'? "arrow-back-outline": "arrow-forward-outline"}
                             color={item.status=== 'ok'? "green": "red"}
                             size={ 17 }
                           />
                           </View>
                           <View style={{marginLeft:5}}>
                             <Text style={[styles.t3,{color:'black',fontSize:14}]}>
                               {item.title}
                             </Text>
                             <Text style={[styles.t3,{color:'black',fontSize:12}]}>
                               {item.fecha} 
                             </Text>
                           </View>
                         </View>
                         <View style={{flexDirection:'row'}}>
                           <Text style={[styles.t3,{color:item.color,fontSize:16}]}>
                                 {item.price} 
                               </Text>
                           <Icon 
                             name="caret-forward-outline"
                             color='black'
                             size={ 20 }
                           />
                         </View>
                       </View>
                     )}
                     />
                   </View>
               </View>
             );
   }
           
   
   
   const styles = StyleSheet.create({
             container: {
               backgroundColor:'white',
               alignItems:'center',
               flex:1
             },
             header:{
               width:'100%',
               height:70,
               backgroundColor:'black',
               borderBottomColor:'grey',
               borderBottomWidth:2,
               flexDirection:'row',
               justifyContent:'space-between',
               alignItems:'center',
               paddingHorizontal:20
             },
             t1:{
               color:'black',
               textAlign:'center',
               fontSize:35,
               fontWeight:'100',
               padding:10,
             },
             t2:{
               color:'black',
               textAlign:'center',
               fontSize:25,
               fontWeight:'100',
             },
             t3:{
               color:'white',
               textAlign:'left',
               fontSize:14,
               fontWeight:'100',
             },
             actions:{
               width:'100%',
               height:230,
               justifyContent:'center',
               alignItems:'center',
             },
             actionsBtn:{
               width:50,
               height:50,
               backgroundColor:'white',
               borderRadius:15,
               shadowColor: "#000",
               shadowOffset: {
                 width: 0,
                 height: 2,
               },
               shadowOpacity: 0.25,
               shadowRadius: 3.84,
               elevation: 5,
               alignItems:'center',
               justifyContent:'center'
             },
             actionsBtnPos:{
               width:100,
               alignItems:'center',
             },
             activity:{
               width:'90%',
               height:400,
               borderRadius:20,
               backgroundColor:'#EEEEEE'
             },
             footer:{
               position:'absolute',
               bottom:'0%',
               width:'100%',
               height:70,
               backgroundColor:'white',
               borderTopColor:'#DDDDDD',
               borderTopWidth:0.5,
               justifyContent:'center',
               alignItems:'flex-start',
             },
             itemActivity:{
               width:'100%',
               height:60,
               borderBottomColor:'white',
               borderBottomWidth:1,
               flexDirection:'row',
               alignItems:'center',
               paddingHorizontal:10,
               justifyContent:'space-between'
             },
             type:{
               width:50,
               height:50,
               borderRadius:50,
               backgroundColor:'gray',
               alignItems:'center',
               justifyContent:'center'
             }
            
            
           });