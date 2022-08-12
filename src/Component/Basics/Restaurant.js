import React, {useState} from 'react'
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set (Menu.map((currElem)=> {
  return currElem.category;
})), "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  // const [menuList, setMenuList] = useState(uniqueList);
  
console.log(uniqueList);

const filteritem = (listCategory) => {

    if(listCategory === "All"){
        setMenuData(Menu) 
        return;
    }

    // currElem.category (Card Category) === category ( nav List category)
    else{

      const updatedList = Menu.filter((currElem)=> {
        return currElem.category === listCategory;
    })
    setMenuData(updatedList);
    
    }
    
  
} ;

  return (
    <>
    <Navbar filteritem = {filteritem} UniqueList = {uniqueList} />
    <MenuCard menuData = {menuData} />
    </>
  )
}

export default Restaurant;