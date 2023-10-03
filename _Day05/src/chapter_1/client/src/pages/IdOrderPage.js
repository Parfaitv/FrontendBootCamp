import React, { useEffect, useState } from 'react';
import { allOrders, allMenu } from '../http/allApi';
import { Row, Button } from "react-bootstrap";
import OrderCard from '../components/OrderCard';

const IdOrderPage = () => {
    const [order, setOrders] = useState();
    const [loadingUser, setLoadingUser] = useState(false);
    const [calc, setCalc] = useState(false);
    const [orderClose, setOrderClose] = useState(true);
    const [loadingMenu, setLoadingMenu] = useState(false);
    const [collectionMenu, setCollectionMenu] = useState([]);
    const [cost, setCost] = useState(0);
    useEffect(() => {
        let response = async () => {
            try {
                const router = window.location.pathname.split("/");
                const id = router[router.length - 1];
                let ordersCollection = await allOrders();
                if (!ordersCollection) alert(`Not found order ${id}`)
                setLoadingUser(true)
                let filterOrder = ordersCollection.filter(order => order.id === Number(id));
                setOrders(...filterOrder);
            } catch (e) {
                alert(e, "Error request")
            }
        };
        response();
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
    
    if (!loadingUser || !loadingMenu) {
        return <>
            <div className='d-flex justify-content-center align-items-center'>
                <h1>Loading...</h1>
            </div>
        </>
    }

    let allcost = () => {
        let sumCost = 0;
        for (let i = 0; i < order.items.length; i++) {
            let id = order.items[i];
            let item = collectionMenu.find((obj) => obj.id === id);
            if (item) {
                sumCost += item.cost;
            }
        }
        setCalc(true)
        setCost(sumCost)
    }

    const closeOrder = () => {

        order.isActive = !order.isActive

        setOrders(order)
        setOrderClose(prev => !prev)
    }

    return (
        <>
        <Row md={3} className='d-flex justify-content-center align-items-center'>
            {
                order.items.map(menuItems =>
                    <OrderCard key={Math.random()} orderMenuItems={menuItems} menu={collectionMenu} />
                )
            }
        </Row>
        <hr />
        {loadingUser &&
            <div className='d-flex justify-content-around align-items-end flex-column m-3'>
                {!calc ?
                    <div>
                        Total amount: 
                        <Button
                        onClick={allcost}
                        variant="outline-success"
                        >
                        Узнать Стоимость
                        </Button>
                    </div>
                    :
                    <div>
                        Total amount: 
                        <Button
                        onClick={() => setCalc(prev => !prev)}
                        variant="outline-success"
                        >
                        {cost} 
                        </Button>
                    </div>
                }
                {orderClose ?
                    <Button
                    onClick={closeOrder}
                    variant="outline-danger"
                    >
                    Close order
                    </Button>
                    :
                    <Button
                    onClick={closeOrder}
                    variant="outline-success"
                    >
                    Order activate
                    </Button>
                }
            </div>
        }


        </>
    );
};


export default IdOrderPage
