import React, { useEffect, useState } from 'react';
import { allMenu } from '../http/allApi';
import {Row} from 'react-bootstrap';
import OrderCard from '../components/OrderCard';

const MenuPage = () => {
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [collectionMenu, setCollectionMenu] = useState([]);
  useEffect(() => {
      let menu = async () => {
          try {
              let collectionMenu = await allMenu();
              if (!collectionMenu) alert(`Error`)
              setLoadingMenu(true)
              setCollectionMenu(collectionMenu);
          } catch (error) {
              alert(error, "Error request")
          }
      };
      menu();
  }, [])
  if (!loadingMenu) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1>Loading...</h1>
        </div>
    )
  }
  return (
    <>
      <Row md={3} className='d-flex justify-content-center align-items-center'>
            {
              collectionMenu.map(menuItems =>
                <OrderCard key={Math.random()} orderMenuItems={menuItems.id} menu={collectionMenu} active={true} />
              )
            }
      </Row>
      <hr />
    </>
  )
}

export default MenuPage
